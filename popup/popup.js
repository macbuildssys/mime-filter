/**
 * MIME Filter: Popup UI
 * Lightweight reactive UI. State is centralised and render functions re-run on every change.
 */

'use strict';

// State

const state = {
  enabled:         true,
  mode:            'allowlist',
  allowlistRules:  [],
  denylistRules:   [],
  log:             [],
  maxLog:          500,
  unknownBlock:    true,
  notifyOn:        true,
  activeTab:       'rules',
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
  'application/ccxml+xml',
  'application/cu-seeme',
  'application/davmount+xml',
  'application/ecmascript',
  'application/emma+xml',
  'application/epub+zip',
  'application/font-tdpfr',
  'application/gzip',
  'application/hyperstudio',
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
  'application/pgp-signature',
  'application/pics-rules',
  'application/pkcs10',
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
  'application/set-payment-initiation',
  'application/set-registration-initiation',
  'application/shf+xml',
  'application/smil+xml',
  'application/sparql-query',
  'application/sparql-results+xml',
  'application/srgs',
  'application/srgs+xml',
  'application/ssml+xml',
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
  'application/vnd.ms-pki.seccat',
  'application/vnd.ms-pki.stl',
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-powerpoint.addin.macroenabled.12',
  'application/vnd.ms-powerpoint.presentation.macroenabled.12',
  'application/vnd.ms-powerpoint.slide.macroenabled.12',
  'application/vnd.ms-powerpoint.slideshow.macroenabled.12',
  'application/vnd.ms-powerpoint.template.macroenabled.12',
  'application/vnd.ms-project',
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
  'application/wasm',
  'application/winhlp',
  'application/wsdl+xml',
  'application/wspolicy+xml',
  'application/x-7z-compressed',
  'application/x-abiword',
  'application/x-ace-compressed',
  'application/x-authorware-bin',
  'application/x-authorware-map',
  'application/x-authorware-seg',
  'application/x-bcpio',
  'application/x-bittorrent',
  'application/x-bzip',
  'application/x-bzip2',
  'application/x-cdlink',
  'application/x-chat',
  'application/x-chess-pgn',
  'application/x-cpio',
  'application/x-csh',
  'application/x-debian-package',
  'application/x-director',
  'application/x-doom',
  'application/x-dtbncx+xml',
  'application/x-dtbook+xml',
  'application/x-dtbresource+xml',
  'application/x-dvi',
  'application/x-font-bdf',
  'application/x-font-ghostscript',
  'application/x-font-linux-psf',
  'application/x-font-otf',
  'application/x-font-pcf',
  'application/x-font-snf',
  'application/x-font-ttf',
  'application/x-font-type1',
  'application/x-futuresplash',
  'application/x-gnumeric',
  'application/x-gtar',
  'application/x-gzip',
  'application/x-hdf',
  'application/x-iso9660-image',
  'application/x-java-jnlp-file',
  'application/x-killustrator',
  'application/x-krita',
  'application/x-latex',
  'application/x-mobipocket-ebook',
  'application/x-ms-application',
  'application/x-ms-wmd',
  'application/x-ms-wmz',
  'application/x-ms-xbap',
  'application/x-msaccess',
  'application/x-msbinder',
  'application/x-mscardfile',
  'application/x-msclip',
  'application/x-msdownload',
  'application/x-msmediaview',
  'application/x-msmetafile',
  'application/x-msmoney',
  'application/x-mspublisher',
  'application/x-msschedule',
  'application/x-msterminal',
  'application/x-mswrite',
  'application/x-netcdf',
  'application/x-perl',
  'application/x-pkcs12',
  'application/x-pkcs7-certificates',
  'application/x-pkcs7-certreqresp',
  'application/x-rar-compressed',
  'application/x-redhat-package-manager',
  'application/x-rpm',
  'application/x-sh',
  'application/x-shar',
  'application/x-shellscript',
  'application/x-shockwave-flash',
  'application/x-silverlight-app',
  'application/x-stuffit',
  'application/x-stuffitx',
  'application/x-sv4cpio',
  'application/x-sv4crc',
  'application/x-tar',
  'application/x-tcl',
  'application/x-tex',
  'application/x-tex-tfm',
  'application/x-texinfo',
  'application/x-trash',
  'application/x-ustar',
  'application/x-wais-source',
  'application/x-x509-ca-cert',
  'application/x-xfig',
  'application/x-xpinstall',
  'application/x-zip-compressed',
  'application/xenc+xml',
  'application/xhtml+xml',
  'application/xml',
  'application/xml-dtd',
  'application/xop+xml',
  'application/xslt+xml',
  'application/xspf+xml',
  'application/xv+xml',
  'application/yaml',
  'application/zip',
  'application/zip-compressed',
  'audio/3gpp2',
  'audio/aac',
  'audio/aacp',
  'audio/adpcm',
  'audio/aiff',
  'audio/basic',
  'audio/flac',
  'audio/midi',
  'audio/mp4',
  'audio/mp4a-latm',
  'audio/mpeg',
  'audio/ogg',
  'audio/opus',
  'audio/vnd.digital-winds',
  'audio/vnd.dts',
  'audio/vnd.dts.hd',
  'audio/vnd.lucent.voice',
  'audio/vnd.ms-playready.media.pya',
  'audio/vnd.nuera.ecelp4800',
  'audio/vnd.nuera.ecelp7470',
  'audio/vnd.nuera.ecelp9600',
  'audio/vnd.wav',
  'audio/webm',
  'audio/x-matroska',
  'audio/x-mpegurl',
  'audio/x-ms-wax',
  'audio/x-ms-wma',
  'audio/x-pn-realaudio',
  'audio/x-pn-realaudio-plugin',
  'chemical/x-cdx',
  'chemical/x-cif',
  'chemical/x-cmdf',
  'chemical/x-cml',
  'chemical/x-csml',
  'chemical/x-xyz',
  'font/otf',
  'font/woff',
  'font/woff2',
  'image/avif',
  'image/avif-sequence',
  'image/bmp',
  'image/cgm',
  'image/g3fax',
  'image/gif',
  'image/heic',
  'image/ief',
  'image/jpeg',
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
  'image/vnd.wap.wbmp',
  'image/vnd.xiff',
  'image/webp',
  'image/x-adobe-dng',
  'image/x-canon-cr2',
  'image/x-canon-crw',
  'image/x-cmu-raster',
  'image/x-cmx',
  'image/x-epson-erf',
  'image/x-freehand',
  'image/x-fuji-raf',
  'image/x-icns',
  'image/x-icon',
  'image/x-kodak-dcr',
  'image/x-kodak-k25',
  'image/x-kodak-kdc',
  'image/x-minolta-mrw',
  'image/x-nikon-nef',
  'image/x-olympus-orf',
  'image/x-panasonic-raw',
  'image/x-pcx',
  'image/x-pentax-pef',
  'image/x-pict',
  'image/x-portable-anymap',
  'image/x-portable-bitmap',
  'image/x-portable-graymap',
  'image/x-portable-pixmap',
  'image/x-rgb',
  'image/x-sigma-x3f',
  'image/x-sony-arw',
  'image/x-sony-sr2',
  'image/x-sony-srf',
  'image/x-xbitmap',
  'image/x-xpixmap',
  'image/x-xwindowdump',
  'message/rfc822',
  'model/iges',
  'model/mesh',
  'model/vnd.dwf',
  'model/vnd.gdl',
  'model/vnd.gtw',
  'model/vnd.mts',
  'model/vnd.vtu',
  'model/vrml',
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
  'text/troff',
  'text/uri-list',
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
  'text/x-asm',
  'text/x-c',
  'text/x-fortran',
  'text/x-java-source',
  'text/x-pascal',
  'text/x-python',
  'text/x-setext',
  'text/x-uuencode',
  'text/x-vcalendar',
  'text/x-vcard',
  'video/3gpp',
  'video/3gpp2',
  'video/h261',
  'video/h263',
  'video/h264',
  'video/jpeg',
  'video/jpm',
  'video/mj2',
  'video/mp2t',
  'video/mp4',
  'video/mpeg',
  'video/ogg',
  'video/quicktime',
  'video/vnd.fvt',
  'video/vnd.mpegurl',
  'video/vnd.ms-playready.media.pyv',
  'video/vnd.vivo',
  'video/webm',
  'video/x-f4v',
  'video/x-fli',
  'video/x-flv',
  'video/x-m4v',
  'video/x-matroska',
  'video/x-ms-asf',
  'video/x-ms-wm',
  'video/x-ms-wmv',
  'video/x-ms-wmx',
  'video/x-ms-wvx',
  'video/x-msvideo',
  'video/x-sgi-movie',
  'x-conference/x-cooltalk',
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
  };
  const payload = {};
  for (const [k, v] of Object.entries(partial)) {
    // Use membership test instead of truthy check so that keys mapping to falsy values (e.g. '' or 0) are not silently skipped
    if (k in MAP) payload[MAP[k]] = v;
  }
  return new Promise(resolve => chrome.storage.local.set(payload, resolve));
}

// DOM helpers

function el(id) { return document.getElementById(id); }

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

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

function highlightMime(mime) {
  const slash = mime.indexOf('/');
  if (slash === -1) return `<span>${escHtml(mime)}</span>`;
  return `<span class="mime-prefix">${escHtml(mime.slice(0, slash + 1))}</span>${escHtml(mime.slice(slash + 1))}`;
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

function renderRuleList() {
  const ul    = el('rule-list');
  const rules = activeRules();
  const label = state.mode === 'allowlist' ? 'allowed' : 'blocked';
  if (rules.length === 0) {
    ul.innerHTML = `<li style="padding:8px;text-align:center;color:var(--text-dim);font-size:11px;font-family:var(--font-mono)">No ${label} types defined.</li>`;
    return;
  }
  ul.innerHTML = rules.map((mime, idx) => `
    <li class="rule-item">
      <span class="rule-item-mime">${highlightMime(mime)}</span>
      <button class="rule-delete" data-idx="${idx}" title="Remove rule">✕</button>
    </li>
  `).join('');
}

function renderLog() {
  const list  = el('log-list');
  const empty = el('log-empty');
  el('log-count').textContent = `${state.log.length} entr${state.log.length === 1 ? 'y' : 'ies'}`;
  if (state.log.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = state.log.map(entry => `
    <li class="log-entry ${escHtml(entry.status)}">
      <div class="log-entry-top">
        <span class="log-badge">${escHtml(entry.status)}</span>
        <span class="log-ts">${formatTs(entry.timestamp)}</span>
      </div>
      <div class="log-mime">${highlightMime(entry.mimeType || 'unknown')}</div>
      <div class="log-url" title="${escHtml(entry.url)}">${escHtml(shortUrl(entry.url))}</div>
    </li>
  `).join('');
}

function renderSettings() {
  el('max-log-input').value   = state.maxLog;
  el('notify-toggle').checked = state.notifyOn;
  document.querySelectorAll('#unknown-mime-selector .seg').forEach(btn => {
    btn.classList.toggle('active', (btn.dataset.unknown === 'block') === state.unknownBlock);
  });
}

function renderAll() {
  renderToggle();
  renderModeSelector();
  renderRuleList();
  renderLog();
  renderSettings();
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

// Removed spurious `async` — the body uses a callback, not await, so the keyword was misleading and the returned promise resolved immediately

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

  function highlightTerm(mime, query) {
    const idx = mime.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return escHtml(mime);
    return escHtml(mime.slice(0, idx))
      + `<span class="match-highlight">${escHtml(mime.slice(idx, idx + query.length))}</span>`
      + escHtml(mime.slice(idx + query.length));
  }

  function renderDropdown(query) {
    const matches = getMatches(query);
    lastQuery     = query;
    highlighted   = -1;
    if (matches.length === 0) {
      closeDropdown();
      return;
    }
    const existing = new Set(activeRules().map(r => r.toLowerCase()));
    dropdown.innerHTML = matches.map((mime, i) => {
      const added = existing.has(mime.toLowerCase());
      return `<li class="search-result ${added ? 'is-added' : 'is-missing'}"
                  data-mime="${escHtml(mime)}" data-idx="${i}">
                <span class="sr-label">${highlightTerm(mime, query)}</span>
                <button class="sr-action ${added ? 'sr-remove' : 'sr-add'}"
                        data-mime="${escHtml(mime)}"
                        title="${added ? 'Remove from rules' : 'Add to rules'}">
                  ${added ? '−' : '+'}
                </button>
              </li>`;
    }).join('');
    dropdown.classList.add('open');
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    dropdown.innerHTML = '';
    highlighted = -1;
  }

  async function addMime(mime) {
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
      items.forEach((el, i) => el.classList.toggle('highlighted', i === highlighted));
      if (items[highlighted]) input.value = items[highlighted].dataset.mime;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Floor was 0, trapping the cursor on the first item forever. Allow decrement to -1 which means "no item selected, restore free text"

      highlighted = Math.max(highlighted - 1, -1);
      items.forEach((el, i) => el.classList.toggle('highlighted', i === highlighted));
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
      renderRuleList();
    }));

  el('add-rule-btn').addEventListener('click', addRuleFromInput);

  el('rule-list').addEventListener('click', async e => {
    const btn = e.target.closest('.rule-delete');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
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

  el('save-settings-btn').addEventListener('click', async () => {
    const maxVal = parseInt(el('max-log-input').value, 10);
    if (!isNaN(maxVal) && maxVal >= 10) state.maxLog = maxVal;
    await persist({ maxLog: state.maxLog, unknownBlock: state.unknownBlock, notifyOn: state.notifyOn });
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

  el('allow-all-btn').addEventListener('click', async () => {
    const key = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    if (state.mode === 'allowlist') {
      state.allowlistRules = [...ALL_MIME_TYPES];
    } else {
      state.denylistRules = [...ALL_MIME_TYPES];
    }
    await persist({ [key]: activeRules() });
    renderRuleList();
  });

  el('none-btn').addEventListener('click', async () => {
    const key = state.mode === 'allowlist' ? 'allowlistRules' : 'denylistRules';
    if (state.mode === 'allowlist') {
      state.allowlistRules = [];
    } else {
      state.denylistRules = [];
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

  // FIX 4: case-insensitive duplicate guard
  if (!activeRules().some(r => r.toLowerCase() === value)) {
    // FIX 4: case-insensitive opposite-list removal
    const oppIdx = oppositeList.findIndex(r => r.toLowerCase() === value);
    if (oppIdx !== -1) oppositeList.splice(oppIdx, 1);
    activeRules().push(value);
    await persist({ [activeKey]: activeRules(), [oppositeKey]: oppositeList });
    renderRuleList();
  }

  input.value = '';
  input.focus();
}

// Boot

(async () => {
  await loadState();
  renderAll();
  wireEvents();
  wireSearch();
})();