/**
 * MIME Filter: Popup UI
 * Lightweight reactive UI. State is centralised and render functions re-run on every change
 */

'use strict';

// Which document types Docs only always allows. Kept as a plain constant here (not fetched from background.js) so the Rules-tab lock never depends on a round trip to a background script that Firefox can suspend between page loads — it must be correct the instant the popup opens. MUST be kept identical to DOCS_ONLY_TYPES in background.js, the one place that actually decides.
const DOCS_ONLY_TYPES = [
  'application/pdf',
  'application/rtf',
  'text/markdown',
  'application/xml',
  'text/csv',
  'text/tab-separated-values',
  'application/epub+zip',
  'application/x-mobipocket-ebook',
  'application/msword',
  'application/vnd.ms-word',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.',
  'application/onenote',
  'application/vnd.ms-visio',
  'application/vnd.visio',
  'application/vnd.ms-project',
  'application/x-mspublisher',
  'application/vnd.ms-works',
  'application/vnd.ms-xpsdocument',
  'application/oxps',
  'application/vnd.oasis.opendocument.',
  'application/x-vnd.oasis.opendocument.',
  'application/vnd.sun.xml.',
  'application/vnd.stardivision.',
  'application/vnd.apple.pages',
  'application/vnd.apple.numbers',
  'application/vnd.apple.keynote',
  'application/x-iwork-',
];

// State
const state = {
  enabled:          true,
  mode:             'allowlist',
  allowlistRules:   [],
  denylistRules:    [],
  log:              [],
  maxLog:           500,
  unknownBlock:     true,
  notifyOn:         true,
  clearLogOnClose:  false,
  siteRules:        [],
  mismatchMode:     'warn',
  docsOnly:         false,
  docsOnlySnapshot: null,
  logFilter:        'all',
  activeTab:        'rules',
};

// Returns the active rule array for the current mode
function activeRules() {
  return state.mode === 'allowlist' ? state.allowlistRules : state.denylistRules;
}

// Full MIME type catalogue (677 types) used for live search

const ALL_MIME_TYPES = [
  'application/andrew-inset',
  'application/applixware',
  'application/atom+xml',
  'application/atomcat+xml',
  'application/atomsvc+xml',
  'application/cbor',
  'application/ccxml+xml',
  'application/CDFV2',
  'application/CDFV2-encrypted',
  'application/CDFV2-quickbooks',
  'application/cu-seeme',
  'application/davmount+xml',
  'application/dicom',
  'application/ecmascript',
  'application/emma+xml',
  'application/epub+zip',
  'application/font-tdpfr',
  'application/gzip',
  'application/hyperstudio',
  'application/inf',
  'application/jar',
  'application/java-archive',
  'application/java-serialized-object',
  'application/java-vm',
  'application/json',
  'application/lost+xml',
  'application/mac-binhex40',
  'application/mac-compactpro',
  'application/marc',
  'application/mathematica',
  'application/mathml+xml',
  'application/mbox',
  'application/mediaservercontrol+xml',
  'application/mp4',
  'application/msword',
  'application/mxf',
  'application/octet-stream',
  'application/oda',
  'application/oebps-package+xml',
  'application/ogg',
  'application/onenote',
  'application/patch-ops-error+xml',
  'application/pdf',
  'application/pgp-encrypted',
  'application/pgp-keys',
  'application/pgp-signature',
  'application/pics-rules',
  'application/pkcs10',
  'application/pkcs12',
  'application/pkcs7-mime',
  'application/pkcs7-signature',
  'application/pkix-cert',
  'application/pkix-crl',
  'application/pkix-pkipath',
  'application/pkixcmp',
  'application/pls+xml',
  'application/postscript',
  'application/prql',
  'application/prs.cww',
  'application/rdf+xml',
  'application/reginfo+xml',
  'application/relax-ng-compact-syntax',
  'application/resource-lists+xml',
  'application/resource-lists-diff+xml',
  'application/rls-services+xml',
  'application/rsd+xml',
  'application/rss+xml',
  'application/rtf',
  'application/sbml+xml',
  'application/scvp-cv-request',
  'application/scvp-cv-response',
  'application/scvp-vp-request',
  'application/scvp-vp-response',
  'application/sdp',
  'application/sereal',
  'application/set-payment-initiation',
  'application/set-registration-initiation',
  'application/shf+xml',
  'application/smil+xml',
  'application/sparql-query',
  'application/sparql-results+xml',
  'application/sql',
  'application/srgs',
  'application/srgs+xml',
  'application/ssml+xml',
  'application/toml',
  'application/vnd.3gpp.pic-bw-large',
  'application/vnd.3gpp.pic-bw-small',
  'application/vnd.3gpp.pic-bw-var',
  'application/vnd.3gpp2.tcap',
  'application/vnd.3m.post-it-notes',
  'application/vnd.accpac.simply.aso',
  'application/vnd.accpac.simply.imp',
  'application/vnd.acucobol',
  'application/vnd.acucorp',
  'application/vnd.adobe.air-application-installer-package+zip',
  'application/vnd.adobe.xdp+xml',
  'application/vnd.adobe.xfdf',
  'application/vnd.airzip.filesecure.azf',
  'application/vnd.airzip.filesecure.azs',
  'application/vnd.amazon.ebook',
  'application/vnd.americandynamics.acc',
  'application/vnd.amiga.ami',
  'application/vnd.android.package-archive',
  'application/vnd.anser-web-certificate-issue-initiation',
  'application/vnd.anser-web-funds-transfer-initiation',
  'application/vnd.antix.game-component',
  'application/vnd.apple.installer+xml',
  'application/vnd.arastra.swi',
  'application/vnd.audiograph',
  'application/vnd.blueice.multipass',
  'application/vnd.bmi',
  'application/vnd.businessobjects',
  'application/vnd.chemdraw+xml',
  'application/vnd.chipnuts.karaoke-mmd',
  'application/vnd.cinderella',
  'application/vnd.claymore',
  'application/vnd.clonk.c4group',
  'application/vnd.commonspace',
  'application/vnd.contact.cmsg',
  'application/vnd.cosmocaller',
  'application/vnd.crick.clicker',
  'application/vnd.crick.clicker.keyboard',
  'application/vnd.crick.clicker.palette',
  'application/vnd.crick.clicker.template',
  'application/vnd.crick.clicker.wordbank',
  'application/vnd.criticaltools.wbs+xml',
  'application/vnd.ctc-posml',
  'application/vnd.cups-ppd',
  'application/vnd.cups-raster',
  'application/vnd.curl.car',
  'application/vnd.curl.pcurl',
  'application/vnd.data-vision.rdz',
  'application/vnd.debian.binary-package',
  'application/vnd.denovo.fcselayout-link',
  'application/vnd.dna',
  'application/vnd.dolby.mlp',
  'application/vnd.dpgraph',
  'application/vnd.dreamfactory',
  'application/vnd.dynageo',
  'application/vnd.ecowin.chart',
  'application/vnd.enliven',
  'application/vnd.epson.esf',
  'application/vnd.epson.msf',
  'application/vnd.epson.quickanime',
  'application/vnd.epson.salt',
  'application/vnd.epson.ssf',
  'application/vnd.eszigno3+xml',
  'application/vnd.ezpix-album',
  'application/vnd.ezpix-package',
  'application/vnd.fdf',
  'application/vnd.fdsn.mseed',
  'application/vnd.fdsn.seed',
  'application/vnd.flographit',
  'application/vnd.fluxtime.clip',
  'application/vnd.font-fontforge-sfd',
  'application/vnd.framemaker',
  'application/vnd.frogans.fnc',
  'application/vnd.frogans.ltf',
  'application/vnd.fsc.weblaunch',
  'application/vnd.fujitsu.oasys',
  'application/vnd.fujitsu.oasys2',
  'application/vnd.fujitsu.oasys3',
  'application/vnd.fujitsu.oasysgp',
  'application/vnd.fujitsu.oasysprs',
  'application/vnd.fujixerox.ddd',
  'application/vnd.fujixerox.docuworks',
  'application/vnd.fujixerox.docuworks.binder',
  'application/vnd.fuzzysheet',
  'application/vnd.genomatix.tuxedo',
  'application/vnd.geogebra.file',
  'application/vnd.geogebra.tool',
  'application/vnd.geometry-explorer',
  'application/vnd.gerber',
  'application/vnd.gmx',
  'application/vnd.google-earth.kml+xml',
  'application/vnd.google-earth.kmz',
  'application/vnd.grafeq',
  'application/vnd.groove-account',
  'application/vnd.groove-help',
  'application/vnd.groove-identity-message',
  'application/vnd.groove-injector',
  'application/vnd.groove-tool-message',
  'application/vnd.groove-tool-template',
  'application/vnd.groove-vcard',
  'application/vnd.handheld-entertainment+xml',
  'application/vnd.hbci',
  'application/vnd.hhe.lesson-player',
  'application/vnd.hp-hpgl',
  'application/vnd.hp-hpid',
  'application/vnd.hp-hps',
  'application/vnd.hp-jlyt',
  'application/vnd.hp-pcl',
  'application/vnd.hp-pclxl',
  'application/vnd.hydrostatix.sof-data',
  'application/vnd.hzn-3d-crossword',
  'application/vnd.ibm.minipay',
  'application/vnd.ibm.modcap',
  'application/vnd.ibm.rights-management',
  'application/vnd.ibm.secure-container',
  'application/vnd.iccprofile',
  'application/vnd.igloader',
  'application/vnd.immervision-ivp',
  'application/vnd.immervision-ivu',
  'application/vnd.intercon.formnet',
  'application/vnd.intu.qbo',
  'application/vnd.intu.qfx',
  'application/vnd.ipunplugged.rcprofile',
  'application/vnd.irepository.package+xml',
  'application/vnd.is-xpr',
  'application/vnd.jam',
  'application/vnd.jcp.javame.midlet-rms',
  'application/vnd.jisp',
  'application/vnd.joost.joda-archive',
  'application/vnd.kahootz',
  'application/vnd.kde.karbon',
  'application/vnd.kde.kchart',
  'application/vnd.kde.kformula',
  'application/vnd.kde.kivio',
  'application/vnd.kde.kontour',
  'application/vnd.kde.kpresenter',
  'application/vnd.kde.kspread',
  'application/vnd.kde.kword',
  'application/vnd.kenameaapp',
  'application/vnd.kidspiration',
  'application/vnd.kinar',
  'application/vnd.koan',
  'application/vnd.kodak-descriptor',
  'application/vnd.llamagraphics.life-balance.desktop',
  'application/vnd.llamagraphics.life-balance.exchange+xml',
  'application/vnd.lotus-1-2-3',
  'application/vnd.lotus-approach',
  'application/vnd.lotus-freelance',
  'application/vnd.lotus-notes',
  'application/vnd.lotus-organizer',
  'application/vnd.lotus-screencam',
  'application/vnd.lotus-wordpro',
  'application/vnd.macports.portpkg',
  'application/vnd.mcd',
  'application/vnd.medcalcdata',
  'application/vnd.mediastation.cdkey',
  'application/vnd.mfer',
  'application/vnd.mfmp',
  'application/vnd.micrografx.flo',
  'application/vnd.micrografx.igx',
  'application/vnd.microsoft.portable-executable',
  'application/vnd.mif',
  'application/vnd.mobius.daf',
  'application/vnd.mobius.dis',
  'application/vnd.mobius.mbk',
  'application/vnd.mobius.mqy',
  'application/vnd.mobius.msl',
  'application/vnd.mobius.plc',
  'application/vnd.mobius.txf',
  'application/vnd.mophun.application',
  'application/vnd.mophun.certificate',
  'application/vnd.mozilla.xul+xml',
  'application/vnd.ms-artgalry',
  'application/vnd.ms-cab-compressed',
  'application/vnd.ms-excel',
  'application/vnd.ms-excel.addin.macroenabled.12',
  'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  'application/vnd.ms-excel.sheet.macroenabled.12',
  'application/vnd.ms-excel.template.macroenabled.12',
  'application/vnd.ms-fontobject',
  'application/vnd.ms-htmlhelp',
  'application/vnd.ms-ims',
  'application/vnd.ms-lrm',
  'application/vnd.ms-msi',
  'application/vnd.ms-office',
  'application/vnd.ms-opentype',
  'application/vnd.ms-outlook',
  'application/vnd.ms-pki.seccat',
  'application/vnd.ms-pki.stl',
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-powerpoint.addin.macroenabled.12',
  'application/vnd.ms-powerpoint.presentation.macroenabled.12',
  'application/vnd.ms-powerpoint.slide.macroenabled.12',
  'application/vnd.ms-powerpoint.slideshow.macroenabled.12',
  'application/vnd.ms-powerpoint.template.macroenabled.12',
  'application/vnd.ms-project',
  'application/vnd.ms-tnef',
  'application/vnd.ms-visio.drawing.main+xml',
  'application/vnd.ms-word.document.macroenabled.12',
  'application/vnd.ms-word.template.macroenabled.12',
  'application/vnd.ms-works',
  'application/vnd.ms-wpl',
  'application/vnd.ms-xpsdocument',
  'application/vnd.mseq',
  'application/vnd.musician',
  'application/vnd.muvee.style',
  'application/vnd.neurolanguage.nlu',
  'application/vnd.noblenet-directory',
  'application/vnd.noblenet-sealer',
  'application/vnd.noblenet-web',
  'application/vnd.nokia.n-gage.data',
  'application/vnd.nokia.n-gage.symbian.install',
  'application/vnd.nokia.radio-preset',
  'application/vnd.nokia.radio-presets',
  'application/vnd.novadigm.edm',
  'application/vnd.novadigm.edx',
  'application/vnd.novadigm.ext',
  'application/vnd.oasis.opendocument.',
  'application/vnd.oasis.opendocument.chart',
  'application/vnd.oasis.opendocument.chart-template',
  'application/vnd.oasis.opendocument.database',
  'application/vnd.oasis.opendocument.formula',
  'application/vnd.oasis.opendocument.formula-template',
  'application/vnd.oasis.opendocument.graphics',
  'application/vnd.oasis.opendocument.graphics-template',
  'application/vnd.oasis.opendocument.image',
  'application/vnd.oasis.opendocument.image-template',
  'application/vnd.oasis.opendocument.presentation',
  'application/vnd.oasis.opendocument.presentation-template',
  'application/vnd.oasis.opendocument.spreadsheet',
  'application/vnd.oasis.opendocument.spreadsheet-template',
  'application/vnd.oasis.opendocument.text',
  'application/vnd.oasis.opendocument.text-master',
  'application/vnd.oasis.opendocument.text-template',
  'application/vnd.oasis.opendocument.text-web',
  'application/vnd.olpc-sugar',
  'application/vnd.oma.dd2+xml',
  'application/vnd.openofficeorg.extension',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.presentationml.slide',
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  'application/vnd.openxmlformats-officedocument.presentationml.template',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'application/vnd.osgi.dp',
  'application/vnd.palm',
  'application/vnd.pg.format',
  'application/vnd.pg.osasli',
  'application/vnd.picsel',
  'application/vnd.pocketlearn',
  'application/vnd.powerbuilder6',
  'application/vnd.previewsystems.box',
  'application/vnd.proteus.magazine',
  'application/vnd.publishare-delta-tree',
  'application/vnd.pvi.ptid1',
  'application/vnd.quark.quarkxpress',
  'application/vnd.rar',
  'application/vnd.recordare.musicxml',
  'application/vnd.recordare.musicxml+xml',
  'application/vnd.rim.cod',
  'application/vnd.rn-realmedia',
  'application/vnd.route66.link66+xml',
  'application/vnd.seemail',
  'application/vnd.sema',
  'application/vnd.semd',
  'application/vnd.semf',
  'application/vnd.shana.informed.formdata',
  'application/vnd.shana.informed.formtemplate',
  'application/vnd.shana.informed.interchange',
  'application/vnd.shana.informed.package',
  'application/vnd.simtech-mindmapper',
  'application/vnd.sketchup.skp',
  'application/vnd.smaf',
  'application/vnd.smart.teacher',
  'application/vnd.solent.sdkm+xml',
  'application/vnd.spotfire.dxp',
  'application/vnd.spotfire.sfs',
  'application/vnd.sqlite3',
  'application/vnd.stardivision.calc',
  'application/vnd.stardivision.draw',
  'application/vnd.stardivision.impress',
  'application/vnd.stardivision.math',
  'application/vnd.stardivision.writer',
  'application/vnd.stardivision.writer-global',
  'application/vnd.sun.xml.calc',
  'application/vnd.sun.xml.calc.template',
  'application/vnd.sun.xml.draw',
  'application/vnd.sun.xml.draw.template',
  'application/vnd.sun.xml.impress',
  'application/vnd.sun.xml.impress.template',
  'application/vnd.sun.xml.math',
  'application/vnd.sun.xml.writer',
  'application/vnd.sun.xml.writer.global',
  'application/vnd.sun.xml.writer.template',
  'application/vnd.sus-calendar',
  'application/vnd.svd',
  'application/vnd.symbian.install',
  'application/vnd.syncml+xml',
  'application/vnd.syncml.dm+wbxml',
  'application/vnd.syncml.dm+xml',
  'application/vnd.tao.intent-module-archive',
  'application/vnd.tcpdump.pcap',
  'application/vnd.tmobile-livetv',
  'application/vnd.trid.tpt',
  'application/vnd.triscape.mxs',
  'application/vnd.trueapp',
  'application/vnd.ufdl',
  'application/vnd.uiq.theme',
  'application/vnd.umajin',
  'application/vnd.unity',
  'application/vnd.uoml+xml',
  'application/vnd.vcx',
  'application/vnd.visio',
  'application/vnd.visionary',
  'application/vnd.vsf',
  'application/vnd.wap.sic',
  'application/vnd.wap.slc',
  'application/vnd.wap.wbxml',
  'application/vnd.wap.wmlc',
  'application/vnd.wap.wmlscriptc',
  'application/vnd.webturbo',
  'application/vnd.wordperfect',
  'application/vnd.wqd',
  'application/vnd.wt.stf',
  'application/vnd.xara',
  'application/vnd.xfdl',
  'application/vnd.yamaha.hv-dic',
  'application/vnd.yamaha.hv-script',
  'application/vnd.yamaha.hv-voice',
  'application/vnd.yamaha.openscoreformat',
  'application/vnd.yamaha.openscoreformat.osfpvg+xml',
  'application/vnd.yamaha.smaf-audio',
  'application/vnd.yamaha.smaf-phrase',
  'application/vnd.yellowriver-custom-menu',
  'application/vnd.zul',
  'application/vnd.zzazz.deck+xml',
  'application/voicexml+xml',
  'application/warc',
  'application/wasm',
  'application/winhelp',
  'application/winhlp',
  'application/wsdl+xml',
  'application/wspolicy+xml',
  'application/x-123',
  'application/x-7z-compressed',
  'application/x-abiword',
  'application/x-abook-addressbook',
  'application/x-ace-compressed',
  'application/x-adrift',
  'application/x-apple-diskimage',
  'application/x-appleworks',
  'application/x-appleworks3',
  'application/x-arc',
  'application/x-archive',
  'application/x-arj',
  'application/x-authorware-bin',
  'application/x-authorware-map',
  'application/x-authorware-seg',
  'application/x-bat',
  'application/x-bcpio',
  'application/x-bittorrent',
  'application/x-blorb',
  'application/x-bzip',
  'application/x-bzip2',
  'application/x-c32-comboot-syslinux-exec',
  'application/x-cdlink',
  'application/x-chat',
  'application/x-chess-pgn',
  'application/x-chiasmus-encrypted',
  'application/x-chiasmus-key',
  'application/x-chrome-extension',
  'application/x-coff',
  'application/x-coffexec',
  'application/x-compress',
  'application/x-coredump',
  'application/x-cpio',
  'application/x-csh',
  'application/x-db-svl-panasonic',
  'application/x-dbase',
  'application/x-dbf',
  'application/x-dbm',
  'application/x-dbt',
  'application/x-debian-package',
  'application/x-director',
  'application/x-dmp',
  'application/x-doom',
  'application/x-dosdriver',
  'application/x-dosexec',
  'application/x-dtbncx+xml',
  'application/x-dtbook+xml',
  'application/x-dtbresource+xml',
  'application/x-dvi',
  'application/x-dxf',
  'application/x-eet',
  'application/x-elc',
  'application/x-epoc-agenda',
  'application/x-epoc-app',
  'application/x-epoc-data',
  'application/x-epoc-jotter',
  'application/x-epoc-opl',
  'application/x-epoc-opo',
  'application/x-epoc-sheet',
  'application/x-epoc-word',
  'application/x-executable',
  'application/x-font-bdf',
  'application/x-font-ghostscript',
  'application/x-font-linux-psf',
  'application/x-font-otf',
  'application/x-font-pcf',
  'application/x-font-sfn',
  'application/x-font-snf',
  'application/x-font-ttf',
  'application/x-font-type1',
  'application/x-foobar-exec',
  'application/x-freemind',
  'application/x-freeplane',
  'application/x-futuresplash',
  'application/x-gdbm',
  'application/x-gettext-translation',
  'application/x-glulx',
  'application/x-gnucash',
  'application/x-gnumeric',
  'application/x-gnupg-keyring',
  'application/x-gtar',
  'application/x-hdf',
  'application/x-hwp',
  'application/x-ia-arc',
  'application/x-ichitaro4',
  'application/x-ichitaro5',
  'application/x-ichitaro6',
  'application/x-ima',
  'application/x-ios-app',
  'application/x-iso9660-image',
  'application/x-java-applet',
  'application/x-java-jce-keystore',
  'application/x-java-jnlp-file',
  'application/x-java-keystore',
  'application/x-java-pack200',
  'application/x-kdelnk',
  'application/x-killustrator',
  'application/x-krita',
  'application/x-latex',
  'application/x-lha',
  'application/x-lharc',
  'application/x-lrzip',
  'application/x-lz4',
  'application/x-lzh-compressed',
  'application/x-lzip',
  'application/x-lzma',
  'application/x-macbinary',
  'application/x-mach-binary',
  'application/x-mdx',
  'application/x-mif',
  'application/x-mobipocket-ebook',
  'application/x-ms-application',
  'application/x-ms-ese',
  'application/x-ms-pdb',
  'application/x-ms-reader',
  'application/x-ms-sdb',
  'application/x-ms-shortcut',
  'application/x-ms-wmd',
  'application/x-ms-wmz',
  'application/x-ms-xbap',
  'application/x-msaccess',
  'application/x-msbinder',
  'application/x-mscardfile',
  'application/x-msclip',
  'application/x-msdos-program',
  'application/x-msdownload',
  'application/x-msi',
  'application/x-msmediaview',
  'application/x-msmetafile',
  'application/x-msmoney',
  'application/x-mspublisher',
  'application/x-msschedule',
  'application/x-msterminal',
  'application/x-mswrite',
  'application/x-nekovm-bytecode',
  'application/x-netcdf',
  'application/x-ntbackup',
  'application/x-object',
  'application/x-ole-storage',
  'application/x-openvpn-profile',
  'application/x-panasonic-sqlite3',
  'application/x-panorama-database',
  'application/x-pem-file',
  'application/x-pgp-keyring',
  'application/x-pie-executable',
  'application/x-pkcs7-certificates',
  'application/x-pkcs7-certreqresp',
  'application/x-pnf',
  'application/x-powershell',
  'application/x-putty-private-key',
  'application/x-qpress',
  'application/x-quark-xpress-3',
  'application/x-quicktime-player',
  'application/x-redhat-package-manager',
  'application/x-rpm',
  'application/x-rpt',
  'application/x-sc',
  'application/x-scribus',
  'application/x-setupscript',
  'application/x-sh',
  'application/x-shar',
  'application/x-sharedlib',
  'application/x-shockwave-flash',
  'application/x-silverlight-app',
  'application/x-snappy-framed',
  'application/x-sqlite3',
  'application/x-stuffit',
  'application/x-stuffitx',
  'application/x-subrip',
  'application/x-sv4cpio',
  'application/x-sv4crc',
  'application/x-svr4-package',
  'application/x-t3vm-image',
  'application/x-tads',
  'application/x-tar',
  'application/x-terminfo',
  'application/x-tex-tfm',
  'application/x-tokyocabinet-btree',
  'application/x-tokyocabinet-fixed',
  'application/x-tokyocabinet-hash',
  'application/x-tokyocabinet-table',
  'application/x-trash',
  'application/x-udf-image',
  'application/x-ustar',
  'application/x-wais-source',
  'application/x-wine-extension-inf',
  'application/x-wine-extension-ini',
  'application/x-winhelp-fts',
  'application/x-x509-ca-cert',
  'application/x-xar',
  'application/x-xfig',
  'application/x-xpa-compressed',
  'application/x-xpinstall',
  'application/x-xz',
  'application/x-zmachine',
  'application/x-zoo',
  'application/xenc+xml',
  'application/xhtml+xml',
  'application/xml',
  'application/xml-dtd',
  'application/xml-sitemap',
  'application/xop+xml',
  'application/xslt+xml',
  'application/xspf+xml',
  'application/xv+xml',
  'application/yaml',
  'application/zip',
  'application/zlib',
  'application/zstd',
  'audio/3gpp2',
  'audio/aac',
  'audio/aacp',
  'audio/adpcm',
  'audio/aiff',
  'audio/basic',
  'audio/flac',
  'audio/it',
  'audio/midi',
  'audio/mod',
  'audio/mp4',
  'audio/mp4a-latm',
  'audio/mpeg',
  'audio/ogg',
  'audio/opus',
  'audio/s3m',
  'audio/vnd.digital-winds',
  'audio/vnd.dolby.dd-raw',
  'audio/vnd.dts',
  'audio/vnd.dts.hd',
  'audio/vnd.lucent.voice',
  'audio/vnd.ms-playready.media.pya',
  'audio/vnd.nuera.ecelp4800',
  'audio/vnd.nuera.ecelp7470',
  'audio/vnd.nuera.ecelp9600',
  'audio/vnd.wav',
  'audio/webm',
  'audio/x-ape',
  'audio/x-dec-basic',
  'audio/x-hx-aac-adif',
  'audio/x-hx-aac-adts',
  'audio/x-m4a',
  'audio/x-matroska',
  'audio/x-mpegurl',
  'audio/x-ms-wax',
  'audio/x-ms-wma',
  'audio/x-musepack',
  'audio/x-pn-realaudio',
  'audio/x-pn-realaudio-plugin',
  'audio/x-unknown',
  'audio/x-vpm-wav-garmin',
  'audio/x-w64',
  'audio/x-wav',
  'audio/x-zipped-it',
  'audio/x-zipped-mod',
  'audio/xm',
  'chemical/x-cdx',
  'chemical/x-cif',
  'chemical/x-cmdf',
  'chemical/x-cml',
  'chemical/x-csml',
  'chemical/x-pdb',
  'chemical/x-xyz',
  'font/otf',
  'font/sfnt',
  'font/ttf',
  'font/woff',
  'font/woff2',
  'font/x-amiga-font',
  'font/x-dos-cpi',
  'font/x-drdos-cpi',
  'image/avif',
  'image/avif-sequence',
  'image/bmp',
  'image/bpg',
  'image/cgm',
  'image/g3fax',
  'image/gif',
  'image/heic',
  'image/heif',
  'image/ief',
  'image/jp2',
  'image/jpeg',
  'image/jpm',
  'image/jpx',
  'image/pcx',
  'image/pjpeg',
  'image/png',
  'image/prs.btif',
  'image/svg+xml',
  'image/tiff',
  'image/vnd.adobe.photoshop',
  'image/vnd.djvu',
  'image/vnd.dwg',
  'image/vnd.dxf',
  'image/vnd.fastbidsheet',
  'image/vnd.fpx',
  'image/vnd.fst',
  'image/vnd.fujixerox.edmics-mmr',
  'image/vnd.fujixerox.edmics-rlc',
  'image/vnd.ms-modi',
  'image/vnd.net-fpx',
  'image/vnd.radiance',
  'image/vnd.wap.wbmp',
  'image/vnd.xiff',
  'image/webp',
  'image/x-adobe-dng',
  'image/x-award-bioslogo',
  'image/x-award-bmp',
  'image/x-canon-cr2',
  'image/x-canon-crw',
  'image/x-cmu-raster',
  'image/x-cmx',
  'image/x-coreldraw',
  'image/x-cpi',
  'image/x-cur',
  'image/x-dpx',
  'image/x-epoc-mbm',
  'image/x-epoc-sketch',
  'image/x-eps',
  'image/x-epson-erf',
  'image/x-exr',
  'image/x-freehand',
  'image/x-fuji-raf',
  'image/x-garmin-srf',
  'image/x-gem',
  'image/x-icns',
  'image/x-icon',
  'image/x-kodak-dcr',
  'image/x-kodak-k25',
  'image/x-kodak-kdc',
  'image/x-lss16',
  'image/x-minolta-mrw',
  'image/x-ms-bmp',
  'image/x-niff',
  'image/x-nikon-nef',
  'image/x-olympus-orf',
  'image/x-paintnet',
  'image/x-panasonic-raw',
  'image/x-pentax-pef',
  'image/x-pfs',
  'image/x-pgf',
  'image/x-pict',
  'image/x-polar-monitor-bitmap',
  'image/x-portable-anymap',
  'image/x-portable-bitmap',
  'image/x-portable-graymap',
  'image/x-portable-greymap',
  'image/x-portable-pixmap',
  'image/x-quicktime',
  'image/x-rgb',
  'image/x-sigma-x3f',
  'image/x-sony-arw',
  'image/x-sony-sr2',
  'image/x-sony-srf',
  'image/x-tga',
  'image/x-unknown',
  'image/x-x3f',
  'image/x-xbitmap',
  'image/x-xcf',
  'image/x-xcursor',
  'image/x-xpixmap',
  'image/x-xpmi',
  'image/x-xwindowdump',
  'inode/x-empty',
  'message/news',
  'message/rfc822',
  'model/iges',
  'model/mesh',
  'model/vnd.dwf',
  'model/vnd.gdl',
  'model/vnd.gtw',
  'model/vnd.mts',
  'model/vnd.vtu',
  'model/vrml',
  'model/x3d',
  'rinex/broadcast',
  'rinex/clock',
  'rinex/meteorological',
  'rinex/navigation',
  'rinex/observation',
  'text/calendar',
  'text/css',
  'text/csv',
  'text/html',
  'text/javascript',
  'text/markdown',
  'text/mathml',
  'text/plain',
  'text/prs.lines.tag',
  'text/richtext',
  'text/sgml',
  'text/tab-separated-values',
  'text/texmacs',
  'text/troff',
  'text/uri-list',
  'text/vbscript',
  'text/vcard',
  'text/vnd.curl',
  'text/vnd.curl.dcurl',
  'text/vnd.curl.mcurl',
  'text/vnd.curl.scurl',
  'text/vnd.fly',
  'text/vnd.fmi.flexstor',
  'text/vnd.graphviz',
  'text/vnd.in3d.3dml',
  'text/vnd.in3d.spot',
  'text/vnd.sun.j2me.app-descriptor',
  'text/vnd.wap.si',
  'text/vnd.wap.sl',
  'text/vnd.wap.wml',
  'text/vnd.wap.wmlscript',
  'text/vtt',
  'text/x-asm',
  'text/x-awk',
  'text/x-bcpl',
  'text/x-c',
  'text/x-c++',
  'text/x-diff',
  'text/x-fortran',
  'text/x-gawk',
  'text/x-info',
  'text/x-java',
  'text/x-java-source',
  'text/x-lisp',
  'text/x-lua',
  'text/x-m4',
  'text/x-makefile',
  'text/x-msdos-batch',
  'text/x-nawk',
  'text/x-pascal',
  'text/x-perl',
  'text/x-php',
  'text/x-po',
  'text/x-python',
  'text/x-ruby',
  'text/x-script.python',
  'text/x-setext',
  'text/x-tcl',
  'text/x-tex',
  'text/x-texinfo',
  'text/x-uuencode',
  'text/x-vcalendar',
  'text/x-xmcd',
  'video/3gpp',
  'video/3gpp2',
  'video/h261',
  'video/h263',
  'video/h264',
  'video/jpeg',
  'video/jpm',
  'video/mj2',
  'video/mp2p',
  'video/mp2t',
  'video/mp4',
  'video/mp4v-es',
  'video/mpeg',
  'video/mpeg4-generic',
  'video/mpv',
  'video/ogg',
  'video/quicktime',
  'video/sgi',
  'video/unknown',
  'video/vnd.dvb.file',
  'video/vnd.fvt',
  'video/vnd.mpegurl',
  'video/vnd.ms-playready.media.pyv',
  'video/vnd.rn-realvideo',
  'video/vnd.vivo',
  'video/webm',
  'video/x-f4v',
  'video/x-flc',
  'video/x-fli',
  'video/x-flv',
  'video/x-jng',
  'video/x-m4v',
  'video/x-matroska',
  'video/x-mng',
  'video/x-ms-asf',
  'video/x-ms-wm',
  'video/x-ms-wmv',
  'video/x-ms-wmx',
  'video/x-ms-wvx',
  'video/x-msvideo',
  'video/x-sgi-movie',
  'video/x-unknown',
  'x-conference/x-cooltalk',
  'x-epoc/x-sisx-app',
];

// Storage helpers

async function loadState() {
  return new Promise(resolve => {
    chrome.storage.local.get(null, data => {
      if (data.enabled         !== undefined) state.enabled         = data.enabled;
      if (data.mode            !== undefined) state.mode            = data.mode;
      if (data.allowlistRules  !== undefined) state.allowlistRules  = data.allowlistRules;
      if (data.denylistRules   !== undefined) state.denylistRules   = data.denylistRules;
      if (data.downloadLog     !== undefined) state.log             = data.downloadLog;
      if (data.maxLogSize      !== undefined) state.maxLog          = data.maxLogSize;
      if (data.unknownBlock    !== undefined) state.unknownBlock    = data.unknownBlock;
      if (data.notifyOn        !== undefined) state.notifyOn        = data.notifyOn;
      if (data.clearLogOnClose !== undefined) state.clearLogOnClose = data.clearLogOnClose;
      if (data.siteRules       !== undefined) state.siteRules       = data.siteRules;
      if (data.mismatchMode    !== undefined) state.mismatchMode    = data.mismatchMode;
      if (data.docsOnly        !== undefined) state.docsOnly        = data.docsOnly;
      if (data.docsOnlySnapshot !== undefined) state.docsOnlySnapshot = data.docsOnlySnapshot;
      resolve();
    });
  });
}

async function persist(partial) {
  const MAP = {
    enabled:        'enabled',
    mode:           'mode',
    allowlistRules: 'allowlistRules',
    denylistRules:  'denylistRules',
    maxLog:         'maxLogSize',
    unknownBlock:   'unknownBlock',
    notifyOn:       'notifyOn',
    clearLogOnClose: 'clearLogOnClose',
    siteRules:      'siteRules',
    mismatchMode:   'mismatchMode',
    docsOnly:       'docsOnly',
    docsOnlySnapshot: 'docsOnlySnapshot',
  };
  const payload = {};
  for (const [k, v] of Object.entries(partial)) {
    // Use membership test instead of truthy check so that keys mapping to falsy values (e.g. '' or 0) are not silently skipped
    if (k in MAP) payload[MAP[k]] = v;
  }
  return new Promise(resolve => chrome.storage.local.set(payload, resolve));
}

// With Docs only on, the individual document types are locked in both lists: they cannot be added or removed there.
function isLockedDoc(mime) {
  if (!state.docsOnly) return false;
  const m = String(mime || '').trim().toLowerCase();
  return DOCS_ONLY_TYPES.some(d => m.startsWith(d));
}

// Website rules — kept in step with normalizeHost/isValidHost in background.js.
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

// Turns "application/pdf, image/" into a clean list. Every entry needs a slash.
function parseTypeList(raw) {
  return [...new Set(String(raw || '')
    .split(/[\s,;]+/)
    .map(t => t.trim().toLowerCase())
    .filter(t => t.includes('/')))];
}

// Log filter and CSV export
function filteredLog() {
  if (state.logFilter === 'all') return state.log;
  return state.log.filter(entry => entry.status === state.logFilter);
}

// A cell that starts with = + - or @ would run as a formula when opened in a spreadsheet, so it gets a leading apostrophe.
function csvCell(value) {
  let text = String(value == null ? '' : value);
  if (/^[=+\-@\t\r]/.test(text)) text = "'" + text;
  return '"' + text.replace(/"/g, '""') + '"';
}

function logToCsv(entries) {
  const columns = ['timestamp', 'status', 'mimeType', 'siteRule', 'siteHost', 'filename', 'url', 'reason', 'id'];
  const rows = [columns.join(',')];
  entries.forEach(entry => rows.push(columns.map(col => csvCell(entry[col])).join(',')));
  return '\uFEFF' + rows.join('\r\n');
}

// DOM helpers
function el(id) { return document.getElementById(id); }

function formatTs(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      + ' ' + d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  } catch { return iso; }
}

function shortUrl(url) {
  try {
    const u = new URL(url);
    const path = u.pathname.length > 28 ? u.pathname.slice(0, 28) + '…' : u.pathname;
    return u.hostname + path;
  } catch { return (url || '').slice(0, 50); }
}

// Builds a MIME span with the prefix highlighted in amber, using DOM methods. Returns a <span class="rule-item-mime"> element.
function buildMimeSpan(mime) {
  const slash   = mime.indexOf('/');
  const wrapper = document.createElement('span');
  wrapper.className = 'rule-item-mime';
  if (slash === -1) {
    wrapper.textContent = mime;
  } else {
    const prefix = document.createElement('span');
    prefix.className   = 'mime-prefix';
    prefix.textContent = mime.slice(0, slash + 1);
    wrapper.appendChild(prefix);
    wrapper.appendChild(document.createTextNode(mime.slice(slash + 1)));
  }
  return wrapper;
}

// Builds a DocumentFragment with the query term wrapped in <span class="match-highlight">
// Used in the search dropdown to highlight matched substrings
function buildHighlightedLabel(mime, query) {
  const frag = document.createDocumentFragment();
  const idx  = mime.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) {
    frag.appendChild(document.createTextNode(mime));
    return frag;
  }
  frag.appendChild(document.createTextNode(mime.slice(0, idx)));
  const mark = document.createElement('span');
  mark.className   = 'match-highlight';
  mark.textContent = mime.slice(idx, idx + query.length);
  frag.appendChild(mark);
  frag.appendChild(document.createTextNode(mime.slice(idx + query.length)));
  return frag;
}

// Renderers
function renderToggle() {
  const checkbox = el('toggle-enabled');
  const label    = el('toggle-label');
  checkbox.checked  = state.enabled;
  label.textContent = state.enabled ? 'ON' : 'OFF';
}

function renderModeSelector() {
  document.querySelectorAll('#mode-selector .seg').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === state.mode);
  });
  el('mode-hint').textContent = state.mode === 'allowlist'
    ? 'Only listed MIME types are allowed through.'
    : 'Listed MIME types are blocked; everything else passes.';
}

// Keeps the bulk-action button label in sync with the current mode
// In allowlist mode, filling the list means "everything is allowed" -> "Allow All"
// In denylist mode, filling the list means "everything is blocked" -> "Deny All"
function renderBulkButtons() {
  const allBtn = el('allow-all-btn');
  if (state.mode === 'allowlist') {
    allBtn.textContent = 'Allow All';
    allBtn.title       = 'Add every MIME type to the allowlist';
  } else {
    allBtn.textContent = 'Deny All';
    allBtn.title       = 'Add every MIME type to the denylist';
  }
}

function renderRuleList() {
  const ul    = el('rule-list');
  const rules = activeRules();
  const label = state.mode === 'allowlist' ? 'allowed' : 'blocked';

  ul.replaceChildren();

  if (rules.length === 0) {
    const li = document.createElement('li');
    li.style.cssText = 'padding:8px;text-align:center;color:var(--text-dim);font-size:11px;font-family:var(--font-mono)';
    li.textContent = `No ${label} types defined.`;
    ul.appendChild(li);
    return;
  }

  rules.forEach((mime, idx) => {
    const li  = document.createElement('li');
    li.className = 'rule-item';

    li.appendChild(buildMimeSpan(mime));
    if (isLockedDoc(mime)) {
      // A document type while Docs only is on: shown, but not removable.
      const lock = document.createElement('span');
      lock.className   = 'rule-lock';
      lock.textContent = 'locked';
      lock.title       = 'Document types are locked while Docs only is on';
      li.appendChild(lock);
    } else {
      const btn = document.createElement('button');
      btn.className    = 'rule-delete';
      btn.dataset.idx  = idx;
      btn.title        = 'Remove rule';
      btn.textContent  = '✕';
      li.appendChild(btn);
    }
    ul.appendChild(li);
  });
}

const SITE_ACTION_LABELS = { allow: 'Trust', block: 'Block', only: 'Only' };
const SITE_ACTION_HINTS  = {
  allow: 'Trust: any file type is allowed from this website.',
  block: 'Block: every download from this website is blocked.',
  only:  'Only types: just the listed types are allowed from this website.',
};

function renderSites() {
  const ul = el('site-list');
  ul.replaceChildren();

  if (state.siteRules.length === 0) {
    const li = document.createElement('li');
    li.style.cssText = 'padding:8px;text-align:center;color:var(--text-dim);font-size:11px;font-family:var(--font-mono)';
    li.textContent = 'No websites added yet.';
    ul.appendChild(li);
    return;
  }

  state.siteRules.forEach((rule, idx) => {
    const li = document.createElement('li');
    li.className = 'rule-item site-item';

    const left = document.createElement('span');
    left.className = 'site-left';

    const host = document.createElement('span');
    host.className   = 'site-host';
    host.textContent = rule.host;

    const badge = document.createElement('span');
    badge.className   = `site-badge ${rule.action}`;
    badge.textContent = SITE_ACTION_LABELS[rule.action] || rule.action;
    if (rule.action === 'only') badge.title = (rule.types || []).join(', ');

    left.appendChild(host);
    left.appendChild(badge);

    if (rule.action === 'only') {
      const types = document.createElement('span');
      types.className   = 'site-types';
      types.textContent = (rule.types || []).join(', ');
      types.title       = types.textContent;
      left.appendChild(types);
    }

    const btn = document.createElement('button');
    btn.className   = 'rule-delete';
    btn.dataset.idx = idx;
    btn.title       = 'Remove website';
    btn.textContent = '✕';

    li.appendChild(left);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function renderDocsOnly() {
  el('docs-only-toggle').checked = state.docsOnly;
  el('docs-note').hidden = !state.docsOnly;
  el('rule-error').textContent = '';
}

function renderLog() {
  const list  = el('log-list');
  const empty = el('log-empty');
  const shown = filteredLog();
  const total = state.log.length;
  const noun  = n => `${n} entr${n === 1 ? 'y' : 'ies'}`;
  el('log-count').textContent = shown.length === total ? noun(total) : `${shown.length} of ${noun(total)}`;

  list.replaceChildren();

  if (shown.length === 0) {
    empty.textContent = total === 0 ? 'No downloads logged yet.' : 'No entries match this filter.';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  shown.forEach(entry => {
    const status = (entry.status === 'blocked' || entry.status === 'warned') ? entry.status : 'allowed';

    const li = document.createElement('li');
    li.className = `log-entry ${status}`;

    const top = document.createElement('div');
    top.className = 'log-entry-top';

    const badge = document.createElement('span');
    badge.className   = 'log-badge';
    badge.textContent = entry.status;

    const ts = document.createElement('span');
    ts.className   = 'log-ts';
    ts.textContent = formatTs(entry.timestamp);

    top.appendChild(badge);
    top.appendChild(ts);

    const mimeDiv = document.createElement('div');
    mimeDiv.className = 'log-mime';
    mimeDiv.title = entry.reason ? `${entry.mimeType || 'unknown'} — ${entry.reason}` : (entry.mimeType || 'unknown');
    mimeDiv.appendChild(buildMimeSpan(entry.mimeType || 'unknown'));

    const urlDiv = document.createElement('div');
    urlDiv.className   = 'log-url';
    urlDiv.title       = entry.url;
    urlDiv.textContent = shortUrl(entry.url);

    li.appendChild(top);
    li.appendChild(mimeDiv);
    li.appendChild(urlDiv);
    list.appendChild(li);
  });
}

function renderSettings() {
  el('max-log-input').value   = state.maxLog;
  el('notify-toggle').checked = state.notifyOn;
  el('clear-on-close-toggle').checked = state.clearLogOnClose;
  document.querySelectorAll('#mismatch-selector .seg').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mismatch === state.mismatchMode);
  });
  document.querySelectorAll('#unknown-mime-selector .seg').forEach(btn => {
    btn.classList.toggle('active', (btn.dataset.unknown === 'block') === state.unknownBlock);
  });
}

function renderAll() {
  renderToggle();
  renderModeSelector();
  renderBulkButtons();
  renderRuleList();
  renderSites();
  renderLog();
  renderSettings();
  renderDocsOnly();
}

// Tabs
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(p =>
    p.classList.toggle('active', p.id === `panel-${tabId}`));
  if (tabId === 'log') refreshLog();
}

// Removed spurious 'async' the body uses a callback, not await, so the keyword was misleading and the returned promise resolved immediately
function refreshLog() {
  chrome.storage.local.get('downloadLog', data => {
    state.log = data.downloadLog || [];
    renderLog();
  });
}

// Search dropdown
function wireSearch() {
  const input    = el('rule-input');
  const dropdown = el('search-dropdown');
  let highlighted = -1;
  let lastQuery   = '';

  function getMatches(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    return ALL_MIME_TYPES.filter(m => m.toLowerCase().includes(q)).slice(0, 60);
  }

  function renderDropdown(query) {
    const matches = getMatches(query);
    lastQuery   = query;
    highlighted = -1;

    if (matches.length === 0) {
      closeDropdown();
      return;
    }

    const existing = new Set(activeRules().map(r => r.toLowerCase()));
    dropdown.replaceChildren();

    matches.forEach((mime, i) => {
      const added = existing.has(mime.toLowerCase());

      const li = document.createElement('li');
      li.className    = `search-result ${added ? 'is-added' : 'is-missing'}`;
      li.dataset.mime = mime;
      li.dataset.idx  = i;

      const labelSpan = document.createElement('span');
      labelSpan.className = 'sr-label';
      labelSpan.appendChild(buildHighlightedLabel(mime, query));

      li.appendChild(labelSpan);
      if (isLockedDoc(mime)) {
        // A document type while Docs only is on: no + and no −.
        li.classList.add('is-locked');
        const lock = document.createElement('span');
        lock.className   = 'sr-lock';
        lock.textContent = 'locked';
        lock.title       = 'Document types are locked while Docs only is on';
        li.appendChild(lock);
      } else {
        const actionBtn = document.createElement('button');
        actionBtn.className    = `sr-action ${added ? 'sr-remove' : 'sr-add'}`;
        actionBtn.dataset.mime = mime;
        actionBtn.title        = added ? 'Remove from rules' : 'Add to rules';
        actionBtn.textContent  = added ? '−' : '+';
        li.appendChild(actionBtn);
      }
      dropdown.appendChild(li);
    });

    dropdown.classList.add('open');
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    dropdown.replaceChildren();
    highlighted = -1;
  }

  async function addMime(mime) {
    if (isLockedDoc(mime)) return;
    const activeKey    = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    const oppositeKey  = state.mode === 'allowlist' ? 'denylistRules'  : 'allowlistRules';
    const oppositeList = state.mode === 'allowlist' ? state.denylistRules : state.allowlistRules;

    // Normalise to lowercase before deduplication so that e.g. "Image/PNG" is not treated as distinct from an existing "image/png" rule
    const normalised = mime.toLowerCase();
    if (activeRules().some(r => r.toLowerCase() === normalised)) return;

    // Also use case-insensitive search when removing from opposite list
    const oppIdx = oppositeList.findIndex(r => r.toLowerCase() === normalised);
    if (oppIdx !== -1) oppositeList.splice(oppIdx, 1);

    activeRules().push(normalised);
    await persist({ [activeKey]: activeRules(), [oppositeKey]: oppositeList });
    renderRuleList();
    renderDropdown(lastQuery);
  }

  async function removeMime(mime) {
    if (isLockedDoc(mime)) return;
    const key        = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    const normalised = mime.toLowerCase();
    // Case-insensitive removal
    const idx = activeRules().findIndex(r => r.toLowerCase() === normalised);
    if (idx === -1) return;
    activeRules().splice(idx, 1);
    await persist({ [key]: activeRules() });
    renderRuleList();
    renderDropdown(lastQuery);
  }

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) { closeDropdown(); return; }
    renderDropdown(q);
  });

  input.addEventListener('keydown', e => {
    const items = [...dropdown.querySelectorAll('.search-result')];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlighted = Math.min(highlighted + 1, items.length - 1);
      items.forEach((item, i) => item.classList.toggle('highlighted', i === highlighted));
      if (items[highlighted]) input.value = items[highlighted].dataset.mime;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Floor was 0, trapping the cursor on the first item forever. Allow decrement to -1 which means "no item selected, restore free text"
      highlighted = Math.max(highlighted - 1, -1);
      items.forEach((item, i) => item.classList.toggle('highlighted', i === highlighted));
      if (highlighted >= 0) {
        input.value = items[highlighted].dataset.mime;
      }
      // highlighted === -1: leave input.value as the user's own typed query
    } else if (e.key === 'Escape') {
      closeDropdown();
    } else if (e.key === 'Enter') {
      if (highlighted >= 0 && items[highlighted]) {
        e.preventDefault();
        const mime  = items[highlighted].dataset.mime;
        if (items[highlighted].classList.contains('is-locked')) return;
        const added = items[highlighted].classList.contains('is-added');
        added ? removeMime(mime) : addMime(mime);
      } else {
        addRuleFromInput();
      }
    }
  });

  dropdown.addEventListener('click', e => {
    const btn = e.target.closest('.sr-action');
    if (!btn) return;
    const mime = btn.dataset.mime;
    btn.classList.contains('sr-remove') ? removeMime(mime) : addMime(mime);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.rule-input-wrap')) closeDropdown();
  });
}

// Website "Only types" autocomplete: suggests MIME types for the comma separated list as you type.
function wireSiteTypesSearch() {
  const input    = el('site-types-input');
  const dropdown = el('site-types-dropdown');
  let highlighted = -1;

  // The field is a comma separated list; only the last, still-being-typed piece gets suggestions.
  function doneParts(value) {
    return value.split(',').slice(0, -1).map(p => p.trim()).filter(Boolean);
  }
  function currentToken(value) {
    const parts = value.split(',');
    return parts[parts.length - 1].trim();
  }

  function getMatches(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    return ALL_MIME_TYPES.filter(m => m.toLowerCase().includes(q)).slice(0, 40);
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    dropdown.replaceChildren();
    highlighted = -1;
  }

  function renderDropdown(query) {
    const matches = getMatches(query);
    highlighted = -1;
    if (matches.length === 0) { closeDropdown(); return; }
    dropdown.replaceChildren();
    matches.forEach(mime => {
      const li = document.createElement('li');
      li.className    = 'search-result is-missing';
      li.dataset.mime = mime;
      const labelSpan = document.createElement('span');
      labelSpan.className = 'sr-label';
      labelSpan.appendChild(buildHighlightedLabel(mime, query));
      li.appendChild(labelSpan);
      dropdown.appendChild(li);
    });
    dropdown.classList.add('open');
  }

  // Appends the chosen type to whatever was already typed, ready for the next one.
  function insertMime(mime) {
    const done = doneParts(input.value);
    input.value = [...done, mime].join(', ') + ', ';
    input.focus();
    closeDropdown();
  }

  input.addEventListener('input', () => {
    const token = currentToken(input.value);
    if (!token) { closeDropdown(); return; }
    renderDropdown(token);
  });

  input.addEventListener('keydown', e => {
    const items = [...dropdown.querySelectorAll('.search-result')];
    if (e.key === 'ArrowDown' && items.length) {
      e.preventDefault();
      highlighted = Math.min(highlighted + 1, items.length - 1);
      items.forEach((item, i) => item.classList.toggle('highlighted', i === highlighted));
    } else if (e.key === 'ArrowUp' && items.length) {
      e.preventDefault();
      highlighted = Math.max(highlighted - 1, -1);
      items.forEach((item, i) => item.classList.toggle('highlighted', i === highlighted));
    } else if (e.key === 'Escape') {
      closeDropdown();
    } else if (e.key === 'Enter' && highlighted >= 0 && items[highlighted]) {
      e.preventDefault();
      insertMime(items[highlighted].dataset.mime);
    }
  });

  dropdown.addEventListener('click', e => {
    const li = e.target.closest('.search-result');
    if (li) insertMime(li.dataset.mime);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#site-types-row')) closeDropdown();
  });
}

// Event wiring
function wireEvents() {

  document.querySelectorAll('.tab').forEach(btn =>
    btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

  el('toggle-enabled').addEventListener('change', async e => {
    state.enabled = e.target.checked;
    el('toggle-label').textContent = state.enabled ? 'ON' : 'OFF';
    await persist({ enabled: state.enabled });
  });

  document.querySelectorAll('#mode-selector .seg').forEach(btn =>
    btn.addEventListener('click', async () => {
      state.mode = btn.dataset.mode;
      await persist({ mode: state.mode });
      renderModeSelector();
      renderBulkButtons();
      renderRuleList();
    }));

  el('add-rule-btn').addEventListener('click', addRuleFromInput);

  el('rule-list').addEventListener('click', async e => {
    const btn = e.target.closest('.rule-delete');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    if (isLockedDoc(activeRules()[idx])) return;
    const key = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    activeRules().splice(idx, 1);
    await persist({ [key]: activeRules() });
    renderRuleList();
  });

  document.querySelectorAll('#unknown-mime-selector .seg').forEach(btn =>
    btn.addEventListener('click', () => {
      state.unknownBlock = btn.dataset.unknown === 'block';
      document.querySelectorAll('#unknown-mime-selector .seg').forEach(b =>
        b.classList.toggle('active', b === btn));
    }));

  el('notify-toggle').addEventListener('change', e => {
    state.notifyOn = e.target.checked;
  });

  el('clear-on-close-toggle').addEventListener('change', e => {
    state.clearLogOnClose = e.target.checked;
  });

  document.querySelectorAll('#mismatch-selector .seg').forEach(btn =>
    btn.addEventListener('click', () => {
      state.mismatchMode = btn.dataset.mismatch;
      document.querySelectorAll('#mismatch-selector .seg').forEach(b =>
        b.classList.toggle('active', b === btn));
    }));

  // Website rules
  el('site-action-select').addEventListener('change', () => {
    const action = el('site-action-select').value;
    el('site-types-row').classList.toggle('open', action === 'only');
    el('site-hint').textContent = SITE_ACTION_HINTS[action];
  });
  el('add-site-btn').addEventListener('click', addSiteFromInput);
  el('site-host-input').addEventListener('keydown', e => { if (e.key === 'Enter') addSiteFromInput(); });
  el('site-types-input').addEventListener('keydown', e => { if (e.key === 'Enter') addSiteFromInput(); });
  el('site-list').addEventListener('click', async e => {
    const btn = e.target.closest('.rule-delete');
    if (!btn) return;
    state.siteRules.splice(parseInt(btn.dataset.idx, 10), 1);
    await persist({ siteRules: state.siteRules });
    renderSites();
  });

  // Log filter
  el('log-status-filter').addEventListener('change', e => {
    state.logFilter = e.target.value;
    renderLog();
  });

  el('export-csv-btn').addEventListener('click', () => {
    const blob = new Blob([logToCsv(filteredLog())], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `mime-filter-log-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
  });

  // Docs only
  el('docs-only-toggle').addEventListener('change', async e => {
    /* Allow All, Deny All and None while Docs only is on work on the real
    *  lists exactly as they always do, and that's left alone here — but
    *  those actions can leave the lists holding almost nothing but document
    *  types, which is only meant to matter while Docs only is on. So turning
    *  Docs only on takes a snapshot of the real mode and lists, and turning
    *  it off restores that snapshot, so downloads from a website that isn't
    *  trusted go back to being judged exactly as before Docs only was ever
    *  turned on.
    */
    state.docsOnly = e.target.checked;
    if (state.docsOnly) {
      state.docsOnlySnapshot = { mode: state.mode, allowlistRules: [...state.allowlistRules], denylistRules: [...state.denylistRules] };
      await persist({ docsOnly: true, docsOnlySnapshot: state.docsOnlySnapshot });
    } else {
      const snapshot = state.docsOnlySnapshot;
      const payload  = { docsOnly: false };
      if (snapshot) {
        state.mode           = snapshot.mode;
        state.allowlistRules = snapshot.allowlistRules;
        state.denylistRules  = snapshot.denylistRules;
        Object.assign(payload, { mode: state.mode, allowlistRules: state.allowlistRules, denylistRules: state.denylistRules });
      }
      state.docsOnlySnapshot = null;
      await persist(payload);
      await new Promise(resolve => chrome.storage.local.remove('docsOnlySnapshot', resolve));
    }
    renderDocsOnly();
    renderModeSelector();
    renderRuleList();
  });

  el('save-settings-btn').addEventListener('click', async () => {
    const maxVal = parseInt(el('max-log-input').value, 10);
    if (!isNaN(maxVal) && maxVal >= 10) state.maxLog = maxVal;
    await persist({
      maxLog: state.maxLog, unknownBlock: state.unknownBlock, notifyOn: state.notifyOn,
      clearLogOnClose: state.clearLogOnClose, mismatchMode: state.mismatchMode,
    });
    const status = el('save-status');
    status.textContent   = '✓ Saved';
    status.style.opacity = '1';
    setTimeout(() => { status.style.opacity = '0'; }, 1800);
  });

  el('export-btn').addEventListener('click', () => {
    chrome.storage.local.get('downloadLog', data => {
      const log  = data.downloadLog || [];
      const blob = new Blob([JSON.stringify(log, null, 2)], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = `mime-filter-log-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      // Revoking immediately after click() races with the browser's async blob read and can produce an empty download, especially in Firefox
      setTimeout(() => URL.revokeObjectURL(url), 100);
    });
  });

  el('clear-log-btn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'CLEAR_LOG' }, () => {
      state.log = [];
      renderLog();
    });
  });

  // "Allow All" / "Deny All": label changes per mode via renderBulkButtons(), but the underlying behaviour is always: fill the list that's active for the current mode with every MIME type, and clear the other one so a type is never in both at once.
  el('allow-all-btn').addEventListener('click', async () => {
    const activeKey   = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    const oppositeKey = state.mode === 'allowlist' ? 'denylistRules'  : 'allowlistRules';
    const lower       = t => String(t).toLowerCase();

    // The list being filled: its own locked document entries stay, and every other known type is added.
    const lockedHere = state[activeKey].filter(isLockedDoc);
    const filled     = [...lockedHere, ...ALL_MIME_TYPES.filter(t => !isLockedDoc(t) && !lockedHere.includes(t))];

    // The other list: everything is cleared except its own locked document entries. A locked entry the filled list also holds is dropped here, so nothing is ever in both lists.
    const filledTypes = new Set(filled.map(lower));
    const otherKept   = state[oppositeKey].filter(t => isLockedDoc(t) && !filledTypes.has(lower(t)));

    state[activeKey]   = filled;
    state[oppositeKey] = otherKept;
    await persist({ [activeKey]: filled, [oppositeKey]: otherKept });
    renderRuleList();
  });

  // "None": empties whichever list is active for the current mode (locked document entries stay).
  el('none-btn').addEventListener('click', async () => {
    const key   = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    const kept  = activeRules().filter(isLockedDoc);
    if (state.mode === 'allowlist') {
      state.allowlistRules = kept;
    } else {
      state.denylistRules = kept;
    }
    await persist({ [key]: activeRules() });
    renderRuleList();
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    if (changes.downloadLog && state.activeTab === 'log') {
      state.log = changes.downloadLog.newValue || [];
      renderLog();
    }
  });
}

// Add rule from raw input (for custom / unlisted types)
async function addRuleFromInput() {
  const input = el('rule-input');
  const raw   = input.value.trim();
  if (!raw) return;
  el('rule-error').textContent = '';
  if (isLockedDoc(raw)) {
    el('rule-error').textContent = 'Document types are locked while Docs only is on.';
    input.style.borderColor = 'var(--red)';
    setTimeout(() => { input.style.borderColor = ''; el('rule-error').textContent = ''; }, 2500);
    return;
  }
  if (!/[a-zA-Z]/.test(raw)) {
    input.style.borderColor = 'var(--red)';
    setTimeout(() => { input.style.borderColor = ''; }, 800);
    return;
  }

  // Normalise to lowercase so the rule list stays consistent with what the background's matchesMimeRule sees after its own toLowerCase()
  const value = raw.toLowerCase();
  const activeKey    = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
  const oppositeKey  = state.mode === 'allowlist' ? 'denylistRules'  : 'allowlistRules';
  const oppositeList = state.mode === 'allowlist' ? state.denylistRules : state.allowlistRules;

  if (!activeRules().some(r => r.toLowerCase() === value)) {
    // Case-insensitive opposite-list removal
    const oppIdx = oppositeList.findIndex(r => r.toLowerCase() === value);
    if (oppIdx !== -1) oppositeList.splice(oppIdx, 1);
    activeRules().push(value);
    await persist({ [activeKey]: activeRules(), [oppositeKey]: oppositeList });
    renderRuleList();
  }

  input.value = '';
  input.focus();
}

// Add a site rule from the Websites tab.
async function addSiteFromInput() {
  const hostInput  = el('site-host-input');
  const typesInput = el('site-types-input');
  const action     = el('site-action-select').value;
  const error      = el('site-error');
  const host       = normalizeHost(hostInput.value);

  const fail = message => {
    error.textContent = message;
    setTimeout(() => { if (error.textContent === message) error.textContent = ''; }, 3500);
  };

  if (!host || !isValidHost(host)) {
    hostInput.style.borderColor = 'var(--red)';
    setTimeout(() => { hostInput.style.borderColor = ''; }, 800);
    fail('Enter a website such as example.com.');
    return;
  }

  let types = [];
  if (action === 'only') {
    types = parseTypeList(typesInput.value);
    if (types.length === 0) {
      typesInput.style.borderColor = 'var(--red)';
      setTimeout(() => { typesInput.style.borderColor = ''; }, 800);
      fail('List at least one type, such as application/pdf.');
      return;
    }
  }

  error.textContent = '';
  // One rule per site: adding the same site again replaces its rule.
  const rule = { host, action, types };
  const existing = state.siteRules.findIndex(r => r.host === host);
  if (existing !== -1) state.siteRules[existing] = rule;
  else state.siteRules.push(rule);

  await persist({ siteRules: state.siteRules });
  renderSites();
  hostInput.value  = '';
  typesInput.value = '';
  hostInput.focus();
}

// Boot
(async () => {
  await loadState();
  renderAll();
  wireEvents();
  wireSearch();
  wireSiteTypesSearch();
})();
