(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('清远轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"清远"},"geometry":{"type":"Polygon","coordinates":["@@ACAGAE@E@G@A@A@A@AA@CEE@EBAAAAAAAC@AAC@CAE@AAECCAEACAA@A@A@A@A@AAAACAAAA@A@AAA@C@A@AAAAAA@A@A@A@C@AAA@A@AA@AA@@C@EACAAA@AAA@A@A@A@A@A@@C@ABC@C@A@A@A@AAAA@CAA@CBG@EAA@C@A@CBA@ABC@CBC@A@CAA@C@C@C@A@AAA@@A@A@AB@DAB@DAD@BAB@B@@A@AA@@AAA@AA@@AAEAC@EAE@AAAACAAA@AAAAA@AACAAAAA@A@A@AA@@BA@AFADADCAEACAAAAA@AAAA@CAA@A@C@A@C@AAA@AAA@CCAACAKJCAHOAA@ADE@A@C@CACA@ABCFE@CBEDCBE@AA@E@IE@A@@AC@AAA@CBC@A@CACCCACACCCA@ABEAGAEAGBABABABADADABCBAAA@AA@AAACHEDC@ECEGBACGGA@AACAA@AIEACCFGBA@AAACASAKAGA@D@J@BCEBKCDGGEBA@EA@A@A@CCAECID@BEBBDKBE@KDGBCAEEGCEJAAA@AABAFGCEMGCBGACCC@CBG@GGCBGBECGGAGG@@AA@ABA@@AA@A@A@@AA@A@AAAA@AAA@AACGGEAEAA@A@KHG@AC@AQAABCDOG@ADAAA@AI@@AFEAAABEFGAAAE@E@GBABCBAD@ACACACACBA@GBA@A@@ACAC@C@E@CACC@ABE@AB@AAACEEECE@EBCFAB@BABEBCBABEFGDEBC@E@ABAFDBDBBB@DABABA@AEAAABCBBDBBBDBDAD@B@DCBABC@@AC@ABCBCDC@A@AACACCABA@A@ABCD@BADADCDADADADAD@B@D@DAB@BKF@HJTf^@DBBBDBB@B@DBB@B@BA@@BA@@BCB@BABADABKF@BEDEC@ABA@A@AKIDC@CGFCBGHIFEDCDAAABAHA@AAIB@DCBCAA@AAA@ECGCEAEBC@GCEAGDE@C@AGAGBGBGFE@EGBEBEBGEG@MBGACFABABCDBB@B@B@D@D@BAD@DADAB@BAB@B@B@BDBFAD@AD@B@BAB@F@HDF@DABA@A@A@A@A@EAE@M@EDABC@CDAFBDBBADCDC@C@C@C@C@C@A@C@A@@B@BABEDCD@F@DBHAHBHBDBBDDFBFBFBJFB@B@DBB@BBDBBBDDB@BD@BBB@BDJ@D@BABCD@H@H@B@B@BADA@ABA@@BEBCBCBCBA@A@A@A@AAAECAC@CDC@ABC@A@C@CCACCEE@ADADBDBDBDBHB@BD@DABEAA@AACAA@AAAAAACCAAC@AB@BAD@DABC@A@A@@BABA@ADEBADDDDDDFFJBB@DBD@BCBAAG@AAICAB@BAD@DD@DDFFDF@FDDHBDDDFBFBBFFBDBDBD@HBDFBBD@DA@GBABEDG@CAC@CAOCICE@E@ADAD@FCFEDAD@H@BBDHHBF@JBH@DCDCB@DBDFNBDCBK@QAEBEHGDABEBG@AAICE@G@EB@FJJBBBBB@DBB@BBB@BBBBB@FFBDADADA@AB@D@B@B@B@B@D@BABABBBBDBBBBB@@BDBDBBB@B@DADA@ABC@ADAB@BBBB@D@@B@DBBBB@B@B@BB@DB@B@DBBBBD@BBBB@B@FBBFB@BB@@DGB@BABCB@B@BDBDBBBBBBBBB@B@DBDBDAB@B@BEFCBADEDADA@@DBFBD@FAHADABA@C@A@ABA@CBADCDEBCFCBC@G@CAE@CGA@CAAACAAAA@C@A@A@A@CBA@ABABC@A@C@A@C@A@E@EDCDCBEDCBEBEBGAKDEBGBABADCDCDCBABCBA@CBA@CCE@C@ABADAD@BBF@DABC@ABA@A@A@A@A@A@AAA@ACA@@AAACAC@C@E@A@EAA@A@A@A@CBA@CBEBEBC@C@CBAB@BAD@BA@@B@D@B@B@B@BBDA@AFED@B@DB@@F@BA@A@CBAB@D@DBB@BB@B@FDDBBB@BB@BBBB@BBBA@@BAB@BA@AB@B@BAB@B@B@D@BAB@B@BAB@BA@@BAB@BA@@BAD@BAD@D@D@F@B@BA@A@KJAFAB@FBBBHBH@FBB@DADAB@DCBEAGBADAD@BBBBDDBBD@BADGTCLABCBG@C@ABA@EDCDCBC@C@CAECEECAC@AB@B@FBBDD@B@BC@EAGCC@CBABA@E@C@C@EDADADAJ@LBDDDDBDF@D@DADABCDADADBBB@D@DB@DADADADAD@BBDBBDBD@BDBB@JBL@BBDBBBBBB@BFBBD@D@FAD@D@BB@B@DCB@B@@BBD@DBDBFBHBHBL@N@DAFCHAPCVCPAL@BAFADCBCBA@A@E@E@KCMAABAB@D@FADAFCFEFAFCDC@CAABCBEDEFEFCF@F@D@B@DA@CBE@EBGDCFAFAHAD@DADCDA@C@EAGBEBABA@@BA@SBKDOREJA@A@ADADADCDCDABCDC@A@GAGAC@CBEFEHEBGDA@A@CAEKAIBKJQFeB[AEEAGCKEMAE@GDQDAC@C@G@GBEBCBKBIBG@ECCCCCGAG@IBG@I@G@CAC@AAGEICGCCAAC@ABCBCDCBCBC@CAE@CAA@E@C@C@A@AAA@@E@EBGBGAC@CCEECCCECCGCEA@@CAACCECE@E@CAC@AACCEAGAC@C@C@C@AA@CBCACACAACAEAG@CBGBEDA@@DAD@FAD@BCDGDGDC@CBEBCDCFADAFAF@FADCDCBEBEAE@A@A@ABAB@FCD@BEFCDCBCDADCFADAD@DABCDC@CBE@CBCBEBC@A@CACAAACGACAEACCAE@CAAA@CAGAE@E@G@C@EACCACCEAAC@A@IBGDEBCBC@CCGECICIAMAMBG@GBC@A@EAAAAC@AA@A@ABCBAB@D@D@DADAFCBABABABEFCDCFAFAF@DADCFCBCBCBCBCDCDEDCDEBGBC@A@EACAC@C@@DAFAB@DABBDF@HBBBDBDFDF@DBD@BBB@BDDBBB@DBFAH@DEDEBCDAF@B@FBD@BBDDDFBF@H@HAF@DBDBBB@B@D@B@DADBFBDDFF@DBBFDHFF@FBD@D@DBDDBB@DAF@DBF@BFFDDDBHDHF@DBD@BBDBFDDDDFBDDDDBDAD@D@D@DBB@DBF@B@D@DABBH@BBDAH@HAHAHAD@DA@C@A@ABGBEBEFABABAD@F@B@D@DBD@DBDABABAD@DA@ADCFCFABABAD@DABABEBABADBF@BA@ADCBEDGDGBG@EBC@ABAB@B@B@BADADADEBCDC@ABCBAB@BADBBBDDB@D@BAB@DAB@DBBBDBFDFDDBDDBDBD@D@BBBDFDB@B@BBABADABADAD@FBF@HBF@DAB@DABBDBF@B@BCJEJCHEFGBA@A@AA@AA@@BADABCBAB@BAB@BA@C@A@A@@BAB@B@BBB@B@B@DABA@@BAB@B@B@BABA@AAAB@B@B@B@BABA@A@A@A@ABC@A@ABABAB@BA@CBA@A@@BA@AB@BABAB@B@B@B@B@B@BABA@AA@A@A@A@AA@AB@BA@A@A@@AA@A@A@A@ABABAB@BBB@N@JAFCDENCFEJ@BBDFHFLF@L@FBFDHDB@@BADADCDADADAD@B@D@DBBABA@@BC@G@AB@BBDFBBD@DADABCD@BAHBBHFJFHHBBDHBFBNHTHFPFP@H@FDHDPDLAHCJDFDHHFDFDFDBB@DDHBF@FBFAH@J@B@DBDDBDBDBBDDDFFFDBBDBBBBBDBD@BBADADBFBDJDFBHBLBH@FBFDDDDDFFFFBDABAD@DBDBBFBF@HDHBDBDBDBDDDBDDBDBBB@B@F@F@FBFBDDBAFCFEFCBAFBBDDFDBDBBB@BB@@DCBBBB@B@DBBFBDAD@BBBB@DDBBAB@BCBABCBABBDBD@BBB@B@BAFAF@B@BBBBB@DBFAB@DBDBF@FBFBDBF@B@BBBBB@FBD@D@BBDAD@B@BABA@E@EBA@A@EBCDCBA@E@CACBADABCBCBC@A@ADADADADEDGDCBA@@DCDAF@DADCBEB@DBBBDBF@DAF@F@D@H@H@BBBHBFDFBDBBD@BB@@BBDDDBDDDDDDFDFBBBDBBBDFH@BB@@B@BA@ABGJ@BA@@B@B@B@B@BBBBBBBBB@BB@@B@B@B@BAB@D@B@B@B@BA@@BHPB@@BB@@BB@B@BBB@BB@BBB@BBB@B@DBB@D@F@B@B@B@DBBDHBDBHBDBDBBBDDD@BBB@DAB@D@D@DBF@D@F@B@BABAB@BA@@B@BB@@BBBDB@BBBBBBBBB@BBBBB@B@BBBAB@BAB@B@BBB@BBB@BBBBB@D@B@B@B@DBBBBBB@BBDBDBB@B@B@BADADABABAB@BA@@B@BBBB@BBB@DBB@DBD@B@B@DAL@J@D@R@TBN@HAFABCHK@CB@BAB@BA@A@A@A@A@C@C@C@C@A@AB@LDPF@AB@B@BAB@B@BBB@BBB@F@BABA@ABA@AB@BAD@B@D@VCFBB@BBB@@B@BAB@BABBBBBBDBBBB@BBBBBBDB@@BB@B@B@BAB@B@DAB@B@F@D@FBDBDBBBDBBDB@DBB@BBFFBBDBDBDBDBDBB@DBD@B@BAB@DABA@ABABA@ABEBC@C@ABABABAB@BABABAD@BABA@ABABA@AB@BAB@@AD@BAB@@A@A@AA@@AAAAAAAAA@AAA@AB@@A@ABABABA@ABADADADCD@BAD@D@B@D@D@D@DBBDDBBDB@@BBBBBBDDDBDDDBDBDBFBD@DAD@DBD@BBB@BDBJJJHB@B@BAB@B@@ADA@ABABCBCBCBC@A@C@A@CAA@CAC@C@ABABADA@CBCBAD@FAD@F@D@D@D@B@DBDAF@BAFABABABABAB@@ABBB@B@BBB@B@B@B@D@BAB@BABABC@EBAB@JAJBD@F@FCBAN@H@NCJCJEFANCH@J@DBFAF@F@DBBBDBD@D@DAB@D@HBBBFDF@LFD@DBJ@F@DFDFDBD@FAHAB@DABCDABAB@BAF@FBFAB@DADADC@ADEDEBG@A@C@CBAF@D@FAFCHIBAPKDEB@BEBCBCJCNED@BADE@AF_BS@A@GGmJQJKBADAFABAD@BC@E@CBADAD@D@@C@CBCBE@A@A@ABA@A@ABA@A@AA@AAAA@A@A@A@A@AAA@CBA@A@A@A@A@A@A@A@A@A@ABA@AB@@AB@BAB@BAB@B@B@B@D@B@BAD@B@BABAB@BAB@BAB@B@B@B@B@B@BAD@B@BAB@BABABAB@BABA@ABA@CBA@C@C@C@C@A@A@AAA@AAA@AACBA@CBA@ABA@ABA@ABA@A@A@A@AACACAAACAA@AAA@A@ABABAB@BABAB@DAB@D@BAB@B@D@B@B@B@B@B@BAB@B@@BB@B@@BB@BBB@B@BAB@B@B@B@B@B@B@DBBBB@B@BBB@B@BAB@DAB@B@B@B@B@BBB@BBB@@BB@BBB@B@B@B@B@DBD@F@D@F@B@B@@AB@D@DAB@D@B@B@B@B@B@B@BB@BB@@BBB@BBB@BBB@DBBBBBBB@BBDBDBDBDBDBBBD@DBB@BBB@B@@BBBBBBBB@BBBAB@F@FAFAF@D@DAB@DBB@DBB@DBB@B@B@B@@AB@BA@A@ABAB@BAB@BBB@BBB@BBBBB@B@BBB@B@BBBBD@BBB@B@B@DABABADAB@B@BABBD@BAB@DBFDB@B@@AFBB@B@@BDBB@BB@B@BB@@BB@BABBB@BABA@ABA@ABA@AB@BAD@BA@ABABA@C@AAC@AAC@A@A@A@A@A@A@AB@@AB@BAB@B@BABA@C@A@C@A@C@A@C@CBCBA@CDABABABAD@BABABC@A@A@C@C@CAC@CAC@CAA@AA@@AA@@AA@AAC@A@C@A@C@C@C@C@A@CAAAAAEECCCCCCA@@AA@A@@BA@AAA@A@@A@AA@@A@A@AAAAAA@AAA@ECEAEAEAGAECECCC@A@A@A@AB@B@@AB@@AB@@AA@@ABA@ABA@ABABCBCBA@A@A@A@AAAAA@AA@@AAAAAAAA@AAA@@AA@@AB@@AB@@ABA@A@ABAA@@AA@ACACAC@CACACACAAAAAA@AAA@A@AA@@A@AA@@AA@A@A@A@A@AAAAAA@A@A@A@C@CBCBC@ABABABA@AB@@A@A@A@AAAAA@AAA@AAAAA@ACAC@A@ACBC@A@AB@@A@AAAA@A@CAC@C@C@C@C@CBC@C@A@A@A@A@A@AAA@AAAA@A@A@A@AB@@AB@@ABA@A@A@A@A@C@A@C@CBA@ABC@ABABA@ABA@A@A@C@A@A@AAABA@A@ABA@ABABABC@ABABA@A@A@A@A@A@AAAA@@AA@EACAEACAAAAAAAAAAA@AA@@A@ABA@ABA@CBA@AB@@A@A@AAA@A@A@A@AACEEMSGE@CBQ@MBCDCD@FDFDFBD@BA@C@CB@DBDDB@FBH@FBH@B@DCBABAD@B@DBH@F@BAB@B@B@BAB@B@@AB@B@B@BBB@B@BAB@FCFADABABABABACSAC@C@EBABADBD@DABABA@CBA@ABA@ABABABABABA@A@A@A@CAABABABC@ABABAF@DBD@DBB@FE@AFEDE@G@CBABABABADADCBADABABADABABAB@DAB@B@@ABA@A@ABC@CBCBAAC@A@ABA@C@A@ABAB@B@BA@A@ABADAFCB@BABABABABABAB@B@BABABABA@CBBB@DBDADCBAPGHAHBHBHDDBB@BAB@B@@AB@B@BB@B@B@DBDBDDF@BBDBBBD@B@B@B@B@B@BBBBBBBBBB@BBB@BBB@BBD@DBBBD@D@DCFCB@NKFEJMFAFAH@FABA@AB@D@B@@AAEACBEBADCB@DBFFBJ@DBBD@FADADAF@D@FBFFFBF@JEDCBAD@JADBFBDFBHHHFL@FFBB@DB@BBAD@F@DBDDBBBFBBB@B@@A@ABC@AB@B@FBDBDD@BBDBBBBB@@BB@B@@AB@@A@C@C@A@C@AAC@ABA@ABABCBAB@BABA@A@AB@@C@A@ABABABABAD@@AB@@AB@B@@AB@@C@A@C@A@ABA@ABABAB@DADADAFAD@DAD@D@DA@AB@@ABAB@@AB@B@B@B@BBBBBBBBBBDBB@D@DBB@B@B@B@BBB@D@BBDDBBDDBBB@JBB@B@DAFBZ@FDHDHFPPHLBBDBD@DA@CAG@A@A@AB@F@HAFBJBF@HAHAD@B@DBD@F@B@BA@C@ECCCCAE@CHI@A@ABCBAB@BAB@B@BAD@B@D@DADADAFABAD@B@D@BBBBBBDBD@DBD@D@F@DBD@FBDBDDDDDDBDBDBFBDDB@BB@DABCFCFCN@BBFDJPBDB@B@B@DCDCBCDC@ABA@A@ABAB@@AB@B@B@@BBB@BBBBB@BB@@BB@BBB@B@@BB@BB@D@D@B@D@BBB@B@B@BBB@BB@B@B@BB@BBD@BBD@DBB@DBBBBBBBBB@BAB@BBBBDBD@HABADAB@F@D@F@D@D@B@DBB@FGBC@C@A@AB@BAB@BBBB@B@D@H@FBDBDFBF@HAFADE@CACCEAA@A@A@AB@@CBADA@AB@BBFBBBBABA@AAE@ABAB@F@D@H@B@B@B@DDD@B@B@DCBAB@BAD@DAB@BCBCAABABAFCFCHEFCBADABADAB@B@BBB@B@B@@AD@BAB@BABAB@BABAB@@ABA@A@AB@BABAB@B@B@BABA@A@AAA@A@CBE@CBABCBA@ABAA@HEJGX]FGBAB@F@DAD@BDFDAFB@BJ@TBFFDH@V@B@F@F@J@HABAB@@AB@@AB@B@B@@A@ABC@C@C@C@C@ABC@ABAD@BAD@BAD@B@BABCBAD@B@B@D@BBB@BAB@BABABABCBAB@B@BAB@DABAB@B@F@BC@C@E@ABCAE@A@ABA@AAA@AA@AAACAA@C@CBA@ABCD@DCBCBABCBABCBA@A@C@A@CBAD@DABAA@AE@CBAAA@AB@DEBAFAFAB@DADAB@B@FBD@DABCDADGFI@ABCBE@A@C@C@AACAA@AA@AAA@@A@AAABA@E@C@ABGBE@C@CAC@A@AACACH@@AD@B@@A@A@AAAECIAA@@AAA@C@C@A@AB@@A@AB@DABAB@B@BABAB@BABABA@ABAB@B@B@BBBDDDDBJCFCDA@C@A@A@CAA@AAA@A@A@A@AB@BAB@B@B@B@BDBFD@F@HCFCB@@C@E@EAGB@@AB@@AB@B@@AB@@CAAAA@AA@@ABA@AB@@AB@@A@C@AB@BA@A@CFEBAJCHADAD@@AB@@AD@B@D@D@@A@C@E@ABABBJDD@BA@A@AAE@CAACAA@C@EBE@E@C@CCEAC@A@A@ABBB@BABEBCAC@AAA@AAA@AAA@@ACCAACCCCAACAAACAGCEAGAGC@AA@AA@ACAAACA@CFG@EBGBCF@D@BADCBA@C@AAC@ACAACA@@AA@E@I@E@CGAIA@AAA@A@CACACACACA@AAC@A@CBA@CBABABABAB@@CAACCC@AE@E@G@EDAF@BBB@BAB@@A@A@CEAGC@A@A@E@AACC@CACBA@CA@CFK@ECAAAE@C@C@CAAAAA@ACAA@AAAAA@A@A@A@ABCBA@CAAAAC@ACEACCCAEAAAAA@AAAA@AAA@A@A@CBC@EAACACAA@CDADABABC@E@CAKICAC@ABADCB@BE@EBA@AA@AA@AAA@AAA@CCAEACACAC@AAAAAAAAAAAA@AAAAAA@ACCACAAIAECCCB@BCDADEBCDAHABCBCAAACAABCB@@AF@FADCAC@ADCBC@ABADADBDBD@BAFADDDBDCF@B@B@B@B@DA@CBCBAD@BA@A@A@I@CDCBCB@EELAFCF@DADADCBCB@@GBADBB@BC@E@A@A@E@GAA@CDC@GE@C@GBGA@AAECACACA@G@AEM@AEKEGC@AAAAA@CICAACEGACE@@AGCC@@ACDCDCBA@ECECE@CBADC@A@@EEAA@BHCFC@A@ACKHACCCAEHCFKDGAKCCAABEDIBCDA@CCCE@CAECGEGBADADEBE@A@ADEFE@EO@IEAABABQBGACBCD@BE@CBEAAA@B@BCBIA@AEACACCA@@AACAE@CEAAEACBC@AKIMKGBA@@CF@DCCCGCBEHKD@BABAB@@AB@BA@ABABC@ABA@A@ABCBE@AFCDA@ACIGKHIBABA@AC@EE@G@CBC@CCAA@AA@IDEF@FCBCB@CEC@ABC@A@A@A@EAECBE@CEEAAICAAAAAABEDCBAAAQK@ACCAAA@CEAA@C@AA@AB@BABA@A@ABA@ABGD@B@JC@C@E@@BA@ABABABCBABA@ICAHDDBB@B@BABABCBC@@H@BIJEBA@A@C@A@C@CBIAGEJ@DCAAAAEAECCAEACCCACAA@A@AAABA@A@EACCCAG@EDG@CAGAC@GFA@A@A@EBCBEEGBGFABGDBD@HABADCB@BABDFCDEBABEBA@A@A@GDABCDA@EBBBAFA@EDJB@DCBABA@E@A@ECA@ECA@ABAB@BABA@A@A@AAAAA@AAC@C@A@C@E@E@CAEBA@AB@BAB@BGDGAIBC@A@A@A@ABA@AB"],"encodeOffsets":[[116100,24302]]}}],"UTF8Encoding":true});}));