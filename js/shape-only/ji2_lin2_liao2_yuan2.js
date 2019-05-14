(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('辽源轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"辽源"},"geometry":{"type":"MultiPolygon","coordinates":[["@@BAB@BA@A@ABA@ADAB@BAFADABABCB@BABCBADCD@BABABA@C@ABA@ABADAB@BAFABAB@B@B@FAB@BABAJCDAB@BABAFAD@B@BAB@BADAFCB@FA@AD@D@F@BAD@BAD@BAD@BAB@DAB@HABABAB@JEDCBADADAB@@AFABADABAB@BADCB@DAB@B@@AB@BAB@BAB@DAB@B@B@BAB@B@DBBBB@BBB@@B@B@B@BAB@BA@BBDBBB@BAB@B@B@BBDBBB@BBDB@BDDBDBBBB@BDBBBADB@@D@B@BAB@BADABABA@ABA@A@C@E@EBA@A@A@A@A@EBA@A@A@A@A@C@A@A@CA@BABABABCBABAB@BA@A@ABABCB@B@BBB@BB@BDBBBBBB@DAB@B@B@BBB@BBBB@BBBBB@BB@BB@BBBB@B@B@B@B@B@B@BAB@BBB@BBB@B@BABB@@BD@B@@B@BABBB@BA@A@A@ABAB@BABABAB@BBB@BABADBBADB@D@@BB@BBBB@BBBBB@AB@B@B@BABAB@B@@AB@D@B@B@B@BAB@B@@AB@@ABBB@B@B@B@B@B@B@BBB@B@B@B@B@B@B@B@B@B@B@@B@B@B@BBDBBDBDDDBBBD@@BB@BBB@BCB@DAB@B@H@BA@A@ABA@ABA@ABAB@B@B@BBD@B@D@B@B@@ABAAA@ABABAF@B@B@BADC@ADC@AB@@A@ABA@A@ABADA@AD@B@D@D@B@B@BABAD@B@B@BABABABA@ABABA@ABA@A@ABA@ADCBA@A@ABC@AAAAA@CACCC@AAAACAA@AA@@AAAAAAA@A@A@C@A@AB@@A@ABCAAAA@C@A@AB@@CBABABCBA@G@AAC@G@AB@BABA@AD@BA@ABA@EAGBA@CBE@ABA@A@ABEBA@ABA@AD@B@B@D@DAD@D@B@B@DAB@D@B@BAB@D@B@BAD@B@B@B@@BB@D@B@BBH@B@BAB@B@B@D@B@BAD@B@B@@AD@B@BAB@B@DAD@BABAB@DCDCDAFEB@DCDAB@B@@AD@BA@ADCBCBABADAB@LADAP@B@B@BAB@B@B@B@DAD@BBB@B@B@B@BBB@B@B@BBD@B@F@B@HBD@BAB@D@BADADCB@DABAB@DABAD@DABADABAD@BABADADA@ABABABA@ABA@ABABAB@@ABAB@BAB@D@B@BAB@B@DAB@BABAB@BAB@DAB@BAB@B@B@B@BAB@B@B@BAB@B@B@DEB@@ABADAB@D@BAB@FABAD@BABABA@A@E@ABCAA@EB@DAB@DADCBA@AAA@A@A@ABAB@@A@A@ABA@AAAAAB@@A@A@AB@BA@AFA@AB@@A@AA@BAB@@A@C@AB@B@@AB@@A@ABABAB@@ABAB@@AA@@AAAB@@AA@@AAAB@@A@A@AD@@AB@@AAAB@@AB@BA@AB@B@B@BA@AA@A@BAA@A@@AAA@ABABA@AB@@ABAB@@AA@@AB@@AB@@AA@A@AAB@B@@AA@A@BAA@AA@AA@@A@A@AA@A@@BA@AAAAB@@AA@A@A@@BA@A@AA@A@AAAB@@AA@A@A@@A@A@A@ADAA@@A@ABAAAAA@AAAAAA@@AB@@AB@AABAA@@AB@@AA@@AD@B@@A@AAAA@A@BA@A@AA@@AA@@A@A@AA@BA@AA@A@@A@AB@B@B@B@@AA@@A@AA@@A@A@AA@BAA@ABA@@AB@@A@AABA@@AB@@AAAA@BABAA@A@@AB@@ABA@AB@AAB@@A@A@AA@@ABAA@A@BABABAA@@AAA@A@AB@@A@AB@AABABAAA@A@AB@B@@AA@BAB@@A@ABA@A@AA@AABAB@B@AA@AB@AA@AA@BA@AB@@BBAB@BAB@B@@BB@@AB@@AB@BA@ABABABBB@BA@A@AAAB@@AB@@AA@A@@AB@@AA@A@@AB@@AA@A@A@@ABAA@@AB@@A@AB@@AB@B@BAA@A@@CBABAB@@BB@ABB@B@@AB@BAA@@AB@@AA@BAB@B@@A@AB@@BB@B@B@@ABAB@D@BAB@@A@ABA@B@BD@@AA@BAB@B@B@AAB@@AD@B@@ABAB@B@B@@A@AB@B@@AA@BA@AB@BAB@B@AAA@BABBB@@A@AB@B@@AD@@AB@B@B@B@@A@ABBBAB@AADAB@B@BAB@B@@A@AB@@A@AB@@AB@B@B@BA@A@ABAB@BAB@B@BCBABA@BB@BA@AB@@AB@B@B@BAB@BAB@@A@ABAB@@A@AB@@AB@@B@BB@BA@AB@B@B@BAAAECCAAAEAAAAAAAA@A@A@ADA@ABC@ABEBAAA@AAA@@ACECEAAB@B@B@B@@AA@AA@AAAA@@BA@ABA@A@A@A@A@A@A@ABA@@BA@ABA@C@@AA@A@AAA@@AAAA@@AA@A@@AA@@BA@@AA@A@A@@BA@A@A@A@A@A@@AA@@BA@A@A@A@A@A@A@A@@AA@A@@AA@A@@AAA@AA@A@A@A@@AA@A@A@A@A@A@C@C@A@A@A@C@A@A@A@C@@BCBA@A@C@CAA@A@ECA@@ACAC@ABAACAA@A@A@CDA@E@@BA@ABA@A@AAA@A@@AA@@A@AAAA@A@GCA@A@AAE@EAEBE@AAE@A@AAG@A@A@CBA@ABABA@A@@BABA@A@@BA@A@A@A@A@AAA@@BCBA@AAA@@CACCCFC@ABAB@BADADA@AB@B@BA@ABAB@DC@A@AB@BAB@B@BBD@HCBAB@@BB@@AAABCB@@A@EA@@A@AB@AAA@AAC@C@@A@AA@AA@AA@AAAAACAAAA@AAA@AA@BAB@@A@A@ABABAB@@A@CA@@AA@@A@AA@AA@A@A@A@A@ADABA@A@AAA@AA@A@@A@AA@@A@A@A@A@AB@@ABAB@@A@A@AB@@AA@AA@AA@A@@AAA@AB@B@@BB@B@B@B@@AB@@A@AB@@A@A@AA@@AAABA@A@ABAB@@AB@B@B@BAB@BABABABABAB@@A@A@ABABA@C@ABA@A@AB@DCD@DABA@AAABA@A@AA@AAA@C@A@@AA@AA@AB@BA@A@AB@BABBB@B@FBBCB@@AB@B@B@B@BAB@B@B@@AB@B@@B@BA@@BA@BBA@@BB@@BB@@BB@L@@ABAB@B@@A@AB@@G@ABA@BB@B@B@B@@D@BAB@D@BB@FBD@B@BADABAB@@AA@A@@AA@AAA@@AA@A@A@AAA@AAAAA@@AA@A@@AA@A@@AAAA@@AA@@AA@@AAAAA@A@A@CB@@A@AAA@A@AA@@A@AA@@CAAAC@AA@ECA@@BA@C@A@AAA@A@AAAAAAA@@AAAAACACCAAAAACAAAA@A@A@ABA@AAAA@AAAACABAAACA@AA@AA@AAA@AA@CBA@A@AB@BABA@@BA@A@@BA@A@@BABABABA@A@ABA@A@A@@AA@@AA@@AA@A@A@A@A@AAA@A@A@@A@AAA@AA@@A@A@AB@BA@AA@@AA@A@@AA@@AAA@AA@A@@AA@A@@AB@AA@AA@@A@AA@@A@AA@@BA@A@@AA@@BA@A@@BA@A@AA@AAABCBCBA@A@AA@C@A@CBC@@AC@AAA@ABA@A@A@A@@AA@AAA@AAA@@AA@@AA@@AA@@AA@A@A@@AA@A@@AA@@AAA@A@A@A@AA@@A@AB@@A@A@A@A@A@A@A@A@A@A@AAA@A@A@A@A@A@A@AAA@A@AAAAA@AAAAAAA@AAA@AA@@A@A@A@A@A@A@AA@@A@A@A@AAA@A@A@A@A@CAA@AAAAA@AA@@AAAAC@A@AAA@AA@@AAAAAAA@AA@@AA@AACAA@A@@AC@AAA@A@A@A@A@@BA@A@A@A@A@A@@AA@A@@AA@A@@AA@@AA@@AA@A@A@A@@AA@A@A@@AA@@AA@A@@AA@A@A@A@@AA@AAA@A@A@@AA@A@A@@AA@A@@AA@A@AAAAAAA@A@@AA@A@CAA@@AA@AAA@AAA@@AA@A@@AA@A@@A@AA@AAA@@AA@A@@AA@A@AAA@@AA@AAA@@AA@A@A@@AB@BAE@CAA@A@@AA@@A@AABABAB@AA@A@A@AAA@CAC@CAA@IABA@A@AA@A@@ACA@AA@EAEAAAAAA@A@CAC@CBA@A@C@C@CAC@E@C@C@C@C@C@@BA@AB@BA@A@A@A@AAE@A@AACAAAECAAAAC@@AA@A@A@@AA@A@A@@AA@A@A@@AA@A@@AA@A@AAA@AAA@AAA@@AA@A@@AA@A@@AA@A@AAC@A@AAC@A@AAA@A@C@CAA@A@C@@AA@@AA@@AA@A@A@@A@AAA@AAA@A@C@A@AAAA@A@@AAAAA@AAA@ABA@AA@AAA@@AA@A@@AA@A@@AC@AAA@@AAAA@@AA@CCAAAAAAA@C@A@A@AACACAA@A@A@A@A@CBA@AAC@AAAAA@CCCAAAAA@AAAAAC@CAC@AAABA@A@ABA@A@CAA@A@AAE@A@A@A@A@AA@AA@@AAAA@@AA@E@A@A@CBABE@ABABA@ABAACACCA@AAA@CAA@A@A@CA@AA@@CAA@AA@A@AAA@A@A@@BA@ABA@@BAA@AA@@AA@A@ABC@ABA@A@A@C@A@A@ABABA@@BC@E@@BA@A@A@A@ABA@A@A@AAA@@BA@@BA@A@A@A@A@A@A@A@AB@B@B@BAD@B@D@B@BBBBBDB@BBDB@ABBBB@BBB@@B@BA@@B@BA@ABAB@BAB@BAB@BB@@B@B@B@B@B@B@B@B@BA@A@ABA@A@AB@B@BA@A@ABA@@B@B@B@B@BB@@AB@B@@AB@B@@BB@BBB@B@B@BBB@B@BBB@B@B@@BB@BBB@B@B@FAB@B@@BB@B@@BBBBBDBB@DB@BB@@B@B@B@B@BABABAB@B@BABA@A@ABC@A@A@CBABA@CBA@@B@B@BBBBB@B@B@BA@AB@B@BB@@BB@@BBBBBB@B@B@@BBB@B@BB@@BB@@B@BA@BB@BBB@BB@@BAB@B@BA@A@A@ABA@A@@BA@A@ABAB@B@B@BB@@B@BB@@BA@@B@BA@@B@B@B@B@BA@@BA@AB@BA@@BA@AB@BA@A@ABA@A@A@A@A@A@A@A@ABA@ABCBA@A@A@A@@BA@A@A@ABA@@BA@A@CBA@CBABA@A@CBA@A@A@ABA@@B@BBBB@BBDDB@B@BBB@@B@D@B@BB@@B@B@BA@A@ABA@ABA@ABADA@ABABAB@B@B@BA@@BA@ABCBA@A@A@ABA@A@A@A@A@A@ABA@A@A@ABA@A@A@A@A@A@A@A@@BA@A@@BA@@B@BBB@B@BBBABA@@BA@A@AB@B@B@DABA@A@A@C@@BA@A@@BA@A@ABA@@BA@A@ABAB@BA@@BA@ABA@A@A@A@C@A@A@G@A@A@AAA@A@A@@B@BABA@BBB@B@B@B@B@@BB@B@B@BBB@@BB@@BA@@B@B@BBBB@@BB@@BB@B@B@B@B@B@BAB@B@B@@BB@@B@BA@@BAB@B@BA@A@@BA@@BA@A@A@@B@BA@@BAB@BA@@BA@A@@BA@A@ABA@A@@BA@ABA@@BA@@BA@@BA@AB@B@BB@BBB@@BB@B@B@B@B@B@B@@BBB@B@BAB@B@BA@@B@B@B@BBB@B@B@BBB@B@B@BA@@B@BBBB@B@B@BB@B@B@BB@B@@BB@BB@BB@B@B@@BB@@B@B@BB@BB@BAB@BA@@BA@@B@B@B@B@B@B@B@BA@@B@BA@@BCBEBBD@BDDBBD@HFB@DDBBBB@BA@ABABABABA@ABBBHBBBBBB@BB@BB@B@AB@B@BAFAB@B@B@BE@EBABCBA@A@E@A@ABA@CAA@A@A@G@@AAAA@C@AAAACAA@A@ABABABA@C@ABAAAACAGAA@A@@AA@@AAAA@CAA@@AA@A@C@C@A@A@CBAB@B@B@B@D@BA@A@A@@BA@CDA@AB@BC@AAC@A@@B@BCDA@ABA@BB@BBB@BBB@BBBDBBD@B@BEDBBDFDFBBABEB@BA@@BABAB@B@DB@BB@B@BABA@EBA@A@@BC@A@ABA@A@A@A@A@A@A@A@@B@B@B@B@B@BA@@BA@A@ABA@A@A@A@A@A@A@A@AAB@@AA@A@AAA@A@AAA@A@A@A@A@A@A@A@A@A@A@@BABABA@@B@B@BB@BBB@B@B@B@B@BBB@B@@B@BA@@BB@B@B@BBB@B@@BB@B@B@B@BBB@@BBB@BB@@B@BB@@B@B@BBBAB@BAB@BA@@B@BA@A@@BA@A@@BA@A@@BABAB@B@B@BABA@ABA@ABA@AB@B@BB@B@@BB@B@B@@BABA@@BA@ABA@A@A@@BA@A@@B@BB@B@B@@BB@B@B@@BB@@BB@@BB@BB@BB@B@B@B@B@B@@AB@BAB@B@B@@BB@@B@B@BA@@BA@@BB@@BB@@BB@@B@B@BB@B@B@BB@B@B@BA@@BB@@BBBB@@BA@@BA@A@@BA@@BA@ABA@@BA@@BA@@BA@A@ABA@A@@AA@A@A@@B@B@BB@B@B@@BAB@BA@@BB@@BB@B@B@@AB@B@B@@BB@@BB@@B@BB@@BB@@BB@@B@B@BB@@B@BA@BBA@@B@B@BA@@BA@@B@B@BA@@BABA@@BA@A@A@AB@AA@A@ABA@@B@BA@A@@B@BA@@BABA@@BB@@BBB@D@BA@@B@BB@@B@BA@@B@BA@@B@B@B@BA@@BA@A@@BA@A@A@A@A@A@A@A@A@A@ABA@A@A@A@ABA@A@A@A@A@A@@AA@A@AB@B@BA@@BA@A@@BA@A@A@ABC@A@@BABA@A@@BABABABABABA@A@A@ACAAA@@AA@@BA@A@A@A@@BA@A@A@A@AAA@@AA@A@@AB@B@@AB@@AB@AAB@@A@AAA@A@ABA@A@AA@AAA@A@A@@AAA@A@AA@@A@AAA@AAA@AA@@AA@AA@AA@AAAAA@AAA@ABA@A@A@ABA@A@A@@BA@A@A@A@A@A@AAA@AAA@A@ABA@A@A@A@ABA@@B@BA@@B@B@B@BA@A@@BA@@B@B@B@BA@@B@B@B@B@B@BABA@ABAB@BA@@B@B@B@B@BA@A@@B@B@BA@@BA@@B@B@B@BA@A@@BB@@B@BA@@BBB@BA@@BBBB@B@@BAB@BBB@BAB@B@B@B@BB@@BB@BB@BA@ABA@A@A@@BA@@B@BB@@B@BA@@BA@@B@B@B@BB@@B@B@B@BA@@B@BBBB@@B@BAB@B@B@BA@@BA@@B@BA@A@AB@BB@B@B@@BABA@@BA@A@AB@BB@@B@B@BAB@BB@BBD@BBB@BB@BB@AB@BA@@BA@@BBBABA@A@A@@B@BBBBB@B@BA@@B@BB@@BB@B@@B@B@BB@@BB@@AB@B@B@@BBB@B@B@BA@@B@BB@BB@BA@@BA@@BB@@BBB@BB@BBB@B@B@@B@BBBA@@BA@A@@B@BBB@BA@@BB@B@B@BB@B@B@B@BB@@BA@@BA@@BB@@BB@@BA@ABA@A@A@@B@BB@@BB@@B@B@B@BA@@BABB@@BB@B@@BBBA@@BA@@BB@@BB@B@@B@BBBB@B@B@B@@BABA@@BA@A@A@A@BB@BB@B@B@@B@BA@A@A@A@AAA@@B@BB@@BB@BAB@@BB@@BA@@B@BB@@BB@B@@AB@@BB@ABABA@@BABA@A@AB@B@BA@@B@BB@AB@BB@BB@BA@A@@B@BBBB@B@B@BBABA@AB@BABABA@A@ABA@A@A@A@@B@B@BBB@B@BA@ABA@AB@B@BABB@BBB@B@B@@BA@@BA@@BA@@B@D@B@BABADABA@A@ABA@ABA@@BAB@B@BA@@BAB@BADABA@A@A@ABA@@B@B@BBBABBBBBDDD@D@B@D@D@D@FAB@FAB@BBB@AB@DABA@CBA@A@@BA@@BBBBB@B@B@B@B@BAB@B@BB@FBJBDBBB@BBBBDBB@BBD@B@BBBBBDBFDDBJFDB@B@B@BCBC@@BABBB@B@B@FAB@D@F@BAB@BABA@@BAB@BAB@BB@BBB@BB@BBB@B@BABABA@@BBB@BB@B@@BBBB@BBBBFBB@BBB@@BB@@BA@@BBD@BAB@D@BB@BB@B@BABA@A@ABABDBFDFBBB@BBBBFBBB@B@B@B@F@DBDBDBB@BB@DH@BABFB@B@@BB@BBB@BBB@DBBBBBDDDBBBBBB@@BB@B@BBBBBBB@B@@BB@BBB@BBB@B@B@BBB@B@BBB@BBBBBBB@BBB@B@DB@B@B@B@DAB@BAB@BAB@B@B@BB@BBB@@BB@BBFDDBB@BBB@B@@AB@B@B@B@B@B@B@B@BBB@@BB@B@B@B@@BB@B@B@@BB@B@BAB@FABAB@@BB@B@B@BBB@B@@BB@B@BBB@BBBBB@@BBBBB@B@BA@@B@BB@@BB@@BB@B@@BB@BBB@@B@BF@DBDBD@BBFDDBDBBBB@B@BABADAB@FBB@BAB@LKB@B@B@B@B@D@BBBBD@D@DBD@B@B@D@BBB@B@B@BAD@BAD@B@DBB@B@B@@BDDBBB@B@@AB@BBB@B@B@B@F@B@D@F@D@DBD@B@B@B@B@B@BBD@DBD@BBD@B@B@BAB@B@B@B@BBB@B@BABBB@@AB@B@@B@BB@B@@BB@@BB@BBD@B@D@F@D@FAB@D@D@B@D@B@B@B@@BD@BAD@BBD@D@F@F@FBD@B@DABABABA@C@EBA@ABAB@BABAACAADABABAB@BA@AB@BABAB@BADEB@@AB@FEBABABABAD@BAB@BABA@A@ABA@ABABA@ABAB@BABA"],["@@@BB@@AA@"],["@@@AABB@"]],"encodeOffsets":[[[128250,44218]],[[128756,43897]],[[127866,43990]]]}}],"UTF8Encoding":true});}));