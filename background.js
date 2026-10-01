const ALLOWED_MIME_TYPES = [
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

const SCHEMA_VERSION = 6;

function getDefaults() {
  return {
    enabled:          true,
    mode:             'allowlist',
    allowlistRules:   ALLOWED_MIME_TYPES.slice(),
    denylistRules:    [],
    downloadLog:      [],
    maxLogSize:       500,
    unknownBlock:     true,
    notifyOn:         true,
    clearLogOnClose:  false,
    siteRules:        [],
    mismatchMode:     'warn',
    docsOnly:         false,
  };
}

/* Fill in any missing settings on startup if the schema is new or outdated.
*  This only ADDS keys that are not already present — it must never overwrite
*  a value the user already has (their rules, log, site rules, etc.), or every
*  schema bump for a brand new setting (like this one) would silently wipe an
*  existing install's allowlist/denylist/log back to factory defaults.
*/
chrome.storage.local.get(null, function(existing) {
  if (existing._schemaVersion === SCHEMA_VERSION) return;
  var defaults = getDefaults();
  var toSet = {};
  Object.keys(defaults).forEach(function(key) {
    if (existing[key] === undefined) toSet[key] = defaults[key];
  });
  toSet._schemaVersion = SCHEMA_VERSION;
  chrome.storage.local.set(toSet, function() {
    console.log('[MIME Filter] Storage schema updated to version', SCHEMA_VERSION);
  });
});

// Magic byte signatures for fallback MIME detection when server sends no Content-Type. label is used in file-name-mismatch messages and spoof logs.
var MAGIC_SIGNATURES = [
  { bytes: '4d5a',           mime: 'application/x-msdownload',      label: 'Windows Executable (MZ)' },
  { bytes: '7f454c46',       mime: 'application/x-executable',      label: 'ELF Executable'          },
  { bytes: '504b0304',       mime: 'application/zip',                label: 'ZIP Archive'             },
  { bytes: '52617221',       mime: 'application/vnd.rar',            label: 'RAR Archive'             },
  { bytes: '255044462d',     mime: 'application/pdf',                label: 'PDF Document'            },
  { bytes: '7b5c727466',     mime: 'application/rtf',                label: 'Rich Text Format'        },
  { bytes: 'ffd8ff',         mime: 'image/jpeg',                     label: 'JPEG Image'              },
  { bytes: '89504e47',       mime: 'image/png',                      label: 'PNG Image'               },
  { bytes: '47494638',       mime: 'image/gif',                      label: 'GIF Image'               },
  { bytes: '52494646',       mime: 'audio/wav',                      label: 'WAV Audio'               },
  { bytes: '494433',         mime: 'audio/mpeg',                     label: 'MP3 Audio'               },
  { bytes: 'fffb',           mime: 'audio/mpeg',                     label: 'MP3 Audio'               },
  { bytes: '664c6143',       mime: 'audio/flac',                     label: 'FLAC Audio'              },
  { bytes: '4f676753',       mime: 'audio/ogg',                      label: 'OGG Container'           },
  { bytes: '000001ba',       mime: 'video/mpeg',                     label: 'MPEG Video'              },
  { bytes: '000001b3',       mime: 'video/mpeg',                     label: 'MPEG Video'              },
  { bytes: '1a45dfa3',       mime: 'video/webm',                     label: 'WebM/Matroska Video'     },
  { bytes: '1f8b',           mime: 'application/gzip',               label: 'GZIP Archive'            },
  { bytes: '425a68',         mime: 'application/x-bzip2',            label: 'BZIP2 Archive'           },
  { bytes: '377abcaf271c',   mime: 'application/x-7z-compressed',    label: '7-Zip Archive'           },
  { bytes: '213c617263683e', mime: 'application/x-debian-package',   label: 'Debian Package'          },
  { bytes: 'edabeedb',       mime: 'application/x-rpm',               label: 'RPM Package'             },
  { bytes: 'cafebabe',       mime: 'application/java-vm',             label: 'Java Class File'         },
  { bytes: 'd0cf11e0a1b11ae1', mime: 'application/msword',            label: 'Legacy Office Document'  },
  { bytes: '25215053',       mime: 'application/postscript',         label: 'PostScript'              },
  { bytes: '53514c6974',     mime: 'application/vnd.sqlite3',        label: 'SQLite Database'         },
  { bytes: '38425053',       mime: 'image/vnd.adobe.photoshop',      label: 'Photoshop Document'      },
  { bytes: '49492a00',       mime: 'image/tiff',                     label: 'TIFF Image'              },
  { bytes: '4d4d002a',       mime: 'image/tiff',                     label: 'TIFF Image'              },
  { bytes: '424d',           mime: 'image/bmp',                      label: 'BMP Image'               },
  { bytes: '00000100',       mime: 'image/x-icon',                   label: 'Icon File'               },
];

/* Read more than the first bytes so formats whose signature sits deeper are
*  still recognised. Most signatures sit in the first 32 bytes, but an ISO
*  disc image carries "CD001" at byte 32769 and a TAR archive carries "ustar"
*  at byte 257 — one request for the first 32774 bytes covers both.
*/
var PEEK_BYTES = 32774;
var DEEP_SIGNATURES = [
  { offset: 32769, bytes: '4344303031',     mime: 'application/x-iso9660-image',   label: 'ISO Disc Image'      },
  { offset: 257,   bytes: '7573746172',     mime: 'application/x-tar',              label: 'TAR Archive'         },
  { offset: 60,    bytes: '424f4f4b4d4f4249', mime: 'application/x-mobipocket-ebook', label: 'Mobipocket E-book' },
];

/* Office/OpenDocument/Apple-iWork files are zip containers, and old Office
*  files and installers share one OLE container format, so their first bytes
*  only say "zip" or "old Office". When the file name says which one it is,
*  refine to the real type so a Word file served as octet-stream is filtered
*  as a Word file and an installer is not mistaken for a document.
*/
var ZIP_CONTAINER_TYPES = {
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  docm: 'application/vnd.ms-word.document.macroenabled.12',
  xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
  xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
  pptm: 'application/vnd.ms-powerpoint.presentation.macroenabled.12',
  odt:  'application/vnd.oasis.opendocument.text',
  ods:  'application/vnd.oasis.opendocument.spreadsheet',
  odp:  'application/vnd.oasis.opendocument.presentation',
  epub: 'application/epub+zip',
  pages: 'application/vnd.apple.pages',
  numbers: 'application/vnd.apple.numbers',
  key:  'application/vnd.apple.keynote',
  jar:  'application/java-archive',
  apk:  'application/vnd.android.package-archive',
  xpi:  'application/x-xpinstall',
};
var OLE_CONTAINER_TYPES = {
  xls: 'application/vnd.ms-excel',
  ppt: 'application/vnd.ms-powerpoint',
  msi: 'application/x-msi',
};

function refineContainerType(found, filenameHint) {
  if (!found || !('bytes' in found)) return found;
  var ext = getExtension(filenameHint);
  if (found.mime === 'application/zip' && ZIP_CONTAINER_TYPES[ext]) {
    return { bytes: found.bytes, mime: ZIP_CONTAINER_TYPES[ext], label: 'Document in a zip container' };
  }
  if (found.mime === 'application/msword' && OLE_CONTAINER_TYPES[ext]) {
    return { bytes: found.bytes, mime: OLE_CONTAINER_TYPES[ext], label: 'Old Office file or installer' };
  }
  return found;
}

/* Decodes just enough of a data: URL's inline payload to run the magic-byte
*  check against it — data: URLs carry their entire content in the URL
*  string itself, so no network request is needed (or possible).
*/
function decodeDataUrlBytes(url) {
  try {
    var commaIdx = url.indexOf(',');
    if (commaIdx === -1) return null;
    var header  = url.slice(5, commaIdx);
    var payload = url.slice(commaIdx + 1);
    var isBase64 = /;base64/i.test(header);
    if (isBase64) {
      var rawPrefixLen = 64;
      var prefix = payload.slice(0, rawPrefixLen - (rawPrefixLen % 4));
      var binary = atob(prefix);
      var bytes  = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return bytes.slice(0, 32);
    }
    var decoded = decodeURIComponent(payload.slice(0, 128));
    var out = new Uint8Array(Math.min(32, decoded.length));
    for (var j = 0; j < out.length; j++) out[j] = decoded.charCodeAt(j);
    return out;
  } catch (e) {
    return null;
  }
}

/* Legacy MIME aliases -> canonical modern equivalent. Mirrors the dedup
*  performed on the rule-suggestion list (ALL_MIME_TYPES in popup.js): once
*  a legacy name like "application/x-rar-compressed" was removed from there
*  in favour of "application/vnd.rar", a rule can only be written using the
*  canonical name — but real servers still send the legacy name constantly.
*  Without this map, a download declared with the legacy alias would never
*  match a rule written against the canonical name, even though they're the
*  exact same format. Applied to the *declared* type only, before any
*  comparison against a magic-byte or filename-derived result — those are
*  already canonical by construction.
*/
var MIME_ALIASES = {
  'application/csv':               'text/csv',
  'application/javascript':        'text/javascript',
  'text/rtf':                      'application/rtf',
  'text/xml':                      'application/xml',
  'application/x-perl':            'text/x-perl',
  'application/x-shellscript':     'application/x-sh',
  'text/x-shellscript':            'application/x-sh',
  'application/x-tcl':             'text/x-tcl',
  'application/x-tex':             'text/x-tex',
  'application/x-texinfo':         'text/x-texinfo',
  'text/x-vcard':                  'text/vcard',
  'application/x-winhelp':         'application/winhelp',
  'application/x-zip-compressed':  'application/zip',
  'application/zip-compressed':    'application/zip',
  'application/x-gzip':            'application/gzip',
  'application/x-pkcs12':          'application/pkcs12',
  'image/x-pcx':                   'image/pcx',
  'audio/x-s3m':                   'audio/s3m',
  'audio/x-mp4a-latm':             'audio/mp4a-latm',
  'audio/x-adpcm':                 'audio/adpcm',
  'audio/x-aiff':                  'audio/aiff',
  'audio/x-mod':                   'audio/mod',
  'text/inf':                      'application/inf',
  'application/x-rar':             'application/vnd.rar',
  'application/x-rar-compressed':  'application/vnd.rar',
  'image/svg':                     'image/svg+xml',
};

// Normalizes a declared MIME type through MIME_ALIASES. A no-op for anything not in the map.
function canonicalizeMime(mimeType) {
  return MIME_ALIASES[mimeType] || mimeType;
}

// Extension-to-MIME map used when URL is a blob or internal scheme
var EXT_MIME_MAP = {
  'pdf':  'application/pdf',
  'jpg':  'image/jpeg',
  'jpeg': 'image/jpeg',
  'png':  'image/png',
  'gif':  'image/gif',
  'webp': 'image/webp',
  'svg':  'image/svg+xml',
  'bmp':  'image/bmp',
  'ico':  'image/x-icon',
  'tif':  'image/tiff',
  'tiff': 'image/tiff',
  'mp3':  'audio/mpeg',
  'ogg':  'audio/ogg',
  'wav':  'audio/wav',
  'flac': 'audio/flac',
  'aac':  'audio/aac',
  'mp4':  'video/mp4',
  'webm': 'video/webm',
  'mkv':  'video/x-matroska',
  'avi':  'video/x-msvideo',
  'mov':  'video/quicktime',
  'zip':  'application/zip',
  'rar':  'application/vnd.rar',
  'gz':   'application/gzip',
  'bz2':  'application/x-bzip2',
  '7z':   'application/x-7z-compressed',
  'tar':  'application/x-tar',
  'deb':  'application/x-debian-package',
  'rpm':  'application/x-rpm',
  'exe':  'application/x-msdownload',
  'msi':  'application/x-msdownload',
  'dmg':  'application/x-apple-diskimage',
  'doc':  'application/msword',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'xls':  'application/vnd.ms-excel',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'ppt':  'application/vnd.ms-powerpoint',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'odt':  'application/vnd.oasis.opendocument.text',
  'ods':  'application/vnd.oasis.opendocument.spreadsheet',
  'odp':  'application/vnd.oasis.opendocument.presentation',
  'txt':  'text/plain',
  'csv':  'text/csv',
  'html': 'text/html',
  'htm':  'text/html',
  'xml':  'application/xml',
  'json': 'application/json',
  'js':   'text/javascript',
  'css':  'text/css',
  'sh':   'application/x-sh',
  'py':   'text/x-python',
  'jar':  'application/java-archive',
  'apk':  'application/vnd.android.package-archive',
  'epub': 'application/epub+zip',
  'mobi': 'application/x-mobipocket-ebook',
  'iso':  'application/x-iso9660-image',
  'torrent': 'application/x-bittorrent',
  // Text/data formats with no magic number of their own — added so a
  // generic-Content-Type download (or a byte-sniffed "plain text" result)
  // can still be refined to something specific instead of collapsing into
  // a catch-all bucket.
  'tsv':        'text/tab-separated-values',
  'md':         'text/markdown',
  'markdown':   'text/markdown',
  'yaml':       'application/yaml',
  'yml':        'application/yaml',
  'toml':       'application/toml',
  'ics':        'text/calendar',
  'vcf':        'text/vcard',
  'sql':        'application/sql',
  'vtt':        'text/vtt',
  'srt':        'application/x-subrip',
  'ovpn':       'application/x-openvpn-profile',
  'm3u':        'audio/x-mpegurl',
  'vbs':        'text/vbscript',
  'mjs':        'text/javascript',
  'cjs':        'text/javascript',
  // Scripting/executable-adjacent text formats — these have no magic number
  // of their own, so without an extension hint they'd previously slip past
  // any denylist rule targeting them, the same gap that affected CSV.
  'bash':       'application/x-sh',
  'bat':        'application/x-bat',
  'cmd':        'application/x-bat',
  'ps1':        'application/x-powershell',
  'rb':         'text/x-ruby',
  'pl':         'text/x-perl',
  'php':        'text/x-php',
};

// Extracts the lowercased file extension from a filename or URL, ignoring
// any query string/fragment (mirrors Chrome's getExtension()).
function getExtension(name) {
  var clean = (name || '').split(/[?#]/)[0];
  var match = /\.([a-z0-9]+)$/i.exec(clean);
  return match ? match[1].toLowerCase() : '';
}

function mimeFromFilename(filename) {
  if (!filename) return null;
  var ext = getExtension(filename);
  return EXT_MIME_MAP[ext] || null;
}

/*
  EXTENSION/CONTENT MISMATCH CHECK ("file name check").

  Compares what the file extension promises with what the first bytes really
  are, so a program renamed to invoice.pdf is caught even when every type
  rule would allow PDFs. Off / Warn (default) / Block. Zip-based containers
  (docx, xlsx, pptx, odt, ods, odp, epub, jar, apk, xpi) are treated as
  compatible with each other so they don't cause false alarms. Only real
  binary signatures count as evidence — a plain-text result never triggers
  it, because a login/error page swapped in for the real file shouldn't
  cause a false alarm.
*/
var OFFICE_TYPES = ['application/zip', 'application/msword'];
var EXTENSION_EXPECTS = {
  pdf:  ['application/pdf'],
  rtf:  ['application/rtf'],
  png:  ['image/'], jpg: ['image/'], jpeg: ['image/'], gif: ['image/'],
  bmp:  ['image/'], ico: ['image/'], tif: ['image/'], tiff: ['image/'],
  webp: ['image/', 'audio/wav'],           // WebP files start with RIFF, the same as WAV
  zip:  ['application/zip'],
  docx: OFFICE_TYPES, xlsx: OFFICE_TYPES, pptx: OFFICE_TYPES,
  doc:  OFFICE_TYPES, xls: OFFICE_TYPES, ppt: OFFICE_TYPES,
  odt:  ['application/zip'], ods: ['application/zip'], odp: ['application/zip'],
  docm: OFFICE_TYPES, xlsm: OFFICE_TYPES, xlsb: OFFICE_TYPES, pptm: OFFICE_TYPES,
  pages: ['application/zip'], numbers: ['application/zip'],
  epub: ['application/zip'], jar: ['application/zip'], apk: ['application/zip'], xpi: ['application/zip'],
  rar:  ['application/vnd.rar'],
  '7z': ['application/x-7z-compressed'],
  msi:  ['application/msword'],            // installers use the old Office container
  exe:  ['application/x-msdownload'], dll: ['application/x-msdownload'],
  iso:  ['application/x-iso9660-image'],
  tar:  ['application/x-tar'],
  deb:  ['application/x-debian-package'],
  rpm:  ['application/x-rpm'],
  mp3:  ['audio/'], wav: ['audio/'], flac: ['audio/'],
  ogg:  ['audio/', 'video/'], oga: ['audio/', 'video/'], opus: ['audio/', 'video/'],
  m4a:  ['audio/', 'video/'], mp4: ['audio/', 'video/'], mov: ['audio/', 'video/'],
  avi:  ['audio/wav', 'video/'],           // AVI files start with RIFF too
  mpg:  ['video/'], mpeg: ['video/'],
};

// Sniffed types that are programs or installers
var PROGRAM_MIMES = {
  'application/x-msdownload':    true,
  'application/x-executable':    true,
  'application/java-vm':         true,
  'application/x-debian-package': true,
  'application/x-rpm':           true,
};

/* Returns null when the file name and content agree (or there is nothing
*  reliable to compare), otherwise { ext, label, isProgram }.
*/
function checkExtensionMismatch(filename, sniffed) {
  if (!sniffed || !('bytes' in sniffed)) return null;      // signature matches only, never a plain-text guess
  var ext      = getExtension(filename);
  var accepted = EXTENSION_EXPECTS[ext];
  if (!accepted) return null;
  var mime = sniffed.mime.toLowerCase();
  var fine = accepted.some(function(a) { return a.charAt(a.length - 1) === '/' ? mime.indexOf(a) === 0 : mime === a; })
    || EXT_MIME_MAP[ext] === mime || ZIP_CONTAINER_TYPES[ext] === mime;
  if (fine) return null;
  return { ext: ext, label: sniffed.label, isProgram: !!PROGRAM_MIMES[mime] };
}

function describeMismatch(mismatch) {
  return 'File name says .' + mismatch.ext + ' but the content is ' + mismatch.label + (mismatch.isProgram ? ', which is a program' : '');
}

  /*
  Generic "wrapper" MIME types.

  Many servers (GitHub raw/download links being a very common case) send
  Content-Type: application/octet-stream for every download regardless of
  the actual file type, specifically to force a save-as prompt instead of
  letting the browser render it inline. If we trust that reported type at
  face value, a denylist rule for e.g. "application/pdf" never matches —
  the file is still a PDF, but the browser/extension only ever sees the
  generic wrapper type, so it's allowed straight through.

  The fix: when the reported type is one of these known generic wrappers,
  don't trust it — resolve the real type from the filename's extension
  instead (which is what these force-download links still preserve) and
  filter on THAT. If the filename doesn't map to anything more specific,
  fall back to the original reported type unchanged.
  */
var GENERIC_MIME_TYPES = [
  'application/octet-stream',
  'binary/octet-stream',
  'application/unknown',
  'application/force-download',
  'application/x-download',
  'application/save-as',
  'text/plain',
];

function isGenericMime(mimeType) {
  return GENERIC_MIME_TYPES.indexOf((mimeType || '').toLowerCase()) !== -1;
}

// Returns { mime, reportedMime } — reportedMime is only set (and differs from mime) when an override actually happened, so callers can log/note it.
function resolveEffectiveMime(mimeType, filenameOrUrl) {
  if (!isGenericMime(mimeType)) return { mime: mimeType, reportedMime: null };
  var extMime = mimeFromFilename(filenameOrUrl);
  if (extMime && extMime !== mimeType.toLowerCase()) {
    return { mime: extMime, reportedMime: mimeType };
  }
  return { mime: mimeType, reportedMime: null };
}

/* Pulls a filename out of a Content-Disposition header, if present.
*  Handles both the plain `filename="x.csv"` form and the RFC 5987
*  `filename*=UTF-8''x.csv` form that some servers (Google Drive included)
*  use for names with special characters.
*/
function filenameFromContentDisposition(contentDisposition) {
  if (!contentDisposition) return '';
  var star = /filename\*=(?:UTF-8'')?([^;]+)/i.exec(contentDisposition);
  if (star) {
    try { return decodeURIComponent(star[1].replace(/^"|"$/g, '')); } catch (e) { /* fall through */ }
  }
  var plain = /filename="?([^";]+)"?/i.exec(contentDisposition);
  return plain ? plain[1] : '';
}

/* Lightweight text sniffing, run only when no binary signature matched.
*  CSV, plain text, JSON, XML, and HTML have no magic number (they're just
*  readable characters from byte one), so without this fallback every
*  text-based download that arrives with no/generic Content-Type would
*  sail through unidentified. Only looks at a handful of leading bytes, so
*  on its own it can't tell CSV apart from any other delimited plain text —
*  that's what filenameHint is for: once content is independently
*  confirmed as plain text, a ".csv"/".py"/etc. name is enough to safely
*  refine the label.
*/
/* Extension -> {mime, label} for text-based formats with no magic number of
*  their own (CSV, source code, config files, ...). Only consulted once
*  content has already been independently confirmed as plain text (see
*  detectTextMime) — it never overrides a binary-signature match, so a
*  malicious file named "invoice.csv" that's actually an executable is still
*  caught by the binary signature check first.
*/
var TEXT_EXTENSION_MIME_MAP = {
  csv:  { mime: 'text/csv',                 label: 'CSV' },
  tsv:  { mime: 'text/tab-separated-values', label: 'TSV' },
  txt:  { mime: 'text/plain',                label: 'Plain Text' },
  log:  { mime: 'text/plain',                label: 'Log File' },
  md:   { mime: 'text/markdown',             label: 'Markdown' },
  markdown: { mime: 'text/markdown',         label: 'Markdown' },
  ini:  { mime: 'text/plain',                label: 'INI Config' },
  cfg:  { mime: 'text/plain',                label: 'Config File' },
  conf: { mime: 'text/plain',                label: 'Config File' },
  env:  { mime: 'text/plain',                label: 'Env File' },
  properties: { mime: 'text/plain',          label: 'Properties File' },
  yaml: { mime: 'application/yaml',          label: 'YAML' },
  yml:  { mime: 'application/yaml',          label: 'YAML' },
  toml: { mime: 'application/toml',          label: 'TOML' },
  json: { mime: 'application/json',          label: 'JSON' },
  xml:  { mime: 'application/xml',           label: 'XML' },
  html: { mime: 'text/html',                 label: 'HTML' },
  htm:  { mime: 'text/html',                 label: 'HTML' },
  css:  { mime: 'text/css',                  label: 'CSS' },
  js:   { mime: 'text/javascript',           label: 'JavaScript' },
  mjs:  { mime: 'text/javascript',           label: 'JavaScript (module)' },
  cjs:  { mime: 'text/javascript',           label: 'JavaScript (CommonJS)' },
  svg:  { mime: 'image/svg+xml',             label: 'SVG Image' },
  ics:  { mime: 'text/calendar',             label: 'Calendar (iCal)' },
  vcf:  { mime: 'text/vcard',                label: 'vCard' },
  sql:  { mime: 'application/sql',           label: 'SQL Script' },
  vtt:  { mime: 'text/vtt',                  label: 'WebVTT Subtitles' },
  srt:  { mime: 'application/x-subrip',      label: 'Subtitles (SRT)' },
  m3u:  { mime: 'audio/x-mpegurl',           label: 'Playlist (M3U)' },
  vbs:  { mime: 'text/vbscript',             label: 'VBScript' },
  ovpn: { mime: 'application/x-openvpn-profile', label: 'OpenVPN Profile' },
  sh:   { mime: 'application/x-sh',          label: 'Shell Script' },
  bash: { mime: 'application/x-sh',          label: 'Shell Script' },
  bat:  { mime: 'application/x-bat',         label: 'DOS Batch File' },
  cmd:  { mime: 'application/x-bat',         label: 'DOS Batch File' },
  ps1:  { mime: 'application/x-powershell',  label: 'PowerShell Script' },
  py:   { mime: 'text/x-python',             label: 'Python Script' },
  rb:   { mime: 'text/x-ruby',               label: 'Ruby Script' },
  pl:   { mime: 'text/x-perl',               label: 'Perl Script' },
  php:  { mime: 'text/x-php',                label: 'PHP Script' },
  java: { mime: 'text/x-java',               label: 'Java Source' },
  c:    { mime: 'text/x-c',                  label: 'C Source' },
  h:    { mime: 'text/x-c',                  label: 'C Header' },
  cc:   { mime: 'text/x-c',                  label: 'C++ Source' },
  cpp:  { mime: 'text/x-c',                  label: 'C++ Source' },
  cxx:  { mime: 'text/x-c',                  label: 'C++ Source' },
  hpp:  { mime: 'text/x-c',                  label: 'C++ Header' },
  lua:  { mime: 'text/x-lua',                label: 'Lua Script' },
};

/* Recognises text-based formats that have no magic number (CSV, plain text,
*  JSON, XML, HTML). Returns { mime, label } (no "bytes" key — that key marks
*  a genuine binary-signature match elsewhere) or null when the sample isn't
*  plausibly text at all.
*/
function detectTextMime(bytes, filenameHint) {
  if (!bytes || bytes.length === 0) return null;

  var sample = Array.prototype.slice.call(bytes, 0, 32);

  // A null byte pretty much never appears in real text; treat as binary/unknown.
  if (sample.indexOf(0x00) !== -1) return null;

  var isPrintable = sample.every(function(b) {
    return (b >= 0x20 && b <= 0x7e) ||          // printable ASCII
           b === 0x09 || b === 0x0a || b === 0x0d || // tab / LF / CR
           b >= 0x80;                            // permissive on multi-byte UTF-8 continuation bytes
  });
  if (!isPrintable) return null;

  var text = String.fromCharCode.apply(null, sample).replace(/^\s+/, '');

  if (text.indexOf('<?xml') === 0) return { mime: 'application/xml', label: 'XML Document' };
  if (/^<!doctype html/i.test(text) || /^<html/i.test(text)) return { mime: 'text/html', label: 'HTML Document' };
  if (text.charAt(0) === '{' || text.charAt(0) === '[') return { mime: 'application/json', label: 'JSON (heuristic)' };

  /* Confirmed plain text with no more specific structural match — check the extension map so a rule on,
   *  say, text/csv or application/x-sh actually catches the file instead of everything collapsing into one bucket.
   */
  var extMatch = TEXT_EXTENSION_MIME_MAP[getExtension(filenameHint)];
  if (extMatch) return extMatch;

  // No recognised extension either bucket as generic text rather than silently staying unidentified.
  return { mime: 'text/plain', label: 'Plain Text (heuristic)' };
}

/* Returns { mime, label, bytes } (bytes marks a real binary-signature match)
*  from a sample, or falls through to the text heuristic above.
*/
function detectMagicMime(bytes, filenameHint) {
  var hex = Array.prototype.map.call(bytes, function(b) {
    return b.toString(16).padStart(2, '0');
  }).join('');
  for (var i = 0; i < MAGIC_SIGNATURES.length; i++) {
    if (hex.indexOf(MAGIC_SIGNATURES[i].bytes) === 0) return MAGIC_SIGNATURES[i];
  }
  return detectTextMime(bytes, filenameHint);
}

/* Full sniff of the bytes read from the start of a file. The first 32 bytes
*  go through the normal signature and text checks; a container format is
*  refined via the filename (docx/xlsx/... vs. a plain zip); only when
*  nothing was found there are the deeper signatures (ISO/TAR/Mobipocket) tried.
*/
function sniffFileStart(bytes, filenameHint) {
  var found = detectMagicMime(bytes.slice(0, 32), filenameHint);
  // A real signature wins. A plain-text guess does not, because the first 32 bytes of a TAR file are just a file name.
  if (found && 'bytes' in found) return refineContainerType(found, filenameHint);
  for (var i = 0; i < DEEP_SIGNATURES.length; i++) {
    var sig = DEEP_SIGNATURES[i];
    var end = sig.offset + sig.bytes.length / 2;
    if (bytes.length < end) continue;
    var slice = Array.prototype.map.call(bytes.slice(sig.offset, end), function(b) {
      return b.toString(16).padStart(2, '0');
    }).join('');
    if (slice === sig.bytes) return sig;
  }
  return found;
}

// Reads at most `limit` bytes from a response and then stops the transfer — a server that ignores the Range header would otherwise send the whole file.
function readFirstBytes(response, limit) {
  if (!response.body || !response.body.getReader) {
    return response.arrayBuffer().then(function(buf) { return new Uint8Array(buf).slice(0, limit); });
  }
  var reader = response.body.getReader();
  var out = new Uint8Array(limit);
  var filled = 0;
  function pump() {
    return reader.read().then(function(result) {
      if (result.done || filled >= limit) return out.slice(0, filled);
      var take = Math.min(result.value.length, limit - filled);
      out.set(result.value.subarray(0, take), filled);
      filled += take;
      return pump();
    });
  }
  return pump().then(function(result) {
    reader.cancel().catch(function() {});
    return result;
  }, function(err) {
    reader.cancel().catch(function() {});
    throw err;
  });
}

/* Fetches the start of a URL and returns the full sniff result (mime, label,
*  cdFilename), or null when it can't be read/recognised at all. Used both
*  by the onCreated fallback (before the file finishes) and the onChanged
*  spoof check (after it finishes).
*/
function peekMagicBytes(url, filenameHint, callback) {
  if (url.indexOf('data:') === 0) {
    var bytes = decodeDataUrlBytes(url);
    var result = bytes ? detectMagicMime(bytes, filenameHint || url) : null;
    callback(result);
    return;
  }
  /* A blob: URL is only valid inside the tab/document that created it —
   *  there's no way to fetch it from the background script, so there's
   *  genuinely nothing to sniff here. Skip the network attempt entirely
   *  rather than let it fail.
   */
  if (url.indexOf('blob:') === 0) {
    callback(null);
    return;
  }
  fetch(url, {
    headers: { Range: 'bytes=0-' + (PEEK_BYTES - 1) },
    /* Critical: without this, the request goes out with no cookies/session for an authenticated
     *  download endpoint (e.g. a signed URL that requires a logged-in session).
     *  Those requests silently come back as a login/error page instead of the real file bytes, so the sniff
     *  never sees real content and never identifies anything.
     */
    credentials: 'include',
    cache: 'no-store',
  })
    .then(function(r) {
      if (!r.ok) return null;
      var cdFilename = filenameFromContentDisposition(r.headers.get('content-disposition'));
      return readFirstBytes(r, PEEK_BYTES).then(function(bytes) {
        return { bytes: bytes, cdFilename: cdFilename };
      });
    })
    .then(function(res) {
      if (!res) return callback(null);
      var hint = res.cdFilename || filenameHint || url;
      var detected = sniffFileStart(res.bytes, hint);
      if (!detected) return callback(null);
      var out = {};
      for (var k in detected) out[k] = detected[k];
      out.cdFilename = res.cdFilename;
      callback(out);
    })
    .catch(function() { callback(null); });
}

// Backward-compatible wrapper used by the spoof-check listener below: returns just the detected MIME type (or null).
function detectMimeFromBytes(url, filenameHint, callback) {
  peekMagicBytes(url, filenameHint, function(result) {
    callback(result ? result.mime : null);
  });
}

function getMimeRules(state) {
  if (state.mode === 'denylist') {
    return state.denylistRules || [];
  }
  return state.allowlistRules || ALLOWED_MIME_TYPES;
}

function matchesMime(mimeType, rules) {
  if (!mimeType) return false;
  var norm = mimeType.split(';')[0].trim().toLowerCase();
  return rules.some(function(rule) {
    var r = rule.trim().toLowerCase();
    return norm === r || norm.startsWith(r);
  });
}

function isAllowed(mimeType, mode, rules) {
  var matches = matchesMime(mimeType, rules);
  return mode === 'allowlist' ? matches : !matches;
}

/*
  WEBSITE RULES ("Websites" tab).

  A rule for one host — Trust (anything allowed), Block (everything
  blocked), or Only types (a specific list) — that applies to the site and
  its subdomains. The most specific host wins when several match. A website
  rule always takes priority over Docs only and over the allowlist/denylist.
*/

// Reduces what a person typed ("https://www.Example.com:8080/path") to a bare host. A leading www is dropped because the rule covers the whole site anyway.
function normalizeHost(input) {
  var host = String(input || '').trim().toLowerCase();
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

// Host of a URL. A blob: URL is judged by the site that created it. Returns '' when there is none (data:, file:).
function hostOf(url) {
  try {
    var parsed = new URL(url);
    if (parsed.protocol === 'blob:') return new URL(parsed.pathname).hostname.toLowerCase();
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.hostname.toLowerCase();
  } catch (e) { /* not a URL */ }
  return '';
}

/* Hosts a download is checked against for a website rule: the download's own
*  URL, its finalUrl, AND its referrer — the referrer check matters because a
*  download page often hands off to a different host to serve the actual file
*  (e.g. a download page that redirects to a rotating mirror network);
*  trusting the page you started from should still apply even though the file
*  itself is hosted elsewhere.
*/
function downloadHosts(item) {
  var hosts = [hostOf(item.url), hostOf(item.finalUrl), hostOf(item.referrer)].filter(function(h) { return !!h; });
  var seen = {};
  return hosts.filter(function(h) {
    if (seen[h]) return false;
    seen[h] = true;
    return true;
  });
}

// A rule for example.com covers example.com and www.example.com, but not badexample.com.
function hostMatches(host, ruleHost) {
  return host === ruleHost || host.slice(-(ruleHost.length + 1)) === '.' + ruleHost;
}

function findSiteRule(hosts, siteRules) {
  var best = null;
  (siteRules || []).forEach(function(rule) {
    if (!rule || !rule.host) return;
    if (!hosts.some(function(h) { return hostMatches(h, rule.host); })) return;
    if (!best || rule.host.length > best.host.length) best = rule;
  });
  return best;
}

/*
  DOCS ONLY.

  A single switch, separate from the allowlist/denylist. It only ever ADDS an
  allowance — it must never block anything on its own. When on, this fixed,
  broad set of document types is always allowed (even under a denylist rule
  that would otherwise block it); everything that is not a document is
  decided exactly as if Docs only were off. Plain text is deliberately left
  out, because Python/Java/JavaScript/etc. source often reports as
  text/plain and would make the "documents only" promise unreliable.
*/
var DOCS_ONLY_TYPES = [
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

/* Decides whether a download of this MIME type is allowed. A matching site
*  rule decides on its own. Otherwise Docs only (if on) grants an extra
*  allowance for documents; anything else falls through to the ordinary
*  allowlist/denylist. Returns { allowed, site, reason } — reason is only set
*  when a site rule or Docs only decided.
*/
function decideAccess(mimeType, hosts, state) {
  var site = findSiteRule(hosts, state.siteRules);
  if (!site) {
    if (state.docsOnly && matchesMime(mimeType, DOCS_ONLY_TYPES)) {
      return { allowed: true, site: null, reason: 'Docs only is on: "' + mimeType + '" is a document' };
    }
    return { allowed: isAllowed(mimeType, state.mode, getMimeRules(state)), site: null, reason: '' };
  }
  if (site.action === 'allow') {
    return { allowed: true, site: site, reason: 'Trusted site rule for ' + site.host + ': any type allowed' };
  }
  if (site.action === 'block') {
    return { allowed: false, site: site, reason: 'Site rule for ' + site.host + ' blocks all downloads' };
  }
  var ok = matchesMime(mimeType, site.types || []);
  return {
    allowed: ok,
    site: site,
    reason: ok
      ? 'MIME type "' + mimeType + '" matched the site rule for ' + site.host
      : 'MIME type "' + (mimeType || 'unknown') + '" is not allowed by the site rule for ' + site.host,
  };
}

var logQueue = Promise.resolve();

function appendLog(entry) {
  logQueue = logQueue.then(function() {
    return new Promise(function(resolve) {
      chrome.storage.local.get(['downloadLog', 'maxLogSize'], function(data) {
        var log    = data.downloadLog || [];
        var maxLog = data.maxLogSize  || 500;
        log.unshift(entry);
        if (log.length > maxLog) log.length = maxLog;
        chrome.storage.local.set({ downloadLog: log }, resolve);
      });
    });
  });
  return logQueue;
}

// Which website rule, if any, applied — stored on every log entry so JSON/CSV show whether a trusted/blocked/only-types site rule applied.
var SITE_RULE_NAMES = { allow: 'trust', block: 'block', only: 'only' };

function siteFields(site) {
  return {
    siteRule: site ? (SITE_RULE_NAMES[site.action] || site.action) : 'none',
    siteHost: site ? site.host : '',
  };
}

function buildEntry(item, status, reason, mimeType, site) {
  var entry = {
    id:        String(item.id),
    url:       item.url      || '',
    filename:  item.filename || '',
    mimeType:  mimeType      || 'unknown',
    status:    status,
    reason:    reason,
    timestamp: new Date().toISOString(),
  };
  var sf = siteFields(site);
  entry.siteRule = sf.siteRule;
  entry.siteHost = sf.siteHost;
  return entry;
}

function notify(title, message) {
  chrome.notifications.clear('mf', function() {
    chrome.notifications.create('mf', {
      type:     'basic',
      iconUrl:  'icons/icon48.png',
      title:    title,
      message:  message,
      priority: 1,
    });
  });
}

function shortUrl(url) {
  try {
    var u = new URL(url);
    var p = u.pathname.length > 30 ? u.pathname.slice(0, 30) + '...' : u.pathname;
    return u.hostname + p;
  } catch(e) {
    return (url || '').slice(0, 60);
  }
}

// Returns true for purely internal browser URLs that should never be intercepted
function isHardInternalUrl(url) {
  if (!url) return true;
  var skip = [
    'resource://', 'chrome://', 'moz-extension://',
    'chrome-extension://', 'about:',
  ];
  for (var i = 0; i < skip.length; i++) {
    if (url.startsWith(skip[i])) return true;
  }
  return false;
}

var STATE_KEYS = [
  'enabled', 'mode', 'allowlistRules', 'denylistRules', 'notifyOn', 'unknownBlock',
  'siteRules', 'mismatchMode', 'docsOnly', 'clearLogOnClose',
];

  /*
  In-memory settings cache.

  The webRequest blocking listener below MUST decide synchronously.
  Firefox-family browsers only hold an in-flight request open for an
  async ("Promise-returning") blocking listener for a limited window —
  if the listener hasn't resolved by then, the browser gives up waiting
  and lets the request through unmodified, while the listener's own JS
  keeps running to completion regardless. That's precisely why, on
  LibreWolf, the "blocked" notification could still fire (the extension's
  logic finished and decided to block) while the file downloaded anyway
  (the network layer had already stopped waiting on our await'd
  chrome.storage.local.get() call and moved on). LibreWolf's extra
  process/scheduling overhead vs. plain Firefox was enough to tip that
  timing over in your test.

  The fix is to never await anything on the hot path: keep a plain
  in-memory copy of the settings that's populated at startup and kept
  current via chrome.storage.onChanged, so the listener can read it and
  return {cancel:true} in the same tick the headers arrive — no timeout
  window to lose the race against, on any Firefox-based browser.
  */
/* These match getDefaults() exactly. Before this fix, the window between
*  browser/extension startup and the async chrome.storage.local.get()
*  callback below resolving left `enabled: false` and empty rule arrays —
*  meaning any download that happened to land in that window (e.g. testing
*  a download right after reloading the extension) passed through
*  completely silently: no block, no log entry, no notification, since
*  both onHeadersReceivedHandler and the onCreated listener bail out
*  immediately on `!cachedState.enabled` before any logging code runs.
*  Seeding the same defaults the real settings will resolve to (for anyone
*  who hasn't changed them) closes that gap.
*/
/* These are deliberately NOT "sensible defaults" — they're a fail-closed
*  placeholder. Firefox's non-persistent background script can be torn down
*  and respawned mid-session (not just at browser startup), and every
*  respawn re-runs this whole file from scratch, resetting cachedState
*  until the async chrome.storage.local.get() below resolves with the
*  user's real settings.
*
*  An earlier version of this defaulted to enabled:true with the full
*  default allow-list "for safety" — but that meant any download landing
*  in that window was evaluated under a policy the user never chose (e.g.
*  a user running in denylist mode would have that respawn window silently
*  fall back to allowlist mode with default rules, incorrectly allowing
*  through anything in that default list). That produced exactly this bug:
*  the same file, tested seconds apart, getting opposite verdicts with no
*  configuration change in between.
*
*  mode:'allowlist' + allowlistRules:[] blocks everything until real
*  settings load — the safe direction to fail in for a download filter —
*  and cachedStateReady lets the blocked-reason say so explicitly instead
*  of looking like an ordinary rule match.
*
*  notifyOn is a separate case: it's cosmetic (a UI alert), not a security
*  control, so there's no "safe direction" to fail closed toward the way
*  there is for enabled/mode. Defaulting it to true meant that if the
*  background script happened to respawn in the narrow window right after
*  the user flipped notifications off — and a blocked download landed
*  before refreshCachedState() resolved — a notification could still fire
*  despite the user having just turned them off. Defaulting to false
*  instead means the only possible mistake in that window is staying
*  silent for one notification, never showing one the user asked not to
*  see.
*/
var cachedStateReady = false;
var cachedState = {
  enabled:         true,
  mode:            'allowlist',
  allowlistRules:  [],
  denylistRules:   [],
  notifyOn:        false,
  unknownBlock:    true,
  siteRules:       [],
  mismatchMode:    'warn',
  docsOnly:        false,
  clearLogOnClose: false,
};

function refreshCachedState(callback) {
  chrome.storage.local.get(STATE_KEYS, function(data) {
    cachedState.enabled         = !!data.enabled;
    cachedState.mode            = data.mode || 'allowlist';
    cachedState.allowlistRules  = data.allowlistRules || [];
    cachedState.denylistRules   = data.denylistRules  || [];
    cachedState.notifyOn        = data.notifyOn     !== false;
    cachedState.unknownBlock    = data.unknownBlock !== false;
    cachedState.siteRules       = data.siteRules    || [];
    cachedState.mismatchMode    = data.mismatchMode || 'warn';
    cachedState.docsOnly        = data.docsOnly === true;
    cachedState.clearLogOnClose = data.clearLogOnClose === true;
    cachedStateReady = true;
    if (callback) callback();
  });
}

// Populate the cache as soon as this script runs — covers browser startup, extension (re)load, and MV3 background-script wake-ups.
refreshCachedState();

// Keep the cache current the instant the popup changes any setting.
chrome.storage.onChanged.addListener(function(changes, area) {
  if (area !== 'local') return;
  if (changes.enabled)        cachedState.enabled        = !!changes.enabled.newValue;
  if (changes.mode)           cachedState.mode           = changes.mode.newValue || 'allowlist';
  if (changes.allowlistRules) cachedState.allowlistRules = changes.allowlistRules.newValue || [];
  if (changes.denylistRules)  cachedState.denylistRules  = changes.denylistRules.newValue  || [];
  if (changes.notifyOn)       cachedState.notifyOn       = changes.notifyOn.newValue     !== false;
  if (changes.unknownBlock)   cachedState.unknownBlock   = changes.unknownBlock.newValue !== false;
  if (changes.siteRules)      cachedState.siteRules      = changes.siteRules.newValue    || [];
  if (changes.mismatchMode)   cachedState.mismatchMode   = changes.mismatchMode.newValue || 'warn';
  if (changes.docsOnly)       cachedState.docsOnly       = changes.docsOnly.newValue === true;
  if (changes.clearLogOnClose) cachedState.clearLogOnClose = changes.clearLogOnClose.newValue === true;
});

/*
  KEEPALIVE: mitigates (does not fully eliminate) the cachedStateReady
  fail-closed race by reducing how often the non-persistent background
  script idles out and gets respawned in the first place.

  Now that onHeadersReceivedHandler only judges genuine attachment
  responses (see isAttachmentResponse), the fail-closed window from a
  cold respawn only affects real downloads/exports — not every page
  view — but a respawn mid-session can still race a real download that
  happens to be the event that wakes the script back up.

  chrome.alarms events reset Firefox's idle timer for non-persistent
  background scripts, same as any other extension event. Firing one
  periodically, at an interval shorter than the idle timeout, keeps the
  script (and the already-loaded cachedState) resident instead of being
  torn down and reloaded from scratch between page loads — which is what
  was happening constantly on Tor, where navigations are often spaced
  further apart than the idle timeout.

  Trade-off: this trades a small, constant amount of background CPU/
  wake-up activity for far fewer cold-start races. If that trade-off
  isn't wanted, this block can be removed — isAttachmentResponse() alone
  already fixes the much bigger problem (ordinary browsing being blocked).
  Requires the "alarms" permission in manifest.json.
*/
chrome.alarms.create('mimeFilterKeepalive', { periodInMinutes: 0.4 }); // ~24s, under Firefox's ~30s idle timeout
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name !== 'mimeFilterKeepalive') return;
  // No-op beyond firing the event; just needs to happen to keep the script alive.
});

/*
  PRIMARY BLOCKING PATH: pre-flight via webRequest.

  chrome.downloads.onCreated (the fallback below) only fires AFTER the
  browser has already started saving the file, so cancelling from there
  is a race: small/fast files can finish writing to disk before a check
  completes, and once a download is "complete" cancel() is a silent
  no-op. That was the original cause of denied MIME types still completing.

  webRequest.onHeadersReceived fires as soon as response headers arrive,
  before any response body reaches disk or the download manager creates
  an entry at all, and this listener now decides synchronously using
  cachedState (see above) — no await, so no timeout to lose.

  Scope is limited to "main_frame"/"sub_frame" requests (i.e. requests
  that could plausibly become a saved file), NOT every sub-resource a
  page loads — otherwise blocking e.g. "text/css" or "application/json"
  would break ordinary web pages that use those content types internally.

  Within that scope, the response is only judged at all if it carries a
  Content-Disposition header marking it as an attachment (see
  isAttachmentResponse() below). Content-Type alone is NOT a reliable
  signal of download intent — a normal page navigation reports
  Content-Type: text/html same as anything else, and judging by MIME
  type alone meant ordinary browsing was being blocked as if every page
  were an unauthorized download.
*/

/*
  Is this response actually intended to be saved as a file, or is it an
  ordinary page/resource the browser will render inline?

  The old version of this listener judged every main_frame/sub_frame
  response purely by Content-Type, which meant a normal page load
  (Content-Type: text/html) was evaluated against the SAME allow/deny
  rules as a real download — and since "text/html" is never going to be
  in a downloads allowlist, every webpage you visited got treated as a
  blocked download. That was the actual cause of "it blocks pages I never
  set a rule for."

  A server that wants the browser to save a response as a file — rather
  than render it — says so explicitly via Content-Disposition: attachment
  (or a Content-Disposition with a filename param, which browsers also
  treat as a save prompt). That header is the correct, unambiguous signal
  to gate on here, not the MIME type. Ordinary pages never send it.

  Direct links to non-renderable file types (e.g. a bare ".zip" URL with
  no Content-Disposition at all) won't match this and so won't be judged
  here — but they're still fully covered by the downloads.onCreated
  fallback below once Firefox actually creates a download item for them.
  That path already has its own pause/resume + magic-byte handling, so
  nothing is left unprotected by narrowing this listener's scope.
*/
function isAttachmentResponse(headers) {
  var cd = headers.find(function(h) { return h.name.toLowerCase() === 'content-disposition'; });
  if (!cd || !cd.value) return false;
  return /^\s*attachment\b/i.test(cd.value) || /filename\*?\s*=/i.test(cd.value);
}

function extractFilenameFromHeaders(headers, url) {
  var cd = headers.find(function(h) { return h.name.toLowerCase() === 'content-disposition'; });
  if (cd && cd.value) {
    var m = /filename\*?=(?:UTF-8'')?"?([^;"]+)"?/i.exec(cd.value);
    if (m && m[1]) {
      try { return decodeURIComponent(m[1].trim()); } catch (e) { return m[1].trim(); }
    }
  }
  try {
    var p = new URL(url).pathname;
    return p.substring(p.lastIndexOf('/') + 1) || '';
  } catch (e) {
    return '';
  }
}

function onHeadersReceivedHandler(details) {
  if (details.type !== 'main_frame' && details.type !== 'sub_frame') return {};
  if (!cachedState.enabled) return {};

  var headers  = details.responseHeaders || [];

  /* Not a declared attachment => this is a normal page/resource load, not a download candidate. 
   *  Leave it alone entirely; don't log, don't notify, don't touch it. See isAttachmentResponse()
   *  above for why this is the right gate instead of Content-Type.
   */
  if (!isAttachmentResponse(headers)) return {};

  var ctHeader = headers.find(function(h) { return h.name.toLowerCase() === 'content-type'; });
  if (!ctHeader || !ctHeader.value) return {}; // nothing to judge yet — onCreated + magic-byte fallback covers this

  var mimeType = canonicalizeMime(ctHeader.value.split(';')[0].trim().toLowerCase());
  var filenameGuess = extractFilenameFromHeaders(headers, details.url);
  var resolved  = resolveEffectiveMime(mimeType, filenameGuess || details.url);

  /* Website rules and Docs only apply here too, at the earliest possible
   *  point. Only the URL itself is checked for a site-rule host match here —
   *  the true referrer (the page that started the download) is NOT reliably
   *  available on a main_frame response at this stage in Firefox, and
   *  guessing at it caused a real bug: a download from a mirror the user
   *  trusts only via its REFERRING page (e.g. a Linux Mint mirror reached
   *  from linuxmint.com) would sometimes get cancelled right here — before
   *  the reliable, referrer-aware check even ran — while an identical retry
   *  slipped past this gate (e.g. because the response happened not to be
   *  re-flagged as an attachment on a cached hit) and was correctly allowed
   *  by the onCreated fallback below, which DOES have the real referrer via
   *  the downloads API. Same URL, two different verdicts.
   *
   *  So: if this URL/finalUrl check alone would already allow it, or an
   *  explicit site rule matches by host and settles it (trust or block),
   *  decide right here as before. But if it would only be blocked by the
   *  plain allow/denylist AND the user has any website rule configured at
   *  all, a referrer-based trust match is still possible — defer to
   *  onCreated (fully protected either way by the onDeterminingFilename
   *  hold below, so nothing can be saved prematurely) rather than risk
   *  cancelling a download that the fuller check would have allowed.
   */
  var hosts    = downloadHosts({ url: details.url, finalUrl: details.url, referrer: '' });
  var decision = decideAccess(resolved.mime, hosts, cachedState);

  if (decision.allowed) return {}; // let it through; onCreated logs the "allowed" entry once the download item actually exists
  if (!decision.site && cachedState.siteRules.length > 0) return {}; // could still be referrer-trusted — let onCreated decide with the real referrer

  var filename    = filenameGuess;
  var logItem     = { id: 'net-' + details.requestId, url: details.url, filename: filename };
  var overrideNote = resolved.reportedMime
    ? ' (server reported "' + resolved.reportedMime + '"; filename extension used instead)'
    : '';
  var loadingNote = cachedStateReady ? '' : ' (filter settings were still loading — blocked conservatively; try again if unexpected)';
  var reason = (decision.reason || (cachedState.mode === 'allowlist'
    ? 'MIME type "' + resolved.mime + '" is not in the allowlist'
    : 'MIME type "' + resolved.mime + '" is in the denylist')) + overrideNote + loadingNote;

  // Logging/notifying are fire-and-forget and happen AFTER the decision to cancel is already made — they never delay the return below.
  appendLog(buildEntry(logItem, 'blocked', reason, resolved.mime, decision.site));
  if (cachedState.notifyOn) notify('Download Blocked', resolved.mime + '\n' + shortUrl(details.url));
  console.info('[MIME Filter] BLOCKED (pre-flight):', resolved.mime, details.url);

  return { cancel: true };
}

chrome.webRequest.onHeadersReceived.addListener(
  onHeadersReceivedHandler,
  { urls: ['http://*/*', 'https://*/*'], types: ['main_frame', 'sub_frame'] },
  ['blocking', 'responseHeaders']
);

/*
  RESTORE / REPLAY GUARD.

  Both Chrome and Firefox replay past downloads through onCreated when the
  extension's background context restarts or the browser starts, treating
  each one as a brand new creation. Without a check, old downloads get
  re-judged, re-fetched, logged again, and can trigger a fresh "Download
  Blocked" notification with nothing new actually downloaded. A genuinely new
  download always arrives in the in_progress state within moments of its
  startTime, so anything else is treated as a restore and skipped.
*/
var NEW_DOWNLOAD_WINDOW_MS = 30 * 1000;

function isRestoredFromHistory(item) {
  if (item.state && item.state !== 'in_progress') return true;
  var started = Date.parse(item.startTime);
  if (isFinite(started) && Date.now() - started > NEW_DOWNLOAD_WINDOW_MS) return true;
  return false;
}

/* Handled-download memory: each download (and each mismatch check) is
*  processed once, even if the background script restarts mid-session —
*  Firefox's non-persistent event page can be torn down and respawned, and a
*  respawn re-delivers pending events. Kept in storage.session where
*  available (cleared when the browser closes), falling back to a plain
*  in-memory object for older Firefox versions that lack storage.session —
*  which still fully covers a single script lifetime, the case that matters
*  most since a persistent-page respawn is comparatively rare.
*/
var handledDownloads = {};
var handledReady = (chrome.storage.session
  ? chrome.storage.session.get('handledDownloads').then(function(data) {
      (data.handledDownloads || []).forEach(function(key) { handledDownloads[key] = true; });
    }).catch(function() {})
  : Promise.resolve());

function claimOnce(key) {
  return handledReady.then(function() {
    if (handledDownloads[key]) return false;
    handledDownloads[key] = true;
    if (chrome.storage.session) {
      var recent = Object.keys(handledDownloads).slice(-200);
      handledDownloads = {};
      recent.forEach(function(k) { handledDownloads[k] = true; });
      chrome.storage.session.set({ handledDownloads: recent }).catch(function() {});
    }
    return true;
  });
}

function claimDownload(item) {
  return claimOnce('download:' + item.id + ':' + item.startTime);
}

// Removes a blocked download completely. A file that already finished is deleted first, then the entry is erased.
function discardDownload(id) {
  chrome.downloads.removeFile(id, function() {
    void chrome.runtime.lastError;
    chrome.downloads.erase({ id: id }, function() { void chrome.runtime.lastError; });
  });
}

/*
  HOLDING A DOWNLOAD UNTIL IT HAS BEEN JUDGED (never save a blocked file).

  A blocked file must never be saved. The browser starts saving the moment a
  download begins, and a tiny file can finish before the extension's
  fetch-based check completes. So each download is held at the point where
  the browser is choosing its final name (onDeterminingFilename): the browser
  will not finish the file until every extension has answered. The answer
  (suggest()) is given only after the decision is made, and a blocked
  download is cancelled while it is still held, so nothing is saved. A
  download that takes too long to judge is released rather than left stuck.
*/
var HOLD_LIMIT_MS = 20 * 1000;
var pendingDecisions = new Map();   // download id -> the promise that settles once its decision is done
var determinedNames  = new Map();   // download id -> the file name the browser chose

function rememberName(id, name) {
  determinedNames.set(id, name);
  if (determinedNames.size > 100) determinedNames.delete(determinedNames.keys().next().value);
}

// Waits for the browser to choose a name for a download. A blob: download has no name when onCreated fires, and its content can't be read, so the name is the only clue to what it is.
function waitForFilename(id, timeoutMs) {
  var deadline = Date.now() + (timeoutMs || 1500);
  function attempt() {
    var known = determinedNames.get(id);
    if (known) return Promise.resolve(known);
    if (Date.now() >= deadline) return Promise.resolve('');
    return new Promise(function(resolve) {
      chrome.downloads.search({ id: id }, function(results) {
        var item = results && results[0];
        if (!item) { resolve(''); return; }
        if (item.filename) { resolve(item.filename.split(/[\\/]/).pop()); return; }
        setTimeout(function() { resolve(attempt()); }, 50);
      });
    });
  }
  return attempt();
}

// Best guess at the file name for a download that is still starting, for the file-name check. Falls back to the server's Content-Disposition name, then the URL's own path.
function pickFilename(item, cdFilename) {
  var fromItem = (item.filename || '').split(/[\\/]/).pop();
  if (getExtension(fromItem)) return fromItem;
  if (getExtension(cdFilename)) return cdFilename;
  return (item.finalUrl || item.url || '').split(/[?#]/)[0].split('/').pop();
}

// Blocks a download whose file name does not match its content (mismatchMode === 'block'), before the download finishes.
function blockForMismatch(item, mimeType, note, notifyOn, site) {
  return new Promise(function(resolve) {
    chrome.downloads.cancel(item.id, function() {
      void chrome.runtime.lastError;
      setTimeout(function() { discardDownload(item.id); }, 500);
      appendLog(buildEntry(item, 'blocked', note + '. Blocked by the file name check.', mimeType, site));
      if (notifyOn) notify('Download Blocked', note + '\n' + shortUrl(item.url));
      console.info('[MIME Filter] BLOCKED (name mismatch):', item.url);
      resolve();
    });
  });
}

/*
  FALLBACK PATH: chrome.downloads.onCreated.
  blob:/data: downloads never touch the network, so webRequest above can
  never see them — this listener is the only place that can catch those.
  It also acts as defense-in-depth for any http/https download that
  somehow reaches this point despite the pre-flight check (e.g. no
  Content-Type header at all, requiring magic-byte sniffing).

  Reads cachedState directly (synchronous, no storage round trip needed),
  and every download is held via onDeterminingFilename (below) until this
  Promise settles, so there is no unprotected window even for the async
  magic-byte sniffing step.
*/
function judgeNewDownload(downloadItem) {
  if (isRestoredFromHistory(downloadItem)) return Promise.resolve();

  return claimDownload(downloadItem).then(function(claimed) {
    if (!claimed) return;

    var state = cachedState;
    if (!state.enabled) return;

    var url = downloadItem.url || '';
    if (isHardInternalUrl(url)) return;

    var declaredMime = canonicalizeMime((downloadItem.mime || '').split(';')[0].trim().toLowerCase());

    /* blob: URLs can't be re-fetched from the background script — a blob URL
     *  is only valid inside the tab/document that created it, so
     *  peekMagicBytes() always returns null for these. data: URLs CAN be
     *  verified directly (decodeDataUrlBytes, inside peekMagicBytes).
     */
    var isBlobOrUndecodable = url.indexOf('blob:') === 0;

    var mimeType    = declaredMime;
    var reportedMime = null; // set when a generic/inconclusive result was overridden by the file's own name, for the "(server reported X; filename extension used instead)" note
    var spoofed    = false;
    var spoofLabel = null;
    // True only when we truly could not verify the bytes at all (blob URL, or an undecodable data: URL) and had to fall back to trusting whatever Content-Type was declared.
    var unverified  = false;
    var inferredExt = '';
    var blobFilename = '';
    var sniffed = null;

    return new Promise(function(resolve) { peekMagicBytes(url, downloadItem.filename || url, resolve); })
      .then(function(result) {
        sniffed = result;

        // A genuine binary signature is the strongest possible evidence — real bytes win over any declared type or file name, full stop.
        if (sniffed && 'bytes' in sniffed) {
          var detected    = sniffed.mime.toLowerCase();
          var declaredTop = declaredMime.split('/')[0];
          var detectedTop = detected.split('/')[0];

          if (declaredMime && declaredMime !== detected && declaredTop !== detectedTop) {
            spoofed    = true;
            spoofLabel = sniffed.label;
          }
          mimeType = detected;
          return;
        }

        if (isBlobOrUndecodable || url.indexOf('data:') === 0) {
          /* Can't sniff the real bytes here at all. A generic-but-present
           *  declared type is still the best signal available, so it's
           *  trusted and checked against the user's rules like any other
           *  declared type — just flagged as unverified for transparency.
           */
          if (!declaredMime) {
            mimeType = '';
          } else {
            unverified = true;
          }

          /* A blob: download made by the page itself (a "Download as ZIP"
           *  button, for example) can't be read, and the page usually labels
           *  it with a generic type. When that's all we have, take the type
           *  from the real file name (once the browser has chosen one) and say so in the log.
           */
          if (isBlobOrUndecodable) {
            return waitForFilename(downloadItem.id).then(function(name) {
              blobFilename = name;
              if (!declaredMime || isGenericMime(declaredMime)) {
                var fromName = mimeFromFilename(blobFilename);
                if (fromName) {
                  mimeType    = fromName;
                  unverified  = true;
                  inferredExt = getExtension(blobFilename);
                }
              }
            });
          }
          return;
        }

        /* No binary signature: the sniff either failed outright (a blocked,
         *  timed-out, or unsupported Range fetch — some servers, notably
         *  ones that just serve a raw text file with no attachment headers
         *  at all, don't cooperate with a second Range request the same way
         *  they served the first one), or it only confirmed plain text
         *  without a specific extension match (which can happen when the
         *  server's own Content-Disposition file name lacks the real
         *  extension, even though the URL/download item's name has it).
         *  Either way, resolve from the download's own file name/URL —
         *  exactly what the pre-flight listener already does, and what
         *  every declared-but-generic type used to get unconditionally
         *  before byte-sniffing was layered on top here. Losing that
         *  guaranteed, network-independent fallback meant a failed or
         *  inconclusive sniff could leave e.g. a "text/plain"-declared .py
         *  file stuck as literal text/plain forever, never resolving to
         *  text/x-python — exactly the sample-*.py entries in the log.
         */
        var resolved = resolveEffectiveMime(declaredMime, downloadItem.filename || url);
        if (resolved.reportedMime) {
          mimeType     = resolved.mime;
          reportedMime = resolved.reportedMime;
        } else if (sniffed) {
          // Sniffing confirmed plain text (or similar) but neither the sniff nor the file name found anything more specific — keep that result rather than the raw declared type.
          mimeType = sniffed.mime.toLowerCase();
        }
      })
      .then(function() {
        var hosts = downloadHosts(downloadItem);
        var site  = findSiteRule(hosts, state.siteRules);

        /* File name check: does the extension match what the bytes really
         *  are? Runs before the type rules, so it also applies to trusted
         *  sites. In Warn mode the result is added to the log entry below.
         *  In Block mode the download stops here.
         */
        var mismatchNote    = '';
        var mismatchHandled = false;

        function runMismatchCheck() {
          if (state.mismatchMode === 'off' || !sniffed) return Promise.resolve();
          var nameHint = pickFilename(downloadItem, sniffed.cdFilename);
          if (!getExtension(nameHint)) return Promise.resolve();
          return claimOnce('mismatch:' + downloadItem.id).then(function() {
            var mismatch = checkExtensionMismatch(nameHint, sniffed);
            if (!mismatch) return;
            mismatchNote = describeMismatch(mismatch);
            if (state.mismatchMode === 'block') {
              mismatchHandled = true;
              return blockForMismatch(downloadItem, mimeType, mismatchNote, state.notifyOn, site);
            }
          });
        }

        return runMismatchCheck().then(function() {
          if (mismatchHandled) return;

          if (!mimeType && !site) {
            var unverifiableNote = isBlobOrUndecodable
              ? ' (blob/data URL — real content can\'t be verified; declared "' + (declaredMime || 'none') + '")'
              : '';
            var loadingNote = cachedStateReady ? '' : ' (filter settings were still loading — blocked conservatively; try again if unexpected)';

            if (state.unknownBlock) {
              chrome.downloads.cancel(downloadItem.id);
              setTimeout(function() { discardDownload(downloadItem.id); }, 500);
              var reasonUnknown = 'No verifiable MIME type' + unverifiableNote + ' (unknown-block is ON)' + loadingNote;
              appendLog(buildEntry(downloadItem, 'blocked', reasonUnknown, 'unknown', site));
              if (state.notifyOn) notify('Download Blocked', 'unknown/unknown\n' + shortUrl(downloadItem.url));
              console.info('[MIME Filter] BLOCKED (no MIME):', downloadItem.url);
            } else {
              if (getMimeRules(state).length > 0) {
                appendLog(buildEntry(downloadItem, 'allowed', 'No verifiable MIME type' + unverifiableNote + ' (unknown-block is OFF)', 'unknown', site));
              }
              console.info('[MIME Filter] ALLOWED (no MIME, pass-through):', downloadItem.url);
            }
            return;
          }

          var decision = decideAccess(mimeType, hosts, state);
          var logItem  = {};
          for (var k in downloadItem) { if (Object.prototype.hasOwnProperty.call(downloadItem, k)) logItem[k] = downloadItem[k]; }
          logItem.filename = downloadItem.filename || blobFilename || downloadItem.finalUrl || '';

          var overrideNote = reportedMime
            ? ' (server reported "' + reportedMime + '"; filename extension used instead)'
            : '';
          var unverifiedSuffix = overrideNote + (unverified
            ? (inferredExt
                ? ' (type taken from the file name .' + inferredExt + ', content could not be checked)'
                : ' (declared type, unverified — blob/data URL content could not be sniffed)')
            : '');
          var loadingNote2 = cachedStateReady ? '' : ' (filter settings were still loading — blocked conservatively; try again if unexpected)';

          if (!decision.allowed) {
            chrome.downloads.cancel(downloadItem.id);
            setTimeout(function() { discardDownload(downloadItem.id); }, 500);

            var reasonBlock = spoofed
              ? 'Magic bytes indicate "' + spoofLabel + '" (' + mimeType + ') but server declared "' + (declaredMime || 'no MIME') + '" — blocked as ' + mimeType + ', which is ' + (state.mode === 'allowlist' ? 'not in the allowlist' : 'in the denylist')
              : (state.mode === 'allowlist'
                  ? 'MIME type "' + mimeType + '" is not in the allowlist' + unverifiedSuffix
                  : 'MIME type "' + mimeType + '" is in the denylist' + unverifiedSuffix);
            if (decision.reason) reasonBlock = decision.reason + unverifiedSuffix;
            if (mismatchNote) reasonBlock += '. ' + mismatchNote;
            reasonBlock += loadingNote2;

            appendLog(buildEntry(logItem, 'blocked', reasonBlock, mimeType, decision.site));
            if (state.notifyOn) notify('Download Blocked', mimeType + '\n' + shortUrl(downloadItem.url));
            console.info('[MIME Filter] BLOCKED:', mimeType, downloadItem.url);
          } else {
            if (getMimeRules(state).length > 0 || decision.reason || mismatchNote) {
              var reasonAllow = spoofed
                ? 'Magic bytes indicate "' + spoofLabel + '" (' + mimeType + '), differs from declared "' + declaredMime + '", but ' + mimeType + ' is ' + (state.mode === 'allowlist' ? 'in the allowlist' : 'not in the denylist')
                : (state.mode === 'allowlist'
                    ? 'MIME type "' + mimeType + '" matched allowlist rule' + unverifiedSuffix
                    : 'MIME type "' + mimeType + '" not in denylist' + unverifiedSuffix);
              if (decision.reason) reasonAllow = decision.reason + unverifiedSuffix;
              if (mismatchNote) reasonAllow += '. ' + mismatchNote;
              appendLog(buildEntry(logItem, mismatchNote ? 'warned' : 'allowed', reasonAllow, mimeType, decision.site));
              if (mismatchNote && state.notifyOn) notify('File name does not match content', mismatchNote + '\n' + shortUrl(downloadItem.url));
            }
            console.info('[MIME Filter] ALLOWED:', mimeType, downloadItem.url);
          }
        });
      });
  }).catch(function(err) {
    console.error('[MIME Filter] Error in onCreated handler:', err);
  });
}

chrome.downloads.onCreated.addListener(function(item) {
  var work = judgeNewDownload(item);
  pendingDecisions.set(item.id, work);
  function cleanup() {
    if (pendingDecisions.get(item.id) === work) pendingDecisions.delete(item.id);
  }
  work.then(cleanup, cleanup);
});

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  rememberName(item.id, String(item.filename || '').split(/[\\/]/).pop());
  var pending = pendingDecisions.get(item.id);
  if (!pending) return false;              // nothing is being judged, so let it carry on
  var timer;
  var limit = new Promise(function(resolve) { timer = setTimeout(resolve, HOLD_LIMIT_MS); });
  function release() { clearTimeout(timer); suggest(); }
  Promise.race([pending, limit]).then(release, release);
  return true;                             // tells the browser the answer comes later
});

/*
  SPOOF-CHECK PATH: chrome.downloads.onChanged.

  Neither of the two listeners above ever byte-verifies a declared type
  that's specific-but-false. onHeadersReceivedHandler only resolves GENERIC
  wrapper types (application/octet-stream etc.) via resolveEffectiveMime —
  it trusts anything more specific (e.g. "image/png") at face value, since
  it must return synchronously and can't await a network round trip mid-
  response. onCreated's magic-byte path only runs when the declared type
  offered no strong evidence already trusted at face value. So a server
  that declares "Content-Type: image/png" on a response body that's
  actually a Windows PE or a shell script can still sail through — the
  textbook malware-delivery trick of disguising an executable behind an
  innocuous declared type. This listener closes that gap as a final,
  post-download check: once the file has actually finished writing,
  re-fetch its first bytes over the network and compare the sniffed result
  against what was declared. A contradiction — that the real type would
  ALSO be blocked under the user's current rules — means the file is
  deleted rather than left on disk having evaded every earlier check. It
  also runs the file-name check on the finished file (skipped if onCreated
  already ran it), where the final name is reliably known.

  This runs independently of onCreated/onHeadersReceived and of allow/deny
  rules — it's not a policy match, it's an integrity check — so it must
  carry its own `cachedState.enabled` gate rather than relying on either
  of the other listeners having already screened the download. This gate
  MUST be the first thing checked after confirming the download just
  completed, before any fetch/sniff work happens — otherwise switching the
  extension OFF would not stop files from being deleted after the fact.
*/
chrome.downloads.onChanged.addListener(function(delta) {
  if (!delta.state || delta.state.current !== 'complete') return; // only act once the file has actually finished writing
  if (!cachedState.enabled) return; // extension OFF — do nothing, not even a sniff; must come before any fetch/sniff work below

  chrome.downloads.search({ id: delta.id }, function(results) {
    var item = results && results[0];
    if (!item) return;

    var state = cachedState;
    var url = item.url || '';
    if (isHardInternalUrl(url)) return;
    // blob:/data: downloads have no network-fetchable source to re-sniff from at this point — only http/https can be re-verified this way.
    if (url.indexOf('blob:') === 0 || url.indexOf('data:') === 0) return;

    var hosts = downloadHosts(item);
    var site  = findSiteRule(hosts, state.siteRules);

    peekMagicBytes(url, item.filename || url, function(sniffed) {
      if (!sniffed) return; // inconclusive sniff — absence of a magic-byte/text match is not evidence of spoofing, don't act on it

      function runMismatchCheck() {
        if (state.mismatchMode === 'off' || !getExtension(item.filename)) return Promise.resolve(false);
        return claimOnce('mismatch:' + delta.id).then(function(claimed) {
          if (!claimed) return false; // onCreated already checked this download
          var mismatch = checkExtensionMismatch(item.filename, sniffed);
          if (!mismatch) return false;
          var note    = describeMismatch(mismatch);
          var isBlock = state.mismatchMode === 'block';
          var afterAction = isBlock
            ? new Promise(function(resolve) {
                chrome.downloads.removeFile(delta.id, function() {
                  void chrome.runtime.lastError;
                  chrome.downloads.erase({ id: delta.id }, function() { void chrome.runtime.lastError; resolve(); });
                });
              })
            : Promise.resolve();
          return afterAction.then(function() {
            appendLog({
              id:        String(delta.id),
              url:       item.url,
              filename:  item.filename || '',
              mimeType:  sniffed.mime.toLowerCase(),
              status:    isBlock ? 'blocked' : 'warned',
              reason:    isBlock ? note + '. Blocked by the file name check.' : note,
              timestamp: new Date().toISOString(),
              siteRule:  siteFields(site).siteRule,
              siteHost:  siteFields(site).siteHost,
            });
            if (state.notifyOn) {
              notify(isBlock ? 'Download Blocked' : 'File name does not match content', note + '\n' + shortUrl(url));
            }
            return isBlock;
          });
        });
      }

      runMismatchCheck().then(function(handledByMismatch) {
        if (handledByMismatch) return;

        var declared = canonicalizeMime((item.mime || '').split(';')[0].trim().toLowerCase());
        var detected = sniffed.mime.toLowerCase();

        // Only flag if the detected type genuinely contradicts the declared one.
        if (!declared || declared === detected) return;
        // Same top-level family (e.g. both image/) is not a meaningful mismatch — protects container formats whose magic bytes are indistinguishable from a plain zip.
        if (declared.split('/')[0] === detected.split('/')[0]) return;

        /* A declared/detected mismatch is not by itself a reason to delete
         *  the file — it only matters if the DETECTED (real) type would
         *  actually be blocked under the user's current rules. A download
         *  already permitted by onCreated (because its detected type was on
         *  the allowlist) must not be deleted here later purely because the
         *  server's declared Content-Type didn't match.
         */
        var decision = decideAccess(detected, hosts, state);
        if (decision.allowed) {
          if (getMimeRules(state).length > 0) {
            appendLog(buildEntry(item, 'allowed',
              'Magic bytes indicate "' + sniffed.label + '" (' + detected + '), differs from declared "' + declared + '", but ' + detected + ' is ' +
                (state.mode === 'allowlist' ? 'in the allowlist' : 'not in the denylist'),
              detected, decision.site));
          }
          return;
        }

        chrome.downloads.removeFile(item.id, function() {
          void chrome.runtime.lastError;
          var reason = 'Magic bytes indicate "' + sniffed.label + '" (' + detected + ') but server declared "' + declared + '" — possible MIME spoofing';
          appendLog(buildEntry(item, 'blocked', reason, declared, decision.site));
          if (state.notifyOn) notify('Spoofed Download Deleted', sniffed.label + '\nDeclared as: ' + declared);
          console.info('[MIME Filter] SPOOF DETECTED, file deleted:', declared, '->', detected, url);
        });
      });
    });
  });
});

function clearAllNotifications() {
  chrome.notifications.getAll(function(all) {
    Object.keys(all).forEach(function(id) { chrome.notifications.clear(id); });
  });
}

function clearLog() {
  logQueue = logQueue.then(function() {
    return new Promise(function(resolve) { chrome.storage.local.set({ downloadLog: [] }, resolve); });
  }).catch(function() {});
  return logQueue;
}

chrome.runtime.onInstalled.addListener(function() {
  refreshCachedState();
  clearAllNotifications();
});

chrome.runtime.onStartup.addListener(function() {
  refreshCachedState(function() {
    if (cachedState.clearLogOnClose) clearLog();
  });
  clearAllNotifications();
});

/* Clear log when the browser closes. Closing the last window is the closest
*  signal an extension gets — best effort, since the browser can exit before
*  this finishes, so onStartup above clears anything left over as a fallback.
*/
chrome.windows.onRemoved.addListener(function() {
  chrome.windows.getAll({}, function(remaining) {
    if (remaining && remaining.length > 0) return;
    if (cachedState.clearLogOnClose) clearLog();
  });
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'CLEAR_LOG') {
    clearLog().then(function() { sendResponse({ ok: true }); });
    return true;
  }
  if (message.type === 'GET_ALL_MIME_TYPES') {
    sendResponse({ mimeTypes: ALLOWED_MIME_TYPES });
    return true;
  }
  if (message.type === 'GET_DOCS_ONLY_TYPES') {
    sendResponse({ types: DOCS_ONLY_TYPES });
    return true;
  }
});
