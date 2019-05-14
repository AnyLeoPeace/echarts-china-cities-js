(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('忻州轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"忻州"},"geometry":{"type":"Polygon","coordinates":["@@CCEAACEGEEE@ACEGCECACAECE@GAIAG@E@EAECECCCAAGECAGAGACACAGBG@GCCCGCE@GAE@GCA@EAGAG@E@EAICAACAGCEEGEGGECACAAEECECCAECA@AA@@EAC@GCAAAEEACCCAAECIAMCI@ICKAG@IAIAMCI@GBABE@AACAACCAA@EBCDEBEBA@E@E@ABEAEAG@G@C@AA@E@A@AEAA@GBGAGDCBEDIDEBABOBKBIBABEACA@ABCDCBED@@CBABG@C@CECEEEGCEECICCCCAECCAE@I@EDGBEBEBE@EAAAGCG@GBG@GBIBCDEDCDEHCFDDDDDHBF@FADEBE@@BA@ABA@AB@B@BBB@B@B@BABABA@ABA@ABA@A@A@A@A@AB@B@BBB@B@BABABA@ABCBA@ABA@ABA@ABA@@BABA@AB@BABAAAA@C@E@E@G@G@C@ACAKAGACAGIAACCI@A@IDGDEDG@E@ICIFCFC@IBEBCJCLEFEF@HCLEFCBGBI@KCGCICICGIEAQBOJIFG@M@G@MDIJGNIJKHGJEBG@IBIDABA@@BAB@BA@A@C@A@AAA@A@A@AAA@A@AAA@AAA@AAA@C@@BA@A@C@A@A@A@ABA@ABA@ABABA@A@A@ABA@C@AAC@A@ABA@A@AB@BCEEIMEKGKIEE@GBEDEHENEJ@HEBEACK@eGWEWIA@@KFGDGBAJKFGLGHCHEFGBGBKBI@KFEH@JCDK@KCKEGACAGCICICGGEQCCCIEE@KBIFG@ICAABKBE@A@CEDGHIHMAMBMDGDEBOBMDOAE@KAEACEGEKDEHKHCJEDGBGFCFIFGBIBG@KCGACDEDC@QFGFE@IGCAE@IDCBIDQHIBIBGDCJE@GAKISAGCOEIBOGCGACIAG@EDGHIHGDIAOFO@MLGHEHGFGBIBC@@ACCECEAM@IFADCFBFBHDLBLA@CHEBA@GBUHE@CAAEAGBALCDC@CGCM@KBE@KBG@EAQLGDAFAD@DAHCFIBIDCDIHIHCJANAH@JBNBLAFALDDXBFBJBVHH@LEFAFBPBHDHDHFADBR@B@B@DADOHIBGFCJAFDLFHBFAFEJCHBJBFGFGFOBIFGJCDE@EBED@D@BBHDFDD@FADEDCH@DCDENBDTNFF@JEDAFAFDD@FKLKFGF@BMJKHILA@MJ@BMJMJIHIFKLBHBF@BJFJHFBDDNFNDNHRJANAFELENCJEHELGNILKNIBKFQHSAEEEIEMEIIMEEKIOGOESEEAQAQESIOCUEIIQGQKMIMKGCGEMGMAK@KFKDIJOPKBGACAGICI@KDA@A@I@MAICKQNEFIJKHOJIFMNMNGNAJCN@J@B@LCJBJEDIFKBSBA@oB]AMBGBCDEDCFGBQHIDCJBHBJCFO@WGSASAKCMCQ@UBEDGHEJELELIPELCLBF@L@LAHCFIDKDMDEHELAPBFANALCRCLELEFCHABEDID_BWCQCMAOAKCMGECGEQMOCICKEMEKCOGGCQESMMIIEMGGEIEEAEGACEEE@EAA@E@E@EDAJAFGFCDABCFILCD@BEHEDIBA@A@C@A@A@I@KAA@A@A@CAKDGBGHADBJDJDFJF@D@B@B@BBBAF@FCFEFIHBBBBFFHLJLFLHH@FAD@BEFGHABAD@D@DBDBDDBHDDBD@D@D@DBFBFFFFDJBBBFFLBDAD@DDFBDDH@BDD@BBBBBFFFFDBFJB@BH@HAFGHADKLCDA@AF@DBBFDFDFBBBNJBDFHBLALELCN@RBF@DALAHINCHABADADCFAJAFCDEBCBIFCBCHADBDBHBDRTLPBBDBJDJFHDDBDDDBPLJDLDJBTBFBH@B@D@HAFBB@B@RDFBD@DBD@FDDBHHHFFDHFNHDDJHVTJFBBDHFJBHBDBN@B@DCH@DBFBDFDFBJDB@DDDDDJBDFJBFBHDFDJ@B@FCFABABEDABCDAB@F@BFLHLBDBDDH@BHJJJ@BJJ@BDFBFDHBJBBBFDBFHDFFD@B@BABAD@BDBDBDBHFDFDHBD@BBF@DCDCFADAD@FBFDLBFDDDFFHBFBDBDDBDDFBBBD@DBDDDDBDBDBBDBBBABA@I@M@I@G@EAE@C@I@KDIDIDEFEDGDCFGJCFAD@DDFJHFDFBDDBD@FADEDABCBC@C@GCOECCAAAC@A@CAACAGAABC@EDCFBF@BDLBDBJ@JAFEFCBI@MAIACAA@O@KFAHBHJJDDDDJNBDHNFFDFDDHBJDB@HBFBBBHHFDFDDBF@FAHCFAF@H@L@LDFDHBFBDAFAFED@F@FAB@B@J@DAD@B@B@DBD@J@FBDBFBDBF@D@DAD@BAF@DAF@BAFCDAD@D@D@BBDBBBB@J@LDD@RAH@HAXBJDTFFFHFFNDPBL@B@HAJ@F@DBDFFDFFHHHLHFFFDHDHDJBB@THF@H@JBFDJJ@FBHDJ@FCJA@AFMLAF@FHPHNFJBFBH@N@HBHDHFL@FAFADKLEHAD@B@FBDHFD@D@D@BAD@B@DCBADGDEBEDADAD@FBDD@D@D@D@JBF@DADEBGBO@CBEBADEFAD@F@B@DD@FAH@JBHDLBHDHDJDHDJFJDHBFBFBFBBBBAB@H@FBD@D@F@F@D@FAFCHAFCD@BAD@DADAFAH@B@D@D@D@F@DABCBADEBABABABAF@F@DBJ@D@DBF@FAD@DABAFAFCFCDAFADAD@DAD@B@F@F@DFFFBDFBZDBAD@BADAB@D@F@F@HCFABAHCFAFADADAH@HAFCFADAFADCDADADEDCDA@ABCDCFCDA@ADAB@HAD@HALAJCDAFCDAF@DADADAD@FAD@D@D@BBD@D@BABABABADAD@D@D@BBFDBBFBBBDBDBD@B@DDBDDBBBDBHDB@FDB@@BBBBDDBB@DFHDDBBBD@D@DBF@FADADAFABAFCDBF@DAB@HAD@BABADABADABCD@@BBB@BDB@BFB@BDBD@DCB@BBBBDBFDB@D@D@FADADAB@B@D@BB@BD@D@BADCDABABAD@DDFCDCFGBGBKBGDINKNIPGHCHCHEJIJKNMBAFELICCIMOEG@K@SA[BK@I@SEE@UAAAKAAAMCGCECCCAI@AAE@CBEDEFGFEFONGFIDKBEB@@ADCBAF@DBB@NHF@D@D@REDCJIPIFAJCDAFBDFD@DBFA@C@EACBGBEBEFEFEFE@E@GBEFAFAFADE@ABCBC@EAEAGAECEAEBADABCNKFEBADCBECECC@GDIDGHIJCFAB@PCHCFCDCCEEGBEBGBEDCBAJCFADABCACMIEAICA@HMJANGHEFMHIFMFGJMPEHDHFDJDHFLNJPDLBNBR@PATEFARIB@RCJIFGHQCQAO@EPGFEBCAE@EAC@CHCFAFAFAFADCDS@GCGACEEACBCFCJBJDHFFBF@FAH@HBDBDAHEFAFABCBCBI@GBAJBD@@CECGG@GDC@MCKCE@GDEHAH@NBJ@NBN@HCDE@CAGAAAAGCIAGCAAACBEFIFCLCJBRFBF@DCL@H@DDFFBRAFBBFB@F@DABAB@PCHCFADCHELIB@LCB@PBVHLDB@NDTARCRMLAFDRDPHNJFDHDPJNHLJNFNFZDT@LAHCRALI@A@A@ABC@ABABC@A@AB@BABC@A@AB@@ABADAFABAB@D@DBBAB@BBD@D@B@DABAB@BA@ABA@A@A@A@AACAC@ABA@ALSH@ZBDB@AHCNCPBNAJ@RFFBFHDLDN@BAD@BABAD@FBDBB@BBBBBB@BDDBFB@BDDDDB@DBBBD@BAFCB@B@DABADAB@D@B@B@B@DBD@HBD@DBDBD@BBDBFBHDBBB@B@BBFBBBDBBBLJB@DBHF@BB@DDB@DFBDBB@J@JBLCDAB@BABA@ABCBABCBA@AB@B@BB@@BNABAD@HABAB@FBB@DBBBFBDBB@B@B@FBNDDBDBB@H@LCFEHIFGNKR@FDJLDFBF@JBHDLFJNDHBPBRBXBNJHN@NFPLHLHLXJLHPBLHLHFJFRFTFXBVBVFHBPHPFFBJDNDHBTFTH@H@BDDJBBD@BDB@BDBBBBBB@FFBD@DAB@DBD@B@BB@@BDBHBB@P@B@BBD@BABBB@B@B@B@BBB@BBBAB@BBBB@BBB@BBBFBBBB@B@B@B@B@B@FAJ@F@B@B@BADABAB@BA@ADAB@BABADCDAB@DABA@AB@BAAAF@FCAGCICIAIHELGNGLCDAHADCHCPCNCB@FAFARCPCJAJALANDJFHFFBFFLFJDHDHDPBL@LCNAVDJ@F@J@HAXBRANAPAFBNBL@LKDCHCLELAFDFJBJLHNFPHHPJDXKRKH@FBAN@NHHPBLBH@PHH@J@RALAH@THHPJLFLBNLXHDPHPLJHFHBD@HAP@F@LFLBFDBVBRFFAHIBCBCDGBABCLCPFNFH@RDLDRDFBNEHAB@FAHCJGRELAFAPAJBJBJBHBNBJARADAJAFCHAFAFEROFK@CB@FKFGHGHCHAHCHAFAH@HANAB@F@J@JAB@D@LCJAJBN@FBJ@D@B@RBF@LBN@J@D@LCDE@ECMCG@K@IJKNKJEDCNKPINIHGDGDMBEJGNIJCHEBIAEAK@C@IAOAIAGCMAOCMIKMGMMACCIFGBK@KFOBMBSFMBEDE@YBMFMFMBEBCBI@EYMKMEICIIMEOS@WDUFSEEMAMKMOGIEEEKGKIIGMIQIGGIIOOMKSAS@GBMEIQEOAKAIDQDSBMDSBIBM@E@M@W@KJIDEPKBEBEFILKNIRGVEPALGRKLGDUGOMEMIGKAQ@QDIDI@K@ISCWD]JMIGMGMIQEOCKAKCMGGQGC@_@CDIHSJQBMGCIAKDSBK@Q@K@ICICEOGUEOAQ@MAI@IBUBKDQDQAUKCIAECI@CACAOCKBQHKEQCGACMKMIIEEACACAGAMCEKCEAM@M@UEQEGGBO@QCG@O@K@GAEAUIQEKCY@G@KBGBQFIFSJI@E@GAEAGAKEGAAACAGAQIKGYGECCAWEA@MEEAWEaOMCMGQGGG@AEGACCKAACCMGQCQC[KSIKECAcKCEGCO@M@KBIAK@CAEAC@EBODIACCACCDCFEBEBIBGBKBI@I@IAICI@IAGAEACCCAC@ACDCFS@ECCQEEESDKCCCEAEAECGAEACCACAGACAEEACAEACC@C@CCCECCACCCEEC@CGCCAEACAEBGBAACAI@GDADCF@F@D@FADCB"],"encodeOffsets":[[115684,39279]]}}],"UTF8Encoding":true});}));