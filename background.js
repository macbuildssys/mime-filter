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

const SCHEMA_VERSION = 5;

function getDefaults() {
  return {
    enabled:        true,
    mode:           'allowlist',
    allowlistRules: ALLOWED_MIME_TYPES.slice(),
    denylistRules:  [],
    downloadLog:    [],
    maxLogSize:     500,
    unknownBlock:   true,
    notifyOn:       true,
  };
}

// Write defaults on every service worker startup if schema is missing or outdated
chrome.storage.local.get('_schemaVersion', function(result) {
  if (result._schemaVersion !== SCHEMA_VERSION) {
    var defaults = getDefaults();
    defaults._schemaVersion = SCHEMA_VERSION;
    chrome.storage.local.set(defaults, function() {
      console.log('[MIME Filter] Storage reset to schema version', SCHEMA_VERSION);
    });
  }
});

// Magic byte signatures for fallback MIME detection when server sends no Content-Type
var MAGIC_SIGNATURES = [
  { bytes: '255044462d', mime: 'application/pdf'                                   },
  { bytes: 'ffd8ff',     mime: 'image/jpeg'                                        },
  { bytes: '89504e47',   mime: 'image/png'                                         },
  { bytes: '47494638',   mime: 'image/gif'                                         },
  { bytes: '52494646',   mime: 'audio/wav'                                         },
  { bytes: '494433',     mime: 'audio/mpeg'                                        },
  { bytes: 'fffb',       mime: 'audio/mpeg'                                        },
  { bytes: '664c6143',   mime: 'audio/flac'                                        },
  { bytes: '4f676753',   mime: 'audio/ogg'                                         },
  { bytes: '000001ba',   mime: 'video/mpeg'                                        },
  { bytes: '000001b3',   mime: 'video/mpeg'                                        },
  { bytes: '1a45dfa3',   mime: 'video/webm'                                        },
  { bytes: '504b0304',   mime: 'application/zip'                                   },
  { bytes: '52617221',   mime: 'application/vnd.rar'                               },
  { bytes: '1f8b',       mime: 'application/gzip'                                  },
  { bytes: '425a68',     mime: 'application/x-bzip2'                               },
  { bytes: '377abcaf27', mime: 'application/x-7z-compressed'                       },
  { bytes: '213c617263683e', mime: 'application/x-debian-package'                  },
  { bytes: 'edabeedb',   mime: 'application/x-rpm'                                 },
  { bytes: '4d5a',       mime: 'application/x-msdownload'                          },
  { bytes: '7f454c46',   mime: 'application/x-executable'                          },
  { bytes: 'cafebabe',   mime: 'application/java-vm'                               },
  { bytes: 'd0cf11e0',   mime: 'application/msword'                                },
  { bytes: '25215053',   mime: 'application/postscript'                             },
  { bytes: '53514c6974', mime: 'application/vnd.sqlite3'                           },
  { bytes: '38425053',   mime: 'image/vnd.adobe.photoshop'                         },
  { bytes: '49492a00',   mime: 'image/tiff'                                        },
  { bytes: '4d4d002a',   mime: 'image/tiff'                                        },
  { bytes: '424d',       mime: 'image/bmp'                                         },
  { bytes: '00000100',   mime: 'image/x-icon'                                      },
];

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

  if (text.indexOf('<?xml') === 0) return 'application/xml';
  if (/^<!doctype html/i.test(text) || /^<html/i.test(text)) return 'text/html';
  if (text.charAt(0) === '{' || text.charAt(0) === '[') return 'application/json';

  // Confirmed plain text with no more specific structural match — check the
  // extension map so a rule on, say, text/csv or application/x-sh actually
  // catches the file instead of everything collapsing into one bucket.
  var extMime = mimeFromFilename(filenameHint);
  if (extMime) return extMime;

  // No recognised extension either — bucket as generic text rather than
  // silently staying unidentified.
  return 'text/plain';
}

function detectMimeFromBytes(url, filenameHint, callback) {
  fetch(url, {
    headers: { Range: 'bytes=0-31' },
    // Critical: without this, the request goes out with no cookies/session
    // for an authenticated download endpoint (e.g. a signed URL that
    // requires a logged-in session). Those requests silently come back as
    // a login/error page instead of the real file bytes, so the sniff
    // never sees real content and never identifies anything.
    credentials: 'include',
    cache: 'no-store',
  })
    .then(function(r) {
      if (!r.ok) return null;
      var cdFilename = filenameFromContentDisposition(r.headers.get('content-disposition'));
      var hint = cdFilename || filenameHint || url;
      return r.arrayBuffer().then(function(buf) { return { buf: buf, hint: hint }; });
    })
    .then(function(result) {
      if (!result) return callback(null);
      var bytes = new Uint8Array(result.buf).slice(0, 32);
      var hex   = Array.from(bytes).map(function(b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
      for (var i = 0; i < MAGIC_SIGNATURES.length; i++) {
        if (hex.indexOf(MAGIC_SIGNATURES[i].bytes) === 0) {
          return callback(MAGIC_SIGNATURES[i].mime);
        }
      }
      callback(detectTextMime(bytes, result.hint));
    })
    .catch(function() { callback(null); });
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

function buildEntry(item, status, reason, mimeType) {
  return {
    id:        String(item.id),
    url:       item.url      || '',
    filename:  item.filename || '',
    mimeType:  mimeType      || 'unknown',
    status:    status,
    reason:    reason,
    timestamp: new Date().toISOString(),
  };
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

function handleDownload(item, state, mimeType, pausedFirst, reportedMime) {
  var mode      = state.mode      || 'allowlist';
  var notifyOn  = state.notifyOn  !== false;
  var mimeRules = getMimeRules(state);
  var allowed   = isAllowed(mimeType, mode, mimeRules);
  var overrideNote = reportedMime
    ? ' (server reported "' + reportedMime + '"; filename extension used instead)'
    : '';
  var loadingNote = cachedStateReady ? '' : ' (filter settings were still loading — blocked conservatively; try again if unexpected)';

  if (!allowed) {
    chrome.downloads.cancel(item.id);
    setTimeout(function() { chrome.downloads.erase({ id: item.id }); }, 500);
    var reason = (mode === 'allowlist'
      ? 'MIME type "' + mimeType + '" is not in the allowlist'
      : 'MIME type "' + mimeType + '" is in the denylist') + overrideNote + loadingNote;
    appendLog(buildEntry(item, 'blocked', reason, mimeType));
    if (notifyOn) notify('Download Blocked', mimeType + '\n' + shortUrl(item.url));
    console.info('[MIME Filter] BLOCKED:', mimeType, item.url);
  } else {
    /* Only resume if this item was actually paused first (the magic-byte
     detection path, below, which genuinely needs an async network round
     trip before a decision can be made). The common case — MIME type
     already known from item.mime — decides synchronously via cachedState
     and is never paused at all, so there's nothing to resume and no
     pause/resume flakiness to cause a stalled "click resume a few times"
     download or a missing log entry for the eventual successful retry.
    */
    if (pausedFirst) {
      chrome.downloads.resume(item.id, function() { void chrome.runtime.lastError; });
    }
    if (mimeRules.length > 0) {
      var okReason = (mode === 'allowlist'
        ? 'MIME type "' + mimeType + '" matched allowlist rule'
        : 'MIME type "' + mimeType + '" not in denylist') + overrideNote;
      appendLog(buildEntry(item, 'allowed', okReason, mimeType));
    }
    console.info('[MIME Filter] ALLOWED:', mimeType, item.url);
  }
}

var STATE_KEYS = ['enabled', 'mode', 'allowlistRules', 'denylistRules', 'notifyOn', 'unknownBlock'];

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
*/
var cachedStateReady = false;
var cachedState = {
  enabled:        true,
  mode:           'allowlist',
  allowlistRules: [],
  denylistRules:  [],
  notifyOn:       true,
  unknownBlock:   true,
};

function refreshCachedState(callback) {
  chrome.storage.local.get(STATE_KEYS, function(data) {
    cachedState.enabled        = !!data.enabled;
    cachedState.mode           = data.mode || 'allowlist';
    cachedState.allowlistRules = data.allowlistRules || [];
    cachedState.denylistRules  = data.denylistRules  || [];
    cachedState.notifyOn       = data.notifyOn     !== false;
    cachedState.unknownBlock   = data.unknownBlock !== false;
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

  Scope is deliberately limited to "main_frame"/"sub_frame" requests only
  (i.e. requests that could plausibly become a saved file), NOT every
  sub-resource a page loads — otherwise blocking e.g. "text/css" or
  "application/json" would break ordinary web pages that use those content types internally.
*/

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
  var ctHeader = headers.find(function(h) { return h.name.toLowerCase() === 'content-type'; });
  if (!ctHeader || !ctHeader.value) return {}; // nothing to judge yet — onCreated + magic-byte fallback covers this

  var mimeType = canonicalizeMime(ctHeader.value.split(';')[0].trim().toLowerCase());
  var filenameGuess = extractFilenameFromHeaders(headers, details.url);
  var resolved  = resolveEffectiveMime(mimeType, filenameGuess || details.url);
  var mode      = cachedState.mode;
  var rules     = getMimeRules(cachedState);
  var allowed   = isAllowed(resolved.mime, mode, rules);

  if (allowed) return {}; // let it through; onCreated logs the "allowed" entry once the download item actually exists

  var filename    = filenameGuess;
  var pseudoItem  = { id: 'net-' + details.requestId, url: details.url, filename: filename };
  var overrideNote = resolved.reportedMime
    ? ' (server reported "' + resolved.reportedMime + '"; filename extension used instead)'
    : '';
  var loadingNote = cachedStateReady ? '' : ' (filter settings were still loading — blocked conservatively; try again if unexpected)';
  var reason = (mode === 'allowlist'
    ? 'MIME type "' + resolved.mime + '" is not in the allowlist'
    : 'MIME type "' + resolved.mime + '" is in the denylist') + overrideNote + loadingNote;

  // Logging/notifying are fire-and-forget and happen AFTER the decision to cancel is already made — they never delay the return below.
  appendLog(buildEntry(pseudoItem, 'blocked', reason, resolved.mime));
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
  FALLBACK PATH: chrome.downloads.onCreated.
  blob:/data: downloads never touch the network, so webRequest above can
  never see them — this listener is the only place that can catch those.
  It also acts as defense-in-depth for any http/https download that
  somehow reaches this point despite the pre-flight check (e.g. no Content-Type header at all,
  requiring magic-byte sniffing).
  This now reads cachedState directly (synchronous, no storage round
  trip needed at all), and additionally pauses the item as the very
  first action for the one remaining async step — magic-byte sniffing
  over the network — so there is no unprotected window even there.
*/

chrome.downloads.onCreated.addListener(function(item) {
  var url      = item.url      || '';
  var filename = item.filename || '';

  if (isHardInternalUrl(url)) return;
  if (!cachedState.enabled) return; // never touched, nothing to pause/resume

  var mimeType = canonicalizeMime(item.mime || '');

  // For blob URLs and non-http URLs, try to derive MIME from filename first
  var isBlobOrInternal = url.startsWith('blob:') || (!url.startsWith('http://') && !url.startsWith('https://'));

  if (!mimeType && isBlobOrInternal) {
    mimeType = mimeFromFilename(filename) || '';
  }

  if (mimeType) {
    // MIME already known — but if it's a generic wrapper type (e.g. GitHub's
    // application/octet-stream on every download link), resolve the real
    // type from the filename first so a rule like "deny application/pdf"
    // can't be bypassed just because the server/blob reported a generic type.
    var resolved = resolveEffectiveMime(mimeType, filename || url);
    // MIME already known — decide synchronously via cachedState, right
    // now, with no pause/resume at all. This is the path almost every
    // download takes, so it's the one that must never touch pause().
    handleDownload(item, cachedState, resolved.mime, /* pausedFirst */ false, resolved.reportedMime);
    return;
  }

  /* Still no MIME — the only remaining option is an async network round
     trip (magic-byte sniffing), so THIS is the one case that still needs
     to pause first, to avoid a fast download completing before the sniff
     resolves*/

  if (url.startsWith('http://') || url.startsWith('https://')) {
    chrome.downloads.pause(item.id, function() { void chrome.runtime.lastError; });
    detectMimeFromBytes(url, filename, function(detected) {
      if (!cachedState.enabled) {
        // Extension was switched off while this async sniff (fetch over the
        // network) was in flight. The enabled check at the top of this
        // listener only covers the moment the download was created — it's
        // stale by now. Re-check here, right before acting, and if the
        // toggle is off just let the paused download go through untouched:
        // no cancel, no log entry, no notification. Without this, toggling
        // OFF mid-sniff would not stop a block/notify that was already
        // "decided" back when the extension was still on.
        chrome.downloads.resume(item.id, function() { void chrome.runtime.lastError; });
        return;
      }
      if (detected) {
        handleDownload(item, cachedState, detected, /* pausedFirst */ true);
      } else if (cachedState.unknownBlock) {
        chrome.downloads.cancel(item.id);
        setTimeout(function() { chrome.downloads.erase({ id: item.id }); }, 500);
        appendLog(buildEntry(item, 'blocked', 'No MIME type and magic bytes unrecognised (unknown-block ON)', 'unknown'));
        if (cachedState.notifyOn) notify('Download Blocked', 'unknown/unknown\n' + shortUrl(url));
      } else {
        chrome.downloads.resume(item.id, function() { void chrome.runtime.lastError; });
        appendLog(buildEntry(item, 'allowed', 'No MIME type and magic bytes unrecognised (unknown-block OFF)', 'unknown'));
      }
    });
  } else if (cachedState.unknownBlock) {
    // blob/internal with no filename match and no fetchable URL — decide now, no pause needed since there's no async step here either.
    chrome.downloads.cancel(item.id);
    setTimeout(function() { chrome.downloads.erase({ id: item.id }); }, 500);
    appendLog(buildEntry(item, 'blocked', 'No MIME type detected (unknown-block ON)', 'unknown'));
    if (cachedState.notifyOn) notify('Download Blocked', 'unknown/unknown\n' + filename);
  } else {
    appendLog(buildEntry(item, 'allowed', 'No MIME type detected (unknown-block OFF)', 'unknown'));
  }
});

/*
  SPOOF-CHECK PATH: chrome.downloads.onChanged.

  Neither of the two listeners above ever byte-verifies a declared type
  that's specific-but-false. onHeadersReceivedHandler only resolves GENERIC
  wrapper types (application/octet-stream etc.) via resolveEffectiveMime —
  it trusts anything more specific (e.g. "image/png") at face value, since
  it must return synchronously and can't await a network round trip mid-
  response. onCreated's magic-byte path (detectMimeFromBytes) only runs
  when there's NO declared type at all. So a server that declares
  "Content-Type: image/png" on a response body that's actually a Windows
  PE or a shell script sails straight through both — the textbook
  malware-delivery trick of disguising an executable behind an innocuous
  declared type. This listener closes that gap as a final, post-download
  check: once the file has actually finished writing, re-fetch its first
  bytes over the network (same technique detectMimeFromBytes already uses
  elsewhere) and compare the sniffed result against what was declared. A
  contradiction means the declared type was spoofed, so the saved file is
  deleted rather than left on disk having evaded every earlier check.

  This runs independently of onCreated/onHeadersReceived and of allow/deny
  rules — it's not a policy match, it's an integrity check ("did the
  bytes match what the server told us they were") — so it must carry its
  own `cachedState.enabled` gate rather than relying on either of the
  other listeners having already screened the download. Per the toggle
  bug: this gate MUST be the first thing checked after confirming the
  download just completed, before any fetch/sniff work happens, exactly
  like the other two listeners — otherwise switching the extension OFF
  would not stop files from being deleted after the fact.
*/
chrome.downloads.onChanged.addListener(function(delta) {
  if (!delta.state || delta.state.current !== 'complete') return; // only act once the file has actually finished writing
  if (!cachedState.enabled) return; // extension OFF — do nothing, not even a sniff; must come before any fetch/sniff work below

  chrome.downloads.search({ id: delta.id }, function(results) {
    // Re-check: the entry-point check above only proves the toggle was on
    // the instant the download completed. chrome.downloads.search() is
    // itself an async round trip to the browser, however brief — cheap
    // insurance against acting on a now-stale "enabled" reading.
    if (!cachedState.enabled) return;

    var item = results && results[0];
    if (!item) return;

    var url = item.url || '';
    if (isHardInternalUrl(url)) return;
    // blob:/data: downloads have no network-fetchable source to re-sniff from at this point — only http/https can be re-verified this way.
    if (!(url.startsWith('http://') || url.startsWith('https://'))) return;

    var declared = canonicalizeMime((item.mime || '').split(';')[0].trim().toLowerCase());
    // Nothing "specific but false" to check for an empty or generic declared
    // type — those are already resolved from the filename by
    // resolveEffectiveMime() elsewhere, and re-flagging them here would
    // just produce false positives on the very fallback path meant to fix them.
    if (!declared || isGenericMime(declared)) return;

    detectMimeFromBytes(url, item.filename, function(detected) {
      // Re-check again: this is the point most likely to actually matter —
      // the sniff is a real network fetch and can take long enough for the
      // toggle to flip mid-flight. Without this, a file whose download
      // completed while the extension was on could still get deleted (and
      // notified) seconds later after the person switched it off.
      if (!cachedState.enabled) return;
      if (!detected) return; // inconclusive sniff — absence of a magic-byte/text match is not evidence of spoofing, don't act on it
      var detectedNorm = detected.toLowerCase();
      if (detectedNorm === declared) return; // bytes match what was declared — no spoof

      chrome.downloads.removeFile(item.id, function() {
        void chrome.runtime.lastError;
        var reason = 'Declared MIME type "' + declared + '" contradicted by sniffed content ("' + detected +
          '") — possible spoofing; file deleted after download completed';
        appendLog(buildEntry(item, 'blocked', reason, detected));
        if (cachedState.notifyOn) notify('Spoofed Download Deleted', declared + ' \u2192 ' + detected + '\n' + shortUrl(url));
        console.info('[MIME Filter] SPOOF DETECTED, file deleted:', declared, '->', detected, url);
      });
    });
  });
});

function clearAllNotifications() {
  chrome.notifications.getAll(function(all) {
    Object.keys(all).forEach(function(id) { chrome.notifications.clear(id); });
  });
}

chrome.runtime.onInstalled.addListener(function() {
  refreshCachedState();
  clearAllNotifications();
});

chrome.runtime.onStartup.addListener(function() {
  refreshCachedState();
  clearAllNotifications();
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'CLEAR_LOG') {
    chrome.storage.local.set({ downloadLog: [] }, function() {
      sendResponse({ ok: true });
    });
    return true;
  }
  if (message.type === 'GET_ALL_MIME_TYPES') {
    sendResponse({ mimeTypes: ALLOWED_MIME_TYPES });
    return true;
  }
});
