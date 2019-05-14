(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('邵阳轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"邵阳"},"geometry":{"type":"MultiPolygon","coordinates":[["@@DBDBB@DDB@D@B@FAB@F@D@D@DAB@DC@ABC@CAG@CAABABABAHCRGHEBAB@DBB@@BBD@B@BB@B@B@BB@B@L@BB@BABABB@B@B@D@BB@D@DAB@BBB@D@FCB@B@@BBDBDFHBBBD@BBDBBHDD@BDD@HFDBBBDBD@D@FERMBAFEB@BCFIJCFALEHCB@L@DADABAJM@A@AA@EHA@A@@A@AFGB@B@BABAB@@B@B@BB@@BB@FC@ADBB@D@DBBD@BDBFBBDBDBHAB@DEB@BBBBBDAD@B@BBD@FAB@BBBDBBBB@BFDDDLDBBHLBFBDB@HPBBDBDDNLHJHFB@BBLFJBFBDAB@BAHCHEBIBEDCFEH@PDDH@DFHBBHDHDFBFBJDJBRDDBBBBBB@BAD@B@BB@BCBBBB@B@@CBAB@DBB@BBB@HBFBDBBDBBBBB@BBBFBB@BDLBBDBBBB@FBB@D@DEB@B@BI@AAG@AFIDEBAJ@D@RABE@CBIAEDGBA@BB@BBBA@A@AACAC@A@ABA@AB@D@@ABA@CBAB@BABBBBB@D@BABA@A@CBADA@AACBC@AB@DBDFBDBBB@BB@BA@EDKH@B@BD@B@DAPGD@B@B@@B@D@BB@BBD@B@@A@AAAD@DBBB@BAHBBBABADK@A@AA@G@AA@ABAB@D@BBDBBA@ACGACGIC@E@AA@AAACCAABCBAD@B@DBFBB@@BAF@BBBB@DABA@C@CFABA@A@A@AAAAA@A@AD@B@BABADCFABA@CAC@AAAAAABCDA@C@A@CDA@A@AABCBA@CDCBC@CAEB@@AB@@A@A@ABAB@DAB@BABCBAB@BBJLFJBBDFDDDLB@DBB@B@DADCDEFEDABAB@@ABABE@ADABB@DAPBBBBB@B@@AB@BAJEFCFCDAHEFEDCF@F@FBDBF@FCDIBEHKFIDEVANDN@RANBB@FACK@GBKBCBI@CBABAH@FDDFDDJAFE@I@A@ABIDIFEFCHCBAHAD@BAHBBDDHDFDHDBD@BBFBD@B@D@FC@AFGFELCBAJGB@DC@AHGJKFCFE@ALGDAHGJIFCBG@GEGCCAC@EDEJGBAFAJENGJEHEDANEHAD@FCDCB@LCB@HCLMRKB@JGEICG@CDGBA@A@EDIHCLHF@ZAD@BEBCBEDEBABEFEHIB@JGDADAHBLDDAB@JCDEBABM@G@E@ABEBO@C@G@GBIBEBCBI@IAE@CBOBA@ABCFEFCAAB@@AB@B@B@@ABAB@B@BADA@BB@@BB@@AB@@BB@@ABBBB@AB@@A@A@A@AAAA@@AAA@AAA@A@ABB@AB@@BB@BAAA@AA@AAA@A@A@@A@A@AB@BBBBBAB@B@@A@A@A@AA@AAABA@A@A@A@@BA@A@EAC@@AA@A@ABA@A@BBB@@BA@AB@BA@A@@BA@CAAA@A@A@AB@@AECAAAAAACAAAAA@A@AA@@AEGAEACAG@AAA@A@CACAC@A@A@A@C@ADCBA@A@A@AAAACCECE@A@EBC@ADCDCFCDE@CBGAACEACA@AC@E@EBGDEBCBA@A@A@C@CCCMCAC@ADCDCVELCD@FADCBCBG@G@ABCBAF@D@BA@A@AGCAAACBA@ABAFCDADA@A@CACBEDABA@C@E@CCEACACA@AAAACAEBGDA@E@EAEBCBCBCAEAGGAAAAAA@A@A@CAAAAA@A@A@AAA@A@A@A@A@@ALA@A@CDABCBC@C@C@E@G@CAACAAAAAC@CBC@C@CCCCCCCAEBC@CAAG@CACCCAACAI@AACE@AAAAAACAAA@C@A@A@ABC@CAEAIAC@E@BD@BDBBBDB@BDB@DAB@B@D@BABABC@IBC@AAC@AGAAAAGAAAA@C@CDCBCBABA@EACAA@CBA@IAEAA@AACG@ACGAE@AAACCAAA@EBC@CAA@CAACECCEACAACAC@ABA@EDAFA@BB@BBD@B@F@B@D@BAF@BBD@B@DAH@FBH@HAJAHABAFABBFDDBB@B@D@BA@CDCFA@CDMDAB@B@BA@CCA@AAAB@B@DBF@DADCBC@ABAB@DABA@CAGCAAC@CBEBG@CAEACAA@A@IHIFABCBAAC@A@CFABC@C@A@@B@BBFBDBFBDDF@BABILADABCBE@C@AA@A@A@ADE@C@CAAACC@ABABABC@I@ADABA@EBC@C@ABABADA@ABC@A@ABA@@BCNAD@DA@@BCBA@A@A@A@A@AAA@AAABA@A@C@A@EAA@@B@BBBFBBB@BA@A@A@AAAAE@C@A@AAA@AB@BA@ABAAA@A@A@A@AB@BEBA@@BABABA@A@@BA@A@AB@BA@@BA@BEAA@AA@AAAA@A@A@AAAAAA@AA@AAAAAAAA@@A@AAA@AA@CAA@A@A@AAAAAAA@A@A@A@@AAA@CAA@A@A@AA@AAA@A@AAA@AAA@@AAAAE@AA@ABCBA@C@C@A@A@A@AAA@A@AB@AABC@AAA@A@A@@AA@@A@ABA@AAACAAAA@@ABABC@ACC@AAGACC@CAC@AAAA@ACC@A@ABABCB@@ABABAACAADEHE@A@AEKAGACCEACAC@ABC@ACBG@A@AAAAA@ABCBCACCACCCCACAEAC@C@ABADEBABCBC@CCA@E@CBCBA@CBC@CBABAD@DABAAC@ACCAAAA@AAAE@EAEAE@AACAEIIGEAA@ADADCDC@ADABAB@NC@CBA@AD@CA@A@C@AAAA@BCBAAA@A@CBCDEDCBE@A@ACCCA@AAC@AAAA@CAAAAE@AAAA@ABC@ABC@C@AAAAAE@GAE@ECCCCC@CAA@C@AACC@CAC@C@C@ADAAEACACAAAACAAAA@ADIDEBAB@D@B@HAFADAHEDABA@E@E@EAGCGCAAK@A@EBE@IAEACACAA@C@EBA@CBCDCBC@GAC@A@@BAB@FABIBS@E@AACAAGAAA@A@BA@AAAA@@A@C@AA@C@AAB@@ABABC@ABAAC@BABC@AAA@A@AA@AB@AAA@@AC@@BBB@BABAACBBBA@A@A@@AA@AAAA@AA@AA@BA@@BABBBAB@BBBA@AFBBA@BB@D@BABA@C@C@KFGDE@C@C@ECC@MCEAA@C@EHABCDCBCAGAKACAAC@A@G@C@CGCIGIGIECCAEEMCGCC@A@A@CBC@CCCIKAA@CBADCBCDEBCBABC@A@CCC@C@CBEBCDAB@BABABAACAEAC@ABABE@ABCACAECQAA@E@AAACAC@CAAE@M@ADCDCBA@A@C@ECCEAEAE@ABA@ACCCAEAEACQGUGOE@CDADEBE@CDCFAD@FADABADCDCDO@C@C@CBA@C@CBG@CBAFCJAD@BA@AAC@AAA@ABADA@ABCACCCGCAAACAE@CAI@K@EBCBA@ABAAAAAAC@ABA@C@CAEACIGAABG@EACEAECCEAC@EBIDKD[FM@C@CBSAGACCACAACAC@KACCCEAE@E@ABCF@BEJC@C@A@GKCI@E@G@A@AC@CBKFE@AAEAG@E@GBA@CAAACCAAIGCAMGCAACAAAAA@A@CAA@@AAGAAC@A@CBEBC@CBI@EBAB@B@BFFBB@B@BABE@CBABCBABA@CACAA@ABEHCBIBCBADADBFBFDD@B@BCDCH@BBBHBFBDBBDBDAFABEBCDCBAFCJADADGJMPCB]X@B@H@TBH@FBDFNDJBBBJ@LBDBFBF@DEN@BADCBGB@BCAI@CCCACAC@A@C@AA@A@CBAFEBC@GAEAEAEEMAECAC@GBMDGBC@AAA@AAC@E@E@C@EAACEMCS@AAQ@GDG@ABO@OACCEAC@A@ADADC@E@M@C@ABCACAAEA@AAA@QAAGCAC@ADCDG@ABEAECKKUEEGCA@AAAE@CFE@C@AA@CCECOICA@CAC@EACCEEWAEAAACAA@C@C@CACBCHIDC@AACGEAA@GAICECCKIWFIDEFEFCD@D@F@DABEBABCFABC@A@A@EAAAG@KAGCKCCECC@CDCDGBKBEAAAAAC@E@K@EACEYACGCUCC@AA@ADADEDEBGDADC@EBC@ECCBA@AFEBA@EACCGCIEMCIAIBC@CAAC@C@GB@BBBDFBDABIJCFAH@BC@G@UAKAICYCWAMAC@KIGEIEIAC@K@I@IBGBOBCAO@Q@KAMGOEMAKBEDIHIHABIHIH@HLLJJJLFHAPGRGHIAGAEIIMGKMEE@GFEJCJIJCBKDQFODKBOIQEMCQDIFIFANCNCFEBI@MIIIKIGOGICIAGKEEAECECIAIAIACEAIAICI@IACCI@QBQAKAIEOCCGEGICCGOEI@AGGEI@AIIIIGGEEKEGAGDEFCLGHG@ECEEGGCEKGMGGEGAGEGIEIGKGG@AQOMGAAMGMMIIKIIKGI@M@GCECCAEEEEGECGEEIDIFE@GAEEECG@CEIEMCKGIAICGCMCKCECEGIIEOEE@AAACA@A@A@AB@B@BBBABAB@A@A@AACA@A@@BABA@@AAABA@AAAA@A@A@C@GBABEAEAOCKAMAA@A@C@C@CBIFEF@NBFBJBPFL@J@DCPCJCLINA@KHGDIDKFA@KHEFCLALCHGHGDK@IGGGIMGO@AAGACAGCKEIKECCAACBA@A@AAA@A@A@A@A@A@CBGBIHABIHSJA@EBE@GGGMGGEAEFAFCJGLIFGBMBIFADADAF@BDLJNDNBR@HBB@DBDDDBD@B@BDBB@@B@BA@A@@B@BBBDFDB@BBBBDBB@B@B@BBBDD@BBBBB@B@B@B@BDDBB@B@B@BDDB@B@@ABA@BBD@B@BA@AB@BABAD@DCFAFAD@F@H@HBDBHBDDF@BC@CBG@IBE@C@CCC@C@AAK@K@IBM@GCGECCC@EBEBEBABABAFILADCDCDADABC@EBK@AAICCCA@CAI@A@G@GDGFGJEJGBDHDHDJBJBJJLFHFFDBFHFFEHAFBD@DBDFHBDBB@DADABCBABBD@B@DAD@BCBA@ABCB@DABBDBBDDBBDFHJBFBBDBDBDBHDBBDD@DBF@PBLBNBLHJ@FBHCJEJCPBPMJWFABOFEBEFAL@LBPHRHRDJADA@QEKAI@MFGDGBCFBHFH@DADEFKBIBIFAD@B@FBJAJCHGBIAGAGEAAAAEGA@MIKCK@EDMHGDCBE@C@ECGCGAGD@BBF@FBHDJFLBDFDJDHBBFB@@BB@BA@D@DAD@B@BBBBD@BDBBB@B@B@BABA@ABAB@BHDBD@D@BFBJ@@B@BAHABCAE@CBCBCDA@A@CBCDABA@A@AAA@C@A@ABC@@B@D@D@DAF@FBBBD@D@DBF@DFDDBDD@BBBAB@BABCDCDCDCD@DABA@A@AACA@AOLKJEFOJILAB@B@B@HBJFJHBL@HEF@HDBB@DDH@HBFFPFDBBPDNFRFP@FBB@DBBD@D@JBHHFJFHDL@P@BALCFDB@DBDDBDBFDFHFJBHBJBLABAF@D@DA@ED@H@D@B@DABAFCHCBABC@A@A@ABADAD@DBD@B@@A@ACCEA@CDA@AB@H@D@B@BADAB@D@B@B@@DBB@BBDBBDDHHJHDDBBBBBDBDBHBD@FBBBBB@B@B@B@FAB@B@DBB@B@B@BADADAD@BBB@@BDDB@BBD@@BBF@D@DADCBCB@B@DAH@BCBA@@AAA@AC@A@@BIDA@CDABCBCBBF@D@BBDBFBBBBD@DB@B@DCBGHAB@BBBHCF@D@DBDBBB@F@D@BCH@BB@B@B@DABABBBBADAD@BEDAB@B@FBFBHDHBBADABCBADCFAB@H@FADCDCH@D@B@DBDBD@D@B@BABA@GBC@CBCHCDADAF@BBBBDDF@HBLBL@FBDHPFLDDBDFBDBJAH@D@HBFDHDHFHDDFDDBF@JAFCFILKJMFGJCHDLDHPHLFN@HAFBDFBD@DFNFRJNBBDDDBDBBBBBB@DBHBB@DAB@DDB@D@D@FAB@BDBB@DBBBDBDB@BD@D@L@FAFCHAF@HB@@HBHDHBFFFBBBBFDBDXLPFNDPDHFDLDNDJ@BBBCLCJEDCDGDELFLDFFLLHXHPHHFBBLHBBDBHJDFHFB@HBDBB@F@NBNDHDLDHBFDDBB@BABAB@B@B@HFDDBBBA@ABADCBABCB@DCH@DBL@D@DABABA@A@A@A@APCD@BBDBBDBB@D@D@DHLDDBD@BFF@B@BBD@FAFEPAH@FBHDFBDDBFBD@BBBBBFBBBDBBDBBBFDBBB@D@D@BADAHCDEDABAJCFAJEHCPGPEV@F@JDPJDFHHDPBP@H@NFPJJRLPHTHVHNHLHHJFHFFEHHFDDLHJFFBD@JDH@DE@A@CFEFEJIFIBCFGJCN@HBH@LDNJ@BDBB@BD@D@B@FCFAB@BABDFDF@BADCFAFAD@BDBNFB@BBBBHHBBBB@DBBB@HH@BDDBBBBBD@DBDDJJHHHFF@FBB@F@DDBDFDFBFDL@DDL@NBRFPHLNP@BHDHFLHHHBF@D@FCHEHEJ@L@BAD@H@J@DAJA@AFABGLGHKJML@BCDCFCB@BCBGHOFCBEBABC@AJ@BBB@B@B@BB@@B@BBB@BB@@BB@@B@BBB@BBB@BB@@BB@BBBBBBD@DDLH@B@BADBHBDB@BABAFAD@@BABCBADAB@DBFFBBBB@@DBBBDDD@BD@B@JNLFL@P@J@DBB@D@DBFBDBFHBH@BBBD@LAHBJ@D@B@ABAB@B@D@DBBBBDDDAD@@ABC@A@CDC@ACGAAEEAC@C@G@AB@B@DDDBH@BAB@NKLOHKDCTOLOBBBBABB@B@ABFB@ABA@AB@@CB@B@B@AA@ABA@CBADB@AB@B@@BDCJDDBFBHLLJBBJHFDLFBBD@FBDDBBHBHBFDBD@BBB@F@FCDADEDABADAB@B@D@FAB@DA@BBD@@BCB@BJ@BADAD@BAB@D@BBB@BB@BCBEBEBC@@BB@BD@FBJAD@D@BB@@DBDDDHDNDBFDCLCLAL@TDRDTDB@VABAD@NAN@XDTBBBNDF@D@H@HCBAB@JGDMDMCE@AEIFGD@H@LABBFDLJJFFAF@LAFCF@D@D@LBTCDCBADCBAJIDOBE@ICK@IDEDAHABAJBP@B@JBP@DCFGBE@EHAH@FBNFJ@JEB@B@BAD@BBBDBBB@BBFABABAD@BA@AA@CA@A@A@A@ABADAB@BBB@BBBB@B@BBBB@B@B@@AB@@BBBBBBA@AAACAAAAC@ABABA@ABCBA@CBABADAB@FBB@FFB@@A@C@CBCBABADADAF@B@BAB@BABCB@"],["@@BAA@@B"]],"encodeOffsets":[[[113867,28211]],[[114111,27503]]]}}],"UTF8Encoding":true});}));