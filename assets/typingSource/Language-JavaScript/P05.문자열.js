// ============================================================
// P05. 문자열[string]
// ============================================================

/*** 기본 접근[basic access] ***/
var str1 = 'Hello, World!';
str1.length        // 13
str1[0]            // 'H'
str1.at(0)         // 'H'
str1.at(-1)        // '!'  (음수 인덱스[negative index])
str1.charAt(7)     // 'W'
str1.charCodeAt(0) // 72


/*** 대소문자 변환[case conversion] ***/
'hello'.toUpperCase()  // 'HELLO'
'WORLD'.toLowerCase()  // 'world'


/*** 검색[search] ***/
str1.indexOf('o')         // 4  (첫 번째 위치)
str1.lastIndexOf('o')     // 8  (마지막 위치)
str1.indexOf('xyz')       // -1 (없으면 -1)
str1.includes('World')    // true
str1.startsWith('Hello')  // true
str1.endsWith('!')        // true
str1.search(/[A-Z]/)      // 0  (정규식[regex], 첫 번째 매치 인덱스)


/*** 추출[extraction] ***/
'Mozilla'.substring(2, 5)  // 'zil' (startIndex, endIndex)
'Mozilla'.slice(2, 5)      // 'zil'
'Mozilla'.slice(-5)        // 'ozilla' (음수 인덱스[negative index])
'Mozilla'.slice(-5, -2)    // 'ozil'


/*** 분리[split] ***/
'a,b,c'.split(',')       // ['a', 'b', 'c']
'a,b,c'.split(',', 2)    // ['a', 'b'] (limit)
'hello'.split('')         // ['h', 'e', 'l', 'l', 'o']


/*** 반복[repeat] / 패딩[padding] / 공백 제거[trim] ***/
'ab'.repeat(3)              // 'ababab'
'5'.padStart(4, '0')        // '0005'
'5'.padEnd(4, '0')          // '5000'
'  trim me  '.trim()        // 'trim me'
'  trim me  '.trimStart()   // 'trim me  '
'  trim me  '.trimEnd()     // '  trim me'


/*** 치환[replace] ***/
'aabbcc'.replace('b', 'X')      // 'aXbcc'  (첫 번째만)
'aabbcc'.replaceAll('b', 'X')   // 'aaXXcc' (전체)
'aabbcc'.replace(/b/g, 'X')     // 'aaXXcc' (정규식[regex] 플래그 g)

// 캡처 그룹[capture group] 참조 ($1, $2, ...)
'2024-03-18'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')  // '18/03/2024'


/*** 정규식 매치[regex match] ***/
var str2 = 'cat bat sat';
str2.match(/[bcs]at/g)           // ['cat', 'bat', 'sat']
str2.replace(/[bcs]at/g, 'hat')  // 'hat hat hat'

// matchAll - 이터레이터[iterator] 반환
var regexAll = /(\d+)/g;
var str3 = 'abc 123 def 456';
[...str3.matchAll(regexAll)].map(m => m[0])  // ['123', '456']


/*** 연결[concatenation] ***/
'Hello'.concat(', ', 'World', '!')  // 'Hello, World!'


/*** 템플릿 리터럴[template literal] ***/
var tplName = 'kim';
var tplScore = 95;
`이름: ${tplName}, 점수: ${tplScore}점`  // '이름: kim, 점수: 95점'
`${tplScore >= 90 ? '우수' : '보통'}`   // '우수'

// 멀티라인[multiline]
var multiLine = `첫 번째 줄
두 번째 줄`;
multiLine  // '첫 번째 줄\n두 번째 줄'


/*** String.raw - 이스케이프 비처리[raw string] ***/
String.raw`C:\Users\name`     // 'C:\\Users\\name'
String.raw`\n \t \r`          // '\\n \\t \\r'


/*** 문자 코드[character code] 변환 ***/
String.fromCharCode(65, 66, 67)  // 'ABC'
'A'.charCodeAt(0)                // 65


/*** 이터러블[iterable] - 스프레드[spread] / for...of ***/
[...'ABC']  // ['A', 'B', 'C']
for (var ch of 'hi') { console.log(ch); }
// h
// i


/*** 숫자→문자열 변환[number-to-string conversion] ***/
(255).toString(16)   // 'ff'  (16진수[hexadecimal])
(255).toString(2)    // '11111111' (2진수[binary])
(3.14159).toFixed(2) // '3.14'
