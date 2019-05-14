(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('黄南藏族自治州轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"黄南藏族自治州"},"geometry":{"type":"Polygon","coordinates":["@@A@A@CBA@ABGBABAFAD@BBDBD@BBBAB@B@B@B@BBDDBBB@B@B@B@BABABC@CB@BAAC@A@CAA@A@KHGDCBA@IBC@MAG@CACACBEDEDA@a@C@G@A@A@EBCBA@@B@B@BABAFA@CBA@CD@BA@A@@DA@AB@B@BA@@BA@C@ABABB@@B@DAB@B@B@BA@A@A@@BBBBBB@B@B@BA@BDA@BBBDDB@HB@BCFEHADCJAF@H@DDFDDDBBFBB@DBBBBDD@B@D@BD@BB@BBB@BBB@D@BBDBB@BDB@DB@B@BBFDDDBDB@FHHHBBBB@B@DBBBBB@BDBDBDHFBDBDBBBB@BBBDDBBBBBAB@D@@AB@B@DAB@B@B@B@B@@D@BBBB@DB@B@B@DA@ABCBAB@DA@@BA@I@A@@BABABC@CBCBA@A@EDA@C@A@A@ADABABCB@BA@A@EBCA@BA@CDA@CDC@@BAB@BA@A@A@ABABABCBAB@BFF@BBDA@@DB@BD@D@D@B@DABA@@BBB@BCF@BBB@BCDAD@B@BBBB@@B@BABABCDABA@@BBD@B@BABA@ADCD@BCBADADA@C@A@@BABABABA@C@@BA@AD@D@B@B@BA@CBMDA@AB@BBBD@HAJ@FBBDCFABGDCBABAFBB@FBFBHADGFCF@D@FBH@BDJDFDFFDBDADEFADCHCFADEDAF@DDHHHBDEHEHEHCF@F@JAHBHBD@FDHBFBF@D@B@B@JDF@FDH@BBBF@TDHDBBFBBBD@PBHADAPDJADBP@J@B@D@FCD@B@BDDDDDD@DA@CAC@A@CBODCDCD@F@HBDDBH@H@J@DDDFBDBDADCBIAEECCC@CBCBADAD@HHLFDBHCLAHIDG@ABYJSRGJ@H@RBD@X@LAHFLHH@BAPKLGFARATCDAAAEKDIRIVEUU@C@CP@PAB@LEHCB@NEDCFAJ@L@PBDCGUIGEEPSDCDM\\DF@B@DABCDQBGDEDIREJCJGD@JABARA@ABAB@Z[@ADY@AFEHIB@BAB@N@JANED@\\CJABC@CEC[GQCI@CCA@@ACAGEA@CACA@ABCBEFGBCDAB@BABADG@AB@DBBBD@B@@AJFD@D@BAD@DAD@D@PJFFFFBBB@BAJIHCNKDG@AHOBOAKAC@MCGGCCAG@[BOACCAABE@E@CAABMJK^IBGBA]OEMAA@ABCBCDCBA@ABAJMTQVKRQDCJIFONKFG@EGCWCECCEDEB@TGdAR@NAFA@CAAEAIECCMGAGDILKBKDCDAN@PFB@JHNLLHLBNAFABCFGBEBADEBGBIBEBIAEAIAGAIDEBEDEFEHEJEFCHCHIHAFEDCHCJEFADAH@L@HBJ@J@H@L@HAFAJCJCH@FAPELCJCHC@EFQBIBCLILI\\YPKXKLCDE@A@ACIBIDAJDHDJBDADEBCCGGY@C@CAE@E@IDEBE@EBCAEAC[QGECGDIPMPCDCFCRIHADAJEJ@BB@E@GEE@CA@CCAAA@@AA@A@AAAAA@A@@A@AA@A@@AA@@AA@@AA@A@A@AAAAA@@AA@@AA@A@@A@AAAAAA@AAA@AAA@A@@BAA@BA@A@A@A@A@A@A@AA@CBICAC@GBGDGDGDUFQDQFGBCDODIBM@KAG@EBIHABA@A@C@CACACAAAAA@AAAAAAACBCAA@CAA@CC@A@C@CBC@C@C@AAAAAAAC@AC@A@A@ABA@A@CAAAACA@ACC@C@EAEBCBABCBABC@A@CAC@C@A@A@ABABABAB@FAF@FAFAD@B@BABABA@C@C@E@A@ABADABAHCDCB@@A@EAGG[AOAAC@IDEBC@ABC@CAE@C@AACAA@AACAACAA@CA@@A@A@ABADAB@DABADABABA@A@A@ABAB@DCFAHABADAFCDCFAB@D@D@FAD@B@DCDAD@DBJHB@B@D@FEHCDCFCPKRGDABA@A@AACAKBEBC@EACEEAC@EDEFCF@FABABC@EBC@MJIHG@ADADABC@ABABADA@AB@DABA@CBC@EBCBC@C@C@A@ACACACAAAACAAAAAACAGCCCC@CAEAA@CAA@A@A@A@ABABA@ABC@AAEAA@CACBCBABCBC@CAAAA@AACAAAAC@CAE@G@C@EAA@C@AEECACAECCCE@AAA@AAA@A@C@C@ABC@AAAAAA@CBCBC@A@A@AACAA@AAA@A@AAC@A@AA@CACAA@@AAIAGACBA@C@A@AAAACAAAC@C@A@A@C@A@E@CAA@AAAAAAAAAAAACAAAACAAACCA@CACAA@CAA@A@A@ECCAA@CBA@A@A@CAA@AAAACAA@AAEBCBA@A@C@C@CDCBA@@BABC@C@C@CBABABA@ABA@A@A@C@AA@A@CAA@CA@CCAA@C@A@CBA@A@A@C@A@CCAAAEBEBA@A@EACAEAEAC@C@C@A@E@A@C@A@C@A@C@AAAAAECCCCEAECAAAA@A@C@CACAAE@CBCBA@A@A@A@A@AAAAAACAAAA@CDADABABA@@BA@AACACACCAA@C@C@A@A@AAAA@EAA@A@A@A@@AA@A@AAAAAACA@A@A@A@C@AA@EAC@C@C@AAA@CAAA@C@AACAAAA@AAAAAAAAA@CAA@AAAACCACCCAAAA@AACABADG@EAGGEICIAAGM_KKAGBEFEHKNILMBA@CQDE@GAGBIBKBKFIDMDK@GAE@EBEBA@A@@AA@A@AAA@A@A@A@ABABA@@BA@G@EEGCCAA@CBC@CCGCGEEAA@CBCBC@CAC@CBE@GAE@CCCCCACCAEA@AAC@EAE@AAACBC@C@EBEBEDA@C@CBAFCHCB@DCBEAEACECEACC@A@ABABABCBABA@C@A@EAE@E@I@GBC@CAAAAA@E@AAAA@EAE@EAE@CAEBC@EBC@EBEBG@CBC@C@CAECC@C@C@I@A@EAAA@@A@A@A@A@A@A@AB@@A@A@A@AB@@AAA@A@A@A@A@AAA@A@AAA@AA@@A@A@AB@@A@ABABA@AAA@A@A@A@AB@@AB@@AB@@AB@@AB@@AAA@A@A@ABA@A@AB@@A@AB@BA@AB@@AB@BAB@@AB@@A@A@A@A@A@AA@@AA@@A@AA@@AAA@AA@AA@AA@@AA@@A@AA@AAA@@AA@@A@A@A@A@A@C@A@A@C@CBC@CBE@E@IAEBCBCBE@A@CAACC@CBC@EDCDE@EBC@CBCBCBCD@@A@CBCBCBC@ABC@CFCDAF@DADAFBF@F@BABABC@E@CBCBCBCBEBEBAFAHAHADC@CACAC@CBCFAFAF@FAFAF@FCHCFAB@F@T@B@D@HANAF@H@D@@ABAB@DBB@BBDBB@BAB@B@DBDBD@D@D@BAD@DAB@D@BBD@B@BADAB@B@D@DBB@D@B@D@D@D@B@D@@ABABA@A@A@A@AD@BAB@B@BADABABABCBABAD@F@B@D@BBBBD@B@B@FEFGBGFCHCDEDCB@DBB@D@RDBBB@BQBCFEFGHODEDABC@CAAAAC@@A@ABCBCBABA@A@AAA@AA@AA@A@ABA@AB@BABAB@BAAA@A@AB@B@@A@AB@B@@AB@@A@ABABAD@B@@A@AB@B@@AB@@AB@B@B@B@BABA@AA@@AB@B@B@@ABA@AB@BA@AA@@ABA@AA@@ABABA@AB@B@@A@AB@@ABA@AB@B@@AB@B@@AA@BAA@@A@ABA@AA@@AA@BA@CB@B@@ABA@A@AB@B@AABABAB@AAC@@AD@B@B@BAAA@AB@D@@AAA@ABA@BB@B@BA@ABA@AB@BA@AB@AA@A@AD@BAB@D@B@BABBA@@BDA@AB@BBBABCB@@A@AB@@AB@@BB@@A@AB@B@B@@AB@BAAABAB@B@BAB@@A@ABA@A@AB@B@@AA@@AB@BA@A@AB@@AB@@AB@@ABB@AB@@A@A@AB@B@@A@AA@A@A@@A@AA@A@@AA@AA@AA@A@A@@AC@@AA@@AA@AAA@@AA@ABAAAAA@A@@AA@A@A@@AA@@AA@ABA@A@@AA@A@A@A@@AABA@A@C@@AABAAAD@AA@@B@BA@A@ABA@@BA@@BA@A@CBAAA@@BA@@BA@A@AAA@@BA@A@C@@BABA@A@A@@B@B@BA@@BA@@BA@@BA@CCA@A@@CAA@A@CAA@ACE@AAGAA@AAAAAAA@ACAA@CAAAAA@CAA@A@E@A@ABA@CAC@C@A@EAA@AAAAAAAAAAAACA@GEIECAAC@C@C@C@CBCBA@AAC@CAC@ACAC@EBA@C@E@CBC@CBABABABE@CBCBCBEBEBEDC@ABC@C@C@EBCBC@GBCDCDC@K@IBG@CBA@AA@AB@@A@AA@@A@AA@A@@AAAA@@A@AAA@AB@@A@AA@A@AABA@A@A@A@AACBAFC@ABC@A@AAC@AACAA@AAAAAAC@A@A@ABABABABABABC@A@C@A@A@C@A@C@A@AAA@AAAAAAAA@C@A@CBA@C@A@ABA@E@A@EBC@C@A@C@A@CAA@AAAAA@AAACA@G@GBCAA@@A@AAAAA@AB@AAB@FCJGBAFCDEBC@CAGFK@CC@KAI@CAEG@CBEAE@ACGAAAKC@A@CEAAA@E@EBC@CBAAA@ABA@ABA@@BA@ABA@A@A@ABA@A@A@A@A@A@A@A@A@A@A@A@C@A@A@@AA@@AA@AAA@AAAA@C@AFCD@DABA@CACAEAC@EACAC@E@CAEACAC@GAG@G@EACACC@EBOFMDA@IFIBGDC@C@CBADEDEDGBEBEDCBCBEACACCACE@EBC@E@EBABADAFADADABAD@D@D@B@BCBGBODE@C@C@@AA@BCBCDEBCDCAEACAC@AAAACIGICC@CBCBADABE@IAG@AAA@ABA@A@@BA@A@AAA@A@A@A@A@@AA@A@AAA@AAA@@AA@@BA@@BA@@BABABABABA@A@A@A@A@A@A@AAAAC@@AC@AA@AA@@AAAA@C@A@A@A@A@A@CAA@A@AAA@A@@A@A@A@A@A@A@AA@@AAA@A@A@A@AA@@AA@@A@AAA@A@A@AAA@A@A@ACA@AA@@AA@@A@AA@@AA@@A@AA@A@@AAA@A@AA@@AA@C@C@AAAAAAAA@AA@@AA@A@GFABAD@FBD@DBBAD@DCBABAACACEACBABI@A@AAACAA@A@C@CBABC@ABAD@B@DBFBFBDBH@DAF@BEFEFGJCBA@C@C@AAAAAC@EAAAAAAGAGBAAA@A@C@GBA@CBA@EDIDOJILAFAFCDADCFBBBBHDDDBF@BABCBCHAFCDEBA@EBEDE@A@CBAB@D@F@DADAFEBCBC@AAG@EBI@I@A@ABABEBEDC@GFCB@DA@AD@D@DA@CBABCACACCCAEAIAC@E@ABCD@D@DBFAB@BABCBGACBA@AB@BAD@BABCBC@I@EAGCAACAAAA@@AA@ACECCCA@C@C@ABCBA@A@CAAAACCAEAGBEBCDAD@FFHBF@BADADEDGBGBIBMBG@ABM@QBGDC@ADCBC@I@G@G@G@E@ABABADABABEBABA@GBK@G@EBE@CBCDCDCDCBCBEBC@A@ABC@C@A@ABC@A@A@@ACAA@A@C@C@EBCBGAA@CAEAGAEAA@EBABABBB@BDBDAD@B@@BBB@B@BADCBC@C@A@A@@B@B@B@BFBDF@B@BABABABC@A@CAECC@A@C@EBCBC@E@GAABA@A@ADABAD@BA@A@C@A@KAABA@ADC@CBEBCBA@CDCDCD@B@B@BB@BBBBB@@BAB@BCBEBIBA@ABA@ABC@ABA@A@AAAACCAAA@A@A@C@CBC@CBABABAB@B@BBBBB@B@BA@@B@BBB@B@B@B@BBBBBBBBB@B@BAB@B@BBB@BBB@BAB@BCBABABCBC@CBC@C@C@A@A@A@A@A@C@C@G@A@ABEBGBCBAB@BA@A@AA@AAAAAA@@AAA@AAAAA@AAAAAAAA@AAA@@AA@AAA@AAA@C@A@AAA@A@EDGFEFGFCBEBE@E@CAAC@CCCABA@ABCBG@CAE@CBGDCACAGAGAI@CBABABCBCAECICGAA@A@CBCBCDEBC@A@IAE@CAGCEC@DAB@F@F@FADABCBGDG@CAACACABEBEDA@EDEDABAFADADEBCBGDCDABAFEFGFCBC@EBCDCBEFC@CAGEGACBGBIDGDEDGHED@DFNHPFR@PDLNNBFFPFP@L@N@PBLBLCPAL@BADABCD@BAB@BBB@B@BAF@DBD@BBD@D@BADAHADAD@H@DBDAB@DBBBD@BC@ABAB@BABA@EBCB@BCAC@AAAACCACAACAAAA@A@CBEDCDABA@grDbMZENDjcXAhELH@HAFAD@DAHCH@H@H@H@JBF@DBFBFBFBH@D@F@F@H@D@JAD@FAHADAFEHEFCFGDCDADAHCFADAF@F@FAFBDBJDFBFBFFFBDBDDDBFDDDFHDBDFBFDFDFFFBDDHBF@H@D@H@D@DBB@F@DBDBF@FBFBDHDDBH@D@FCDCFCJBHBFH@D@DBD@DBHBF@D@D@DADAFAHCFADADADCFADAFEFEFAHAD@FAB@D@DBD@DDBDFBH@DBDT@dDNDB@DAD@DFBD@DBD@BDDBDBB@BBBBBDDHFDDDDDH@BCJAFADIFCJCF@BBD@B@B@DA@@BA@@B@B@DBFBD@D@B@BABCBABAHA@ABG@CBKHE@A@AACACCCCC@CD@BGFEDCBG@EBEAGAE@KAG@E@EBMCEBKDAB@BCFEHCDABC@AD@DFFBDBBABADIBOBCAA@E@G@EAC@G@GBEBEBEBEDGBGDEDGBCDEBEBCBGD@BIDCDEDEDADADADCDCFADADAFCBAFCDABCDGFADADCDCBEDCBEDEDIDCBEBCBEBCBEBE@IDC@EBGBCDG@EBC@E@C@CBIDI@GBE@E@CBG@E@GAE@E@CBE@EBGBGDCBCBADAFEFEBEDCBEBEBGBGBGFEBEDEBEBIFCBEDGBEBEBEDCBADCBCF@FA@@DEFCDABC@ADCHCDA@C@IBA@C@ADGDABA@@D@B@D@B@B@B@BAB@B@D@B@B@B@DBB@BBDBBBD@B@DBDA@BBAB@B@BCD@D@BABABBBFDDBDDBBDHBBD@BBBBDD@B@BCDABAB@BADAB@B@BCDCBABBBDAHAFAD@B@DBDBJDD@HBBBFJPPFDLHDDB@JDNDF@HBJDHBDDF@DDBBHDFDFDDDFDDDDDDDFDFDFDFBBBNPdVJHHD^XFDRTbfbfDBABABCDABAFG@CBC@CDA@I@I@GAABADELIBEBGDIBGDIBCBIFkK]AAB@D@H@N@BABE@WDGBQBEB[DM@I@SBC@W@CNEPOJEB[NABAB@BA@@BIXABCFADAHCF@FAD@D@D@DDDBFBD@DBDJFD@H@D@H@FBFAF@F@DAF@HCD@D@DAFBJAD@FAH@H@HBHBFBFAD@D@F@B@FAJEF@F@DAF@FAF@D@D@B@F@H@F@DBDBDDFFBDBDBBDF@BBBDBHDD@FAD@DAD@HAFAFAHAD@FAF@F@F@DAH@FAJCD@BAFAF@FAHAD@JAF@F@FAH@F@FBD@F@FCHCDAFEBCDADAFCHCHAD@HBFBFBH@HBFBD@H@JBFBH@HBJ@F@H@J@FBH@HBD@H@H@F@F@B@D@F@H@F@J@F@D@F@F@JAH@DADAF@HAF@H@J@DBH@HBF@F@F@DADAFADADCDCDCFCF@DDFFHDD@HAFAHCDADCJEFAFAB@HAJAB@B@HAF@HAH@H@HCFEDEBCBABCBCFADCJAF@DAF@B@D@HBH@FBH@H@@BH@H@F@FAH@FAH@FAFAFADAFCFAHCB@DAJEJAHCLCJCD@BAHCJAHCFAFAFCFAFAJAF@FAB@F@F@H@D@BAF@FBHBFBF@DBH@H@FAJAFAFAJAFBLDFDHDFFLFLDJBJBBBD@@BBBBH@D@BCBE@CDAB@DADAFCBCDCBCDAD@DAD@FADAHEB@BC@@F@B@F@BCBGDCDCBADAFC@CBEFADABA@@BAB@B@BBDBD@BCBEDE@@BE@GBAD@BA@ABE@EBC@@BCD@B@D@D@BA@CBCBCFADA@EBA@BDFH@BABCB@BCBABFHB@@BAD@BD@BD@BABAB@BABA@@D@B@BBB@B@B@B@BCB@B@BA@ABA@@B@B@BAB@BB@B@@B@B@BDDBBRDB@B@DCBABA@ABCBEDAHEFCD@B@BAD@D@BADBDCF@FBD@FC@AB@FADCDCDCDAFAFEHAFBFBHFDBBFBHDDDBHDFBFALAFADCDCDEDCFCDCDADCDCDAD@HAJ@FBFDFDDFDFDD@F@FBB@D@BFBBBJ@FBBBBD@BBFBBFBF@D@D@DBBBD@DAHCFCFCBADCJHDBDBD@D@D@FBDBD@DADABAB@DB@DBDBDDBHDHBD@@BDDB@D@D@BBHDBBDDB@FBPJBBHD@DDB@BA@CBC@CBCBCBAB@BDDBFDDFFBBFFFTBF@B@BBBBFDF@D@FCF@BBABAFAD@F@DBBDDDB@@CJ@@B@DAF@BABAB@BADAD@HAF@BDBHBBBFDDDBDBFHDFHDD@BADBDDDDDBBD@F@@B@BBDBBDFBDBBFBDBFDHBFBBFD@BBHDB@BDDBDBFFDLDLBLBDA@@BB@@BDBB@BBBBBBAB@B@D@B@F@DBBBBDH@B@D@BBDABBDAB@BA@@B@B@B","@@@B@DAB@BA@A@@BBD@B@BA@GDCB@B@B@D@BADAB@B@BFTBB@D@D@BBDBFDBB@@D@BABGFCD@BA@EDCBUHC@A@CAA@CBIBC@CBC@A@@BA@EMACAAAGAEAACCCAGEACA@GCAAOIaY@AE@EBA@aHSHA@EBCBA@C@GCA@KAK@]EIAG@G@ICG@SCIAQEMBC@A@@BA@AAAAACB@@AB@@ADBBAB@@AA@A@@AB@B@BAB@@A@CA@BADCHKFEDEDE@AB@AA@ABCAI@A@KBE@EBC@ADCBIBE@CDG@C@CCCACCECKCGAKAABCDALEHCB@B@DAB@B@DABBB@B@D@HBB@D@DABBDAF@F@D@B@FBB@DAD@B@@BBB@BDBDDBBB@BBBBBBDBFBFDB@@BB@@B@DA@AB@D@B@BBB@BABADADCB@B@BB@@DCJAFAFAFAH@BEHMNCFBBB@bTTLDAD@BBB@D@D@DBD@FAB@DBB@B@BA@A@A@CDIFOBEDGDG@CBEBA@CBAB@B@B@DCD@B@DDBBD@J@N@H@HBB@DAB@B@D@DABAB@FCBB@B@BDB@BDF@B@D@B@BBBB@@BB@@BBDBBD@@BDBFFD@D@BBB@@BBB@J@BD@BB@BB@DBH@HBB@BBFHDBBDBD@D"],"encodeOffsets":[[104216,36575],[103990,36111]]}}],"UTF8Encoding":true});}));