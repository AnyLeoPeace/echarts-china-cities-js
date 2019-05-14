(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('成都轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"成都"},"geometry":{"type":"MultiPolygon","coordinates":[["@@C@A@AAACAAACEEAAAACA@A@ABEAEAGACACB@CC@CAACACAAC@A@A@C@AAGAAACAAAACACAACAACK@AA@AACC@A@CAA@C@A@C@A@A@C@A@G@CAA@ACAAACCECAACAAAEAGAAAAAA@CCAAIAC@C@CBCBAD@D@BADABA@A@CBODCBABABAFABADABCBA@EACAA@ABA@@B@B@BBB@BABABA@A@CACAC@CBAB@BCDB@ABADADADA@A@AACCAAC@A@ABABAB@B@DADA@C@KCKCECC@@BAB@FAD@BC@AAECCAA@CBC@CAAAGCCAGAEBA@A@ABCDABADCDCDCDA@AB@B@DABADCBABCBCBADADAD@FBBBN@D@BABA@CBABCBADABAD@DCBADCBC@C@CBCBCDCDABABCDEDAF@BCHABCDAFAD@B@DBBDBBBFD@B@BCBEACBEBC@E@CBICA@CACAACAA@CBADEBCBA@C@AACCAC@AAACAG@CAACBGBC@G@GAEAGAA@CB@D@B@BABABAF@BABABCHCBAB@B@J@D@BC@@ACICACAM@EAA@EACACACAA@A@A@EBM@EBE@CAU@I@A@E@IDEBC@EAMGIEECKCCCCAEIA@@ABCBC@C@CAAA@A@CBABC@G@CAA@CC@C@MAAEBA@CAAAA@EFABA@G@E@CAAA@A@A@CJKJK@C@CAC@AA@A@A@IDC@A@AACCAA@AA@ABC@AACEAAACAACGCCAAA@C@AACBGBA@@BB@FB@BE@A@EAAA@CAAE@CBEDA@A@@AAC@EBA@AB@D@BAB@@A@ABEAABAB@B@BAB@AA@AB@AAAA@ABA@ADA@AGEICEAGASAKAKAA@A@EAACCGAE@C@ABAFEBA@AA@@E@AFK@A@IACA@C@QJGBABCB@DADCDABABA@CIAEKQCEAACACAC@A@ABABBBBDDD@B@BA@GBIBE@C@EAAAI@AAEGA@A@A@EBA@MEEAEAAAACAEA@AAA@EAOCICKCGA@A@ABA@A@A@AB@@AB@@ABA@AB@@AB@@AB@@A@AB@@ABAB@@AB@@A@AA@@A@AA@@AAAAAAAAAACEEAAGCCAOECACAAAAC@EAEACAAGDA@CAMMMQCEEKA@AAA@@D@DAD@DCH@BCBCDCBAB@BBFBD@HAB@BA@AAEAA@C@CDCDEBGAE@CC@CFKDCBAFAFAHEDC@CBA@ABC@CACAECECCCAEAE@A@GBA@CDAFEHAFABAD@B@BFD@B@BABABCBD@B@HBDB@BABABA@AB@BA@AB@AA@GAC@AA@ABC@ABAB@@AAA@A@C@A@C@AAAECC@A@A@GNABCAA@ACAAEACA@ACCCCAAAAACCCAAAAAAECG@CBA@CDCBAF@HA@ABGDEBADADCFCBAB@B@BBB@BABCD@BADCFABCBE@CB@B@B@DFDJDBDBDBFB@ADCHABBB@DDD@B@B@BCFCBG@A@CDCD@F@BBBBBDDBBBD@B@BCFCD@D@B@B@BDBFBFFBDBBADAFBBBDDB@BBF@D@FCH@F@FA@IBCDABG@A@EBEDCBCBAAEACBABC@A@CAKCKCE@AB@B@BBN@FCNGNCDIBMDM@G@GAC@CBA@CBAAICAACAeQ@AICECEECICGCGAKCCAC@ABEAECCACCAA@GCA@EBEDADADBF@F@B@DABADAF@FABEFCFABABA@C@CCECABABMNEFABA@C@CCACEKGIGGKQAEGKEEICCAK@KBGCABABEFA@GDGBA@OBEBWBSDOD@D@DDF@FAHADGFADBF@H@HAJ@JC@IBCDAFAFDNDLDLDLCFEFCD@HDHDDDBHBDDDFFLB@B@BABAFBFBFDHJNLJLJJHJFDTX@H@DCDEDGBCBADDJBHBHBDADAFCDBREFBBDDDD@FBDBD@BGN@BDLDBD@DAHEJAB@D@B@BB@DB@@B@BADQHIHADBDJFDHLJFJJFFDD@FBB@B@BCBED@D@@D@BFH@DBDBBB@@BB@@BBFDDDFDDBJBDDBFHFF@DEJAFCB@B@BBDE@OAKBKDAFBFDJHRDTCLEFABKJEHAH@H@DEBC@ICGAEDGDCHCH@FBD@VBFDHFFDJ@LCL@LBJAJCFEFEFAFAHEFCBI@I@KDIFEHGVEDGFGDEFAFDJ@HEFCBI@yYIAE@AB@F@DDV@BCFCFSTGDGDIHCFOZELAJBJCHHBB@D@BBB@BBBBB@BBBD@B@B@DBBDBD@DBDADBLDBBBBLFNFP@P@DBPLPJN@F@B@DAFCNGFAHCJEPGLCBAB@@AFAJFLNDNDJDFJBJHHDFFDFJTDFLFHDH@JCJBJBJATMHADAD@B@FBB@B@FADAD@B@B@D@DBLBBBB@DAH@HDFDF@BADGFGBAHCDAD@DAD@FBB@D@D@JIFIBIBCDALCF@FDNHLFJHHFJAF@HPHNNRFFD@LBLFHDLFJFH@H@P@JBLBFFZXB@B@B@DAB@D@NJFBB@DDDFHFDLDLAL@F@B@J@LDNHHDFFF@BHDHFLHLHNFNHHFFLDBJ@D@DBD@BD@BABCD@HAD@D@DDLBDBBBBBH@B@F@F@BAJADAF@D@D@FAF@B@BADCBEBEBCDA@@BAB@B@BDFFJHLFDBBDFBFBD@D@F@B@DAD@D@DBBBBDFDDDDBDAFCF@D@B@DDDDB@FBDBD@BFBHLHJBFDH@B@B@DBD@BBBDDBDDFFDDDBDAFBDDB@BDFBFBL@FBFB@FBFDFDHJHHBF@D@J@BAD@D@H@BADABCDCF@BFV@DBHBJ@H@F@DADCDINIHBH@F@H@D@BDDDFHLBDBF@BCDCDADCH@DAF@DAD@BAFBBBH@B@DADAFAF@B@HBFDDDBHAB@D@FBJ@D@JBFBDDDFDFB@D@DADABABCJBHAFAFABBBBDDBBBBB@FBNDF@D@HABADAD@DBBBHBHBBBBBDDDHBBHH@BBDDDDDJFFDDDDDDDDD@DBD@BB@DBB@B@N@F@DBFBB@BBD@FAFBDBDBDBD@DBDBBF@DBFBD@D@D@BDDHFHDLDLDHBFFD@FDJBFDD@B@DA@ADAD@BBD@DABAB@B@DBBB@BBB@BB@D@D@BAB@@AB@DABE@A@CBC@CBABAFEFCFEBAB@B@B@BBB@FDF@BAD@BAH@BBD@D@FBFDDBDDDBDBB@B@DCBCDADABAB@D@DBD@DBBBBBBBBBBBB@DAD@DEBAAA@CAA@AAC@A@ABABABC@EBADCDCDEFE@C@E@C@ABABABAB@BABADCFEDC@A@C@AAC@ABABAB@B@DADCBC@C@ECEACCAA@A@C@CAEAECEEECEEEEECEGAEAE@G@G@C@C@E@ABEBADCBAHABABCBABC@ABADEB@DADA@ABCBCDAHCFAJCBABCDCBC@A@AAACAAACAAC@EBCDC@ABADCDC@ABAAEAACCACAA@EBCBCB@FIBAB@B@BBB@B@B@BCB@B@@A@AB@BAA@A@A@E@@A@AB@B@B@B@B@@AB@B@BBB@BAAAAA@A@A@AA@A@@A@A@A@ABC@AB@B@B@B@DBB@@AB@B@@AB@@BB@B@DD@B@BB@@BB@FGBDDBB@B@B@BABA@AAA@AB@@BB@@AB@@AB@B@B@@AB@D@B@BA@A@AHE@AAA@ABAB@BBB@DA@AB@@ADA@AB@BABA@ABA@A@A@AB@@ABA@AB@B@B@B@B@B@@BB@BA@ABA@A@AA@@AB@@ADA@AB@@AB@@AB@@C@AA@C@AAA@AADA@A@AA@@A@AAC@A@A@AB@BCB@B@@AA@@ABAB@B@DAB@FCDCCE@AACBA@ADA@AAA@ABAA@@A@AB@@BBA@AA@@A@ADC@AEAAABAAA@CA@@AA@A@@AA@@AB@B@B@B@BABBB@B@BAB@BAB@B@@AAAA@CAA@A@@AA@CA@AA@@A@AB@JBB@@AB@B@@A@AA@A@@A@AB@B@B@CCB@B@B@BA@ABAB@@ABAB@B@B@BAB@B@FA@AB@@AA@AAAAB@@AB@@C@CD@JEB@DAB@B@B@B@BA@A@A@AB@@BBA@A@E@A@A@A@AA@@AB@@A@AB@D@F@BAD@B@DABABAB@DABAB@@ABCAC@A@AA@@AB@@AB@BABAB@BAB@@A@AB@BAB@@AA@BAB@@AAAAA@ADAD@B@@ABA@AB@DAJAHAB@B@@BB@@B@BD@@AB@@AB@@AA@BAF@B@D@B@B@B@B@B@@ABCA@AAC@A@@AA@@AA@BAAA@A@ABA@ABAB@B@@BB@B@B@D@@ABAB@DADAB@FAD@DAD@B@DAB@@A@CB@@A@AB@D@BAB@AAA@@A@AB@D@B@@B@B@BB@B@B@@CBA@AB@B@B@B@@ADA@A@AB@BA@AFCDCBC@C@CA@AAA@AA@ABCDC@CB@@C@C@ABCAAAA@AAA@A@A@A@AAAA@AAA@@A@ABCDC@A@CEAA@C@@CAE@AACA@CACB@AAA@A@A@A@C@A@A@A@A@A@CAAA@CAABCAA@A@AAAABA@AB@DAB@@ABC@A@A@ABA@ABAFAB@F@B@BBBD@BBBD@B@B@B@DBB@B@BCBCBA@AB@BAB@D@BBBBB@D@BABCDAB@B@B@@BFBFBBBN@BADABA@A@A@CAABAB@B@BBB@B@@AB@@A@A@ABCDA@AB@B@DFDBDAHGBABAB@B@@BBBBBF@F@B@DAB@D@B@B@DBDBDBDBDD@DB@BBD@DA@A@A@CBA@AD@D@BBDBDBD@D@FAB@D@BAB@BBB@FDD@B@BAF@BAD@BAD@BAD@FAF@BAB@DCBABAHAB@D@B@FFDDBBBB@BBBD@B@BBB@B@B@@A@CB@B@BBBBB@BBB@@BBD@BD@BABA@AB@@ABBBDBHHD@BB@@BAB@B@BBHB@DHDHBBBB@BBB@B@DDBBDDBDADABCDAFAB@BA@CBA@ABCBAD@DB@B@DBBBDBDBB@DBD@D@B@BB@BBD@@AB@DCBABCD@HBFDFBHBFBDBD@FADAF@@ABB@BB@B@B@BAB@DAD@B@B@B@B@@BB@@B@DBBBAB@B@B@@B@B@BB@D@@BB@@BB@B@F@D@@BB@BABA@AB@F@B@B@@AB@B@@ABAD@DAD@BBB@@A@AB@B@@AHC@AB@DAB@@ABABADBB@BBBAD@BAD@BAB@B@BBFBBABAB@BCBCDCBADCDADAB@JCBA@A@CGW@I@C@C@CAACAC@@AAAA@AAAC@A@A@A@ABCB@B@B@B@D@DAD@DAF@HAD@FA@AFABADAHAHAHADAF@FABADA@BDCBADAD@B@DAFAD@DBDBB@D@B@B@@ABABABABAD@@AFA@ABA@ABC@C@A@ADAB@D@D@F@DBFDDBD@D@D@DA@CBABCBC@CB@BA@AB@@ABAD@FAFAF@D@D@B@DADAD@DABAB@F@DAH@D@D@DCBCDCD@F@B@DALBD@D@D@@ADABA@CAAAAAAAC@ABC@EDABA@ADCBCDCBEFQBEBC@E@ABA@CAAA@A@AB@BA@@AAAB@ACBCBADAD@FBFDBBBBBDDBDBDADA@BBCBC@EDI@EBCBCBCBCBADCDABA@CAC@AAAACAC@ABAB@DABABABA@AAAAC@ABABAA@BADAD@DBD@D@B@BABAB@DBB@D@BAAA@C@C@CBADBDBDBD@F@B@FAFBB@D@FAD@BC@CCCCCAAAC@C@C@CBC@C@C@CACBCBAF@F@F@D@DABABABE@ADADC@BBCBC@CBC@CBCDC@ADC@ABE@CBC@C@A@ABCBA@AAG@CB@@AB@BAD@B@@BBBBDBB@BB@BBD@B@DAB@DBB@B@BB@A@A@AFGDABA@C@C@AAIEGCCCCC@AA@AAA@A@C@AA@ACAA@AA@@A@AB@@AA@@AA@A@C@AA@A@A@AA@A@@AA@@AA@AA@AAAA@@AA@@A@AB@@AAAA@@ABA@A@A@AA@@AA@@BA@@AA@@AB@@AA@@AB@AAB@BA@A@AA@@AB@@AB@@A@AA@@AB@BAB@B@@BBBB@B@@AB@DB@BBBB@BB@BB@B@B@@AB@@AB@B@B@@B@BB@BAB@@B@BBB@BA@@B@B@BB@DC@AB@B@B@@BB@B@@A@A@A@ABABB@BBBB@@BBBBBB@D@@AAAB@BA@A@AB@@ADABABABCB@@ABA@C@C@A@ADEFCBCB@DAB@@ABA@A@C@AAA@ABCDAB@BBDFFBBBD@B@@ABADA@A@ABC@A@MAAAAAC@CACACCECEEE@A@CBC@A@A@AA@E@CA@A@C@AAABG@A@EAAACCE@C@C@A@CDEBA@CA@@CAA@K@C@CBA@CBG@G@A@CAG@C@QBIAA@AACAACE@A@A@C@CDEBABAH@B@@K@E@A@K@CEECGAA@CBC@CB@@AB@DABB@B@H@B@DB@B@PKNKBEBA@AA@@AA@C@ADA@A@AA@CACA@A@A@AAAAAC@CAG@AAA@AA@A@ABCDC@GBEBA@G@AAA@ACAICCAC@A@CAG@AAAC@@ACBABAB@H@BADKJCDABA@C@A@AA@A@ADGDCDCDCBE@ABADAD@BABABC@A@M@E@A@C@ABC@A@C@A@A@KCIAAA@AAE@C@C@A@CACCAAA@ABCBCBA@@AECA@@AAA@CBABA@A@AA@A@CBEACBA@ACAAABA@AB@D@BABAAAACAA@@A@IAAACCEAEA@AAABEDAFCPCDADC@A@A@C@ABCBADCBABA@A@CAGAA@CBEBA@E@EAAAA@@AA@@CAGAAAACAE@A@C@A@GBCBABE@A@@BAB@D@J@DADABABA@A@AACCA@A@A@ABA@A@C@GCECAAAECICGACEKEKAAC@C@CBEFABA@EEKAE@C@CBE@ABEBCFGHA@A@A@A@CACCEECGAEAA@ABC@AFEDCFEJKDE@EBE@C@CACA@G@EAG@I@MBS@E@IHCBABC@A@KACACA@AACBABCD@FA@A@E@AAE@G@CACAACCIAAAA@CCGEEACAGAEA@AA@AGAGAA@ACAKCAAMCKECAGCA@A@CDAJABCDCBA@A@AAEIACAAAACAIAA@IAC@A@ABABADEJABECGCA@GCCAAAAA@AAABA@ABC@A@CACAC@A@CBCB@FE@A@A@AGGA@A@C@ABCFABA@A@EAECAAAACC@A@A@A@ABAACE@E@C@A@@AAA@A@C@ABCAAG@A@AAAA@A@ABADEBCDCBCDGIGA@EAGAAAAAAA@AAAC@E@A@@ABAB@VCDABAAEGAAAMF@AAA@A@CAA@AA@@A@ABA@A@AA@A@CAC@C@KHEDGJ@B@BB@HD@BCFAB@D@BAHCDCBAD@BAD@BABC@C@CAI@CBA@CBCDGJDHBB@B@BAD@B@DCR@D@BAHABEHA@WDGFIDGBEHADABBDD@NAB@B@BBBB@BABABEBGFKHABA@IBE@GBC@ABAB@BA@CBABADABA@EAEAMCC@A@A@ABA@@DCFABA@E@E@CBIFEDADGFCD@BA@CAA@CAECA@@BA@ADAB@B@B@B@BBB@D@FGLCHABA@@BIAA@C@KFA@A@C@CA@BCBEHA@EBCBABAD@B@B@BBBFDDDDBB@DDBDB@@BABCDABAB@D@BA@A@A@EEAAA@CDCBAB@B@BBD@DAD@B@B@BLJ@B@D@H@DAH@BBBB@BBBD@DADCBABE@GDIBEDEBC@AACAECAAC@ABA@@DCHABCBABAF@BA@A@"],["@@@CFCKCKCEJHFFBJA"],["@@@AABA@@BB@B@@A"],["@@BB@AA@"]],"encodeOffsets":[[[106693,31058]],[[106455,31040]],[[106979,30874]],[[106472,31952]]]}}],"UTF8Encoding":true});}));