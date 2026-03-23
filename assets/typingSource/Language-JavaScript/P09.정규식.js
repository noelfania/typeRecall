// ============================================================
// P09. 정규식[regular expression / RegEx]
// ============================================================

/*** 생성[creation] - 리터럴[literal] vs 생성자[constructor] ***/
var reLiteral = /hello/gi;                    // 리터럴[literal] 표기 (컴파일 타임)
var reConstructor = new RegExp('hello', 'gi'); // 생성자[constructor] (런타임, 동적 패턴)

reLiteral.test('Hello World')   // true
reConstructor.test('HELLO')     // true


/*** 플래그[flag] ***/
// g  → 전역 검색[global]        - 모든 매치 반환
// i  → 대소문자 무시[ignore case]
// m  → 멀티라인[multiline]      - ^ $ 이 각 줄에 적용
// s  → dotAll                   - . 이 줄바꿈[\n]도 매치
// u  → 유니코드[unicode]        - 유니코드 완전 지원
// d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공

'aBcDeF'.match(/[a-z]/g)   // ['a', 'c', 'e']       (g: 전체)
'aBcDeF'.match(/[a-z]/gi)  // ['a', 'B', 'c', 'D', 'e', 'F'] (i: 대소문자 무시)

'line1\nline2'.match(/^\w+/m)    // ['line1'] (m 없으면 첫 줄만)
'line1\nline2'.match(/^\w+/gm)   // ['line1', 'line2'] (m: 각 줄의 ^)

'hello\nworld'.match(/hello.world/s)  // ['hello\nworld'] (s: . 이 \n 매치)


/*** 앵커[anchor] ***/
'Hello World'.match(/^Hello/)   // ['Hello']  (^ 문자열 시작[start of string])
'Hello World'.match(/World$/)   // ['World']  ($ 문자열 끝[end of string])

'cat cats'.match(/\bcat\b/g)    // ['cat']     (\b 단어 경계[word boundary])
'cat cats'.match(/cat\B/g)      // ['cat']     (\B 단어 경계가 아님[non-word boundary])


/*** 문자 클래스[character class] ***/
'a1 b2'.match(/\d/g)   // ['1', '2']       (\d 숫자[digit] 0-9)
'a1 b2'.match(/\D/g)   // ['a', ' ', 'b', ' '] (\D 비숫자[non-digit])
'a1 b2'.match(/\w/g)   // ['a','1','b','2']    (\w 단어 문자[word char]: [a-zA-Z0-9_])
'a1 b2'.match(/\W/g)   // [' ', ' ']           (\W 비단어[non-word char])
'a1 b2'.match(/\s/g)   // [' ', ' ']           (\s 공백[whitespace])
'a1 b2'.match(/\S/g)   // ['a','1','b','2']    (\S 비공백[non-whitespace])
'a1.b'.match(/./g)     // ['a','1','.','b']    (. 임의의 한 문자[any char except \n])


/*** 문자셋[character set] ***/
'grey gray'.match(/gr[ae]y/g)    // ['grey', 'gray']    ([ae] a 또는 e)
'hello123'.match(/[a-z]+/g)      // ['hello']           ([a-z] 범위[range])
'hello123'.match(/[^a-z]+/g)     // ['123']             ([^] 부정[negation])
'hello123'.match(/[a-zA-Z0-9]+/g) // ['hello123']       (복수 범위)


/*** 수량자[quantifier] ***/
'graaay'.match(/gra*y/)    // null   (a*: 0번 이상, y 바로 앞에 없어서 null)
'gry'.match(/gra*y/)       // ['gry']   (a*: 0번 이상)
'gray'.match(/gra?y/)      // ['gray']  (a?: 0 또는 1번)
'gry'.match(/gra?y/)       // ['gry']   (a?: 0 또는 1번)
'gray'.match(/gra+y/)      // ['gray']  (a+: 1번 이상)
'gry'.match(/gra+y/)       // null      (a+: 1번 이상, 0번이라 null)

'graaay'.match(/gra{2}y/)   // null     ({2}: 정확히 2번)
'graay'.match(/gra{2}y/)    // ['graay'] ({2}: 정확히 2번)
'graaay'.match(/gra{2,}y/)  // ['graaay'] ({2,}: 2번 이상)
'graaay'.match(/gra{2,3}y/) // ['graaay'] ({2,3}: 2~3번)


/*** 탐욕적[greedy] vs 게으른[lazy] 수량자 ***/
'<a><b><c>'.match(/<.+>/)    // ['<a><b><c>'] (greedy: 최대한 매치)
'<a><b><c>'.match(/<.+?>/)   // ['<a>']       (lazy: 최소한 매치, ? 추가)
'<a><b><c>'.match(/<.*?>/)   // ['<a>']       (lazy)


/*** 그룹[group] ***/
// (x)    캡처 그룹[capturing group]     - 매치 + 기억
// (?:x)  비캡처 그룹[non-capturing group] - 매치만, 기억 안함
// (?<name>x) 네임드 캡처 그룹[named capturing group]

'2024-03-18'.match(/(\d{4})-(\d{2})-(\d{2})/)
// ['2024-03-18', '2024', '03', '18', index:0, ...]
// [0]=전체, [1]=year, [2]=month, [3]=day

'grey'.match(/gr(?:a|e)y/)   // ['grey'] (비캡처: 그룹 인덱스 없음)
'grey'.match(/gr(a|e)y/)     // ['grey', 'e'] (캡처: [1]='e')

// 네임드 캡처 그룹[named capturing group]
var dateMatch = '2024-03-18'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
dateMatch.groups.year    // '2024'
dateMatch.groups.month   // '03'
dateMatch.groups.day     // '18'


/*** 역참조[backreference] ***/
'aabbcc'.match(/(.)\1/)   // ['aa', 'a']  (\1 = 첫 번째 캡처 그룹 재참조)
'abab'.match(/(ab)\1/)    // ['abab', 'ab']


/*** 전방탐색[lookahead] / 후방탐색[lookbehind] ***/
// (?=x)  긍정 전방탐색[positive lookahead]  - x 앞에 있는 것
// (?!x)  부정 전방탐색[negative lookahead]  - x 앞에 없는 것
// (?<=x) 긍정 후방탐색[positive lookbehind] - x 뒤에 있는 것
// (?<!x) 부정 후방탐색[negative lookbehind] - x 뒤에 없는 것

'100px 200em 50px'.match(/\d+(?=px)/g)    // ['100', '50']   (px 앞의 숫자만)
'100px 200em 50px'.match(/\d+(?!px)/g)    // ['200', ...] (px 아닌 것 앞의 숫자)

'$100 £200 $50'.match(/(?<=\$)\d+/g)      // ['100', '50']   ($ 뒤의 숫자만)
'$100 £200 $50'.match(/(?<!\$)\d+/g)      // ['200']         ($ 아닌 것 뒤의 숫자)


/*** 정규식 메서드[regex methods] ***/
var re1 = /\d+/g;
var str1 = 'abc 123 def 456';

re1.test('abc 123')         // true  (패턴 존재 여부[existence])
str1.search(/\d+/)          // 4     (첫 번째 매치 인덱스[index], 없으면 -1)
str1.match(/\d+/g)          // ['123', '456']
str1.replace(/\d+/g, 'N')   // 'abc N def N'

// matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환
var re2 = /(\d+)/g;
[...str1.matchAll(re2)].map(m => m[1])  // ['123', '456']

// split
'one1two2three'.split(/\d/)  // ['one', 'two', 'three']


/*** replace + 캡처 그룹 참조 ***/
// $1 $2... = 캡처 그룹[capture group] 번호 참조
// $<name>  = 네임드 그룹[named group] 참조
// $&       = 매치 전체[entire match]
// $`       = 매치 이전[before match]
// $'       = 매치 이후[after match]

'2024-03-18'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')  // '18/03/2024'
'2024-03-18'.replace(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/, '$<d>/$<m>/$<y>') // '18/03/2024'

'hello'.replace(/(\w+)/, '[$&]')  // '[hello]' ($&: 전체 매치)


/*** 실용 패턴[practical pattern] ***/
// 이메일[email] 검증
var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
emailRe.test('user@example.com')   // true
emailRe.test('invalid@')           // false

// 전화번호[phone number]
var phoneRe = /\d{2,3}[-.\s]\d{3,4}[-.\s]\d{4}/;
phoneRe.test('010-1234-5678')  // true
phoneRe.test('02.123.4567')    // true

// 날짜[date] YYYY-MM-DD
var dateRe = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
dateRe.test('2024-03-18')  // true
dateRe.test('2024-13-01')  // false

// URL 프로토콜 추출
'https://example.com'.match(/^(https?):\/\//)
// ['https://', 'https']

// 단어 경계[word boundary]로 정확히 매치
function hasWord(str, word) {
  return new RegExp(`\\b${word}\\b`, 'i').test(str);
}
hasWord('Thanks for everything', 'thanks')     // true
hasWord('Thanksgiving is coming', 'thanks')    // false
