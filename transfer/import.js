/**
 * MIME Filter: settings import window.
 * Runs in its own small window so the file picker cannot close it. Reads a file
 * exported by MIME Filter, checks it, shows what it contains, and only saves it
 * when Apply is pressed. After saving it reads the values back from storage to
 * confirm the browser kept them, then closes itself. The background script follows storage changes,
 * so imported settings apply straight away.
 */

'use strict';

const FORMAT    = 'mime-filter-settings';
const VERSION   = 1;
const MAX_CHARS = 2000000;
const MAX_RULES = 5000;
const MAX_SITES = 1000;

function el(id) { return document.getElementById(id); }

// Kept in step with normalizeHost and isValidHost in background.js
function normalizeHost(input) {
  let host = String(input || '').trim().toLowerCase();
  host = host.replace(/^[a-z][a-z0-9+.-]*:\/\//, '');
  host = host.replace(/^\*\./, '');
  host = host.replace(/^www\./, '');
  host = host.split(/[/?#]/)[0];
  host = host.replace(/:\d+$/, '');
  host = host.replace(/\.$/, '');
  return host;
}

function isValidHost(host) {
  return /^(?=.{1,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(host);
}

// Keeps only well formed MIME rules, lowercased and without duplicates
function cleanTypeList(value) {
  if (!Array.isArray(value)) return null;
  const seen = new Set();
  for (const item of value.slice(0, MAX_RULES)) {
    if (typeof item !== 'string') continue;
    const t = item.trim().toLowerCase();
    if (t.length > 0 && t.length <= 200 && t.includes('/') && /^[a-z0-9!#$&^_.+*\/-]+$/.test(t)) seen.add(t);
  }
  return [...seen];
}

function cleanSiteRules(value) {
  if (!Array.isArray(value)) return null;
  const byHost = new Map();
  for (const item of value.slice(0, MAX_SITES)) {
    if (!item || typeof item !== 'object') continue;
    const host = normalizeHost(item.host);
    if (!isValidHost(host)) continue;
    if (!['allow', 'block', 'only'].includes(item.action)) continue;
    const types = item.action === 'only' ? (cleanTypeList(item.types) || []) : [];
    if (item.action === 'only' && types.length === 0) continue;
    byHost.set(host, { host, action: item.action, types });
  }
  return [...byHost.values()];
}

// Turns file text into a safe settings object keyed by storage names. Throws a short message a person can act on
function parseImport(text) {
  if (typeof text !== 'string' || !text.trim()) throw new Error('That file is empty.');
  let data;
  try { data = JSON.parse(text.replace(/^﻿/, '')); }
  catch { throw new Error('That is not a valid settings file.'); }
  if (!data || data.format !== FORMAT) throw new Error('That is not a MIME Filter settings file.');
  if (typeof data.version !== 'number' || data.version > VERSION) throw new Error('That file comes from a newer version. Update MIME Filter and try again.');
  const src = data.settings;
  if (!src || typeof src !== 'object') throw new Error('The file has no settings in it.');

  const out = {};
  if (typeof src.enabled === 'boolean') out.enabled = src.enabled;
  if (src.mode === 'allowlist' || src.mode === 'denylist') out.mode = src.mode;
  const allow = cleanTypeList(src.allowlistRules);
  if (allow) out.allowlistRules = allow;
  const deny = cleanTypeList(src.denylistRules);
  if (deny) out.denylistRules = deny;
  const sites = cleanSiteRules(src.siteRules);
  if (sites) out.siteRules = sites;
  if (typeof src.unknownBlock === 'boolean') out.unknownBlock = src.unknownBlock;
  if (typeof src.notifyOn === 'boolean') out.notifyOn = src.notifyOn;
  if (['off', 'warn', 'block'].includes(src.mismatchMode)) out.mismatchMode = src.mismatchMode;
  if (typeof src.clearLogOnClose === 'boolean') out.clearLogOnClose = src.clearLogOnClose;
  if (Number.isInteger(src.maxLog)) out.maxLogSize = Math.min(5000, Math.max(10, src.maxLog));
  if (typeof src.docsOnly === 'boolean') out.docsOnly = src.docsOnly;
  if (Object.keys(out).length === 0) throw new Error('The file has no settings this version understands.');
  return { settings: out, skippedSites: Array.isArray(src.siteRules) ? Math.min(src.siteRules.length, MAX_SITES) - sites.length : 0 };
}

// Plain lines that say what the file holds
function summaryLines(parsed) {
  const s = parsed.settings;
  const lines = [];
  const onOff = v => (v ? 'on' : 'off');
  if (s.enabled !== undefined)         lines.push(`Filtering: ${onOff(s.enabled)}`);
  if (s.mode !== undefined)            lines.push(`Mode: ${s.mode}`);
  if (s.allowlistRules !== undefined)  lines.push(`Allowed types: ${s.allowlistRules.length}`);
  if (s.denylistRules !== undefined)   lines.push(`Denied types: ${s.denylistRules.length}`);
  if (s.siteRules !== undefined)       lines.push(`Website rules: ${s.siteRules.length}`);
  if (s.docsOnly !== undefined)        lines.push(`Docs only: ${onOff(s.docsOnly)}`);
  if (s.unknownBlock !== undefined)    lines.push(`Unknown types: ${s.unknownBlock ? 'block' : 'allow'}`);
  if (s.notifyOn !== undefined)        lines.push(`Notifications: ${onOff(s.notifyOn)}`);
  if (s.mismatchMode !== undefined)    lines.push(`File name check: ${s.mismatchMode}`);
  if (s.clearLogOnClose !== undefined) lines.push(`Clear log when browser closes: ${onOff(s.clearLogOnClose)}`);
  if (s.maxLogSize !== undefined)      lines.push(`Max log entries: ${s.maxLogSize}`);
  if (parsed.skippedSites > 0)         lines.push(`${parsed.skippedSites} invalid website rule(s) will be skipped`);
  return lines;
}

// Key order is ignored, because storage may return an object's keys in a different order
function canonical(value) {
  return JSON.stringify(value, (k, v) => (v && typeof v === 'object' && !Array.isArray(v))
    ? Object.fromEntries(Object.keys(v).sort().map(name => [name, v[name]]))
    : v);
}

function storageGet(keys) { return new Promise(resolve => chrome.storage.local.get(keys, resolve)); }

async function saveAndVerify(payload) {
  await new Promise((resolve, reject) => chrome.storage.local.set(payload, () => {
    if (chrome.runtime.lastError) reject(new Error('The browser could not save the settings: ' + chrome.runtime.lastError.message));
    else resolve();
  }));
  const saved = await storageGet(Object.keys(payload));
  const missing = Object.keys(payload).filter(key => canonical(saved[key]) !== canonical(payload[key]));
  if (missing.length > 0) throw new Error('The browser did not keep: ' + missing.join(', '));
}

// The popup keeps a snapshot of the real lists while Docs only is on, so turning it off can restore them. Keep that snapshot in step with what was imported.
async function syncDocsOnlySnapshot(imported) {
  if (imported.docsOnly === true) {
    const cur = await storageGet(['mode', 'allowlistRules', 'denylistRules']);
    const snapshot = {
      mode:           imported.mode           !== undefined ? imported.mode           : (cur.mode || 'allowlist'),
      allowlistRules: imported.allowlistRules !== undefined ? imported.allowlistRules : (cur.allowlistRules || []),
      denylistRules:  imported.denylistRules  !== undefined ? imported.denylistRules  : (cur.denylistRules  || []),
    };
    await new Promise(resolve => chrome.storage.local.set({ docsOnlySnapshot: snapshot }, resolve));
  } else if (imported.docsOnly === false) {
    await new Promise(resolve => chrome.storage.local.remove('docsOnlySnapshot', resolve));
  }
}

function showResult(message, kind) {
  const result = el('result');
  result.textContent = message;
  result.className   = 'result ' + kind;
}

function showSummary(lines) {
  const list = el('summary');
  list.textContent = '';
  lines.forEach(line => {
    const item = document.createElement('li');
    item.textContent = line;
    list.appendChild(item);
  });
  list.hidden = lines.length === 0;
}

let pending = null;

function clearPending() {
  pending = null;
  el('confirm').hidden = true;
}

el('pick-btn').addEventListener('click', () => el('file-input').click());
el('close-btn').addEventListener('click', () => window.close());
el('cancel-btn').addEventListener('click', () => {
  clearPending();
  showSummary([]);
  showResult('Import cancelled.', '');
});

el('file-input').addEventListener('change', async e => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  clearPending();
  showSummary([]);
  try {
    if (file.size > MAX_CHARS) throw new Error('That file is too large.');
    const text = await file.text();
    e.target.value = '';
    pending = parseImport(text);
    showResult('This file contains:', '');
    showSummary(summaryLines(pending));
    el('confirm').hidden = false;
  } catch (err) {
    e.target.value = '';
    showResult(err.message || 'That file could not be read.', 'error');
  }
});

el('apply-btn').addEventListener('click', async () => {
  if (!pending) return;
  const parsed = pending;
  clearPending();
  try {
    await saveAndVerify(parsed.settings);
    await syncDocsOnlySnapshot(parsed.settings);
    // Success closes the window at once. A short browser notification confirms it, unless notifications are switched off. A failed import stays open
    const { notifyOn } = await storageGet('notifyOn');
    if (notifyOn !== false) {
      chrome.notifications.create({
        type:    'basic',
        iconUrl: chrome.runtime.getURL('icons/icon128.png'),
        title:   'MIME Filter',
        message: 'Settings imported.',
      }, () => { void chrome.runtime.lastError; window.close(); });
    } else {
      window.close();
    }
  } catch (err) {
    showResult(err.message || 'The import failed.', 'error');
  }
});
