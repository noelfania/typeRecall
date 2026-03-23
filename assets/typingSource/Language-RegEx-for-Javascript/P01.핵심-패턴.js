// ============================================================
// P01. JavaScript용 정규식[regular expression] 핵심 패턴
// ============================================================

// 리터럴[literal] / 생성자[constructor]
/hello/gi.test('Hello World');                 // true
new RegExp('hello', 'gi').test('HELLO');       // true

// 플래그[flag]
'aAa'.match(/a/g);   // ['a', 'a']
'aAa'.match(/a/gi);  // ['a', 'A', 'a']

// 앵커[anchor]
'Hello World'.match(/^Hello/);  // ['Hello']
'Hello World'.match(/World$/);  // ['World']

// 문자 클래스[character class]
'ab12'.match(/\d/g);  // ['1', '2']
'ab12'.match(/\w/g);  // ['a', 'b', '1', '2']
'a b'.match(/\s/g);   // [' ']

// 문자셋[character set]
'grey gray'.match(/gr[ae]y/g);   // ['grey', 'gray']
'hello123'.match(/[^a-z]+/g);    // ['123']

// 수량자[quantifier]
'gry'.match(/gra*y/);        // ['gry']
'gray'.match(/gra?y/);       // ['gray']
'graaay'.match(/gra+y/);     // ['graaay']
'graay'.match(/gra{2}y/);    // ['graay']

// 그룹[group]
'2026-03-18'.match(/(\d{4})-(\d{2})-(\d{2})/);
// ['2026-03-18', '2026', '03', '18']

// 네임드 그룹[named group]
var dateMatch = '2026-03-18'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
dateMatch.groups.year;   // '2026'
dateMatch.groups.month;  // '03'
dateMatch.groups.day;    // '18'

// 전방탐색[lookahead]
'100px 200em 50px'.match(/\d+(?=px)/g);  // ['100', '50']

// 후방탐색[lookbehind]
'$100 £200 $50'.match(/(?<=\$)\d+/g);    // ['100', '50']

// replace
'2026-03-18'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
// '18/03/2026'

// 실용 패턴[practical pattern] - 이메일[email]
var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
emailRe.test('user@example.com');  // true
emailRe.test('invalid@');          // false

// 실용 패턴[practical pattern] - 전화번호[phone number]
var phoneRe = /\d{2,3}[-.\s]\d{3,4}[-.\s]\d{4}/;
phoneRe.test('010-1234-5678'); // true

// 실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기
var multiLineSource = `functionAAAAA(asdf,
  qwer,
  zxcv)`;
multiLineSource.match(/functionAAAAA\([\s\S]*?\)/);
// ['functionAAAAA(asdf,\n  qwer,\n  zxcv)']
