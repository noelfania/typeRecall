// ============================================================
// P01. 변수 선언[variable declaration] / 연산자[operator] / 구조분해[destructuring]
// 연습: Firefox 콘솔에서 섹션 단위로 복사해서 타이핑
// ============================================================

/*** 변수 스코프[variable scope] ***/
var varA = 'function-scoped';      // 함수 스코프[function scope], undefined 호이스팅[hoisting]
let letA = 'block-scoped';         // 블록 스코프[block scope], TDZ (선언 전 접근 → ReferenceError)
// const constA = 'read-only';     // 재할당 불가[immutable binding] (속성은 변경 가능)

var userObj = { name: 'kim' };
userObj.name = 'lee';   // ✅ 속성 변경[property mutation] 가능
// userObj = {};        // ❌ 재할당[reassignment] 불가 (const일 경우)


/*** 지수[exponentiation] / 논리 할당 연산자[logical assignment operator] ***/
2 ** 10          // 1024
2 ** 3 ** 2      // 512 (우→좌: 3**2=9, 2**9=512)

var laA = 1;
laA &&= 99;      // truthy → 재할당[assignment]: 99

var laB = 0;
laB ||= 99;      // falsy → 재할당[assignment]: 99

var laC = null;
laC ??= 99;      // null|undefined → 재할당[assignment]: 99


/*** Nullish 병합[nullish coalescing] (??) ***/
null      ?? 'default'   // 'default'
undefined ?? 'default'   // 'default'
0         ?? 'default'   // 0   (falsy지만 null이 아님)
''        ?? 'default'   // ''  (falsy지만 null이 아님)


/*** 옵셔널 체이닝[optional chaining] (?.) ***/
var safeObj = { inner: { val: 42 } };
safeObj?.inner?.val       // 42
safeObj?.missing?.val     // undefined (단락 평가[short-circuit evaluation], 에러 없음)
safeObj?.method?.()       // undefined (메서드 부재 시 안전 호출)


/*** 스프레드 연산자[spread operator] ***/
var mergedObj = { x: 1, ...{ y: 2, z: 3 } };   // { x: 1, y: 2, z: 3 }
var mergedArr = [1, ...[2, 3]];                 // [1, 2, 3]


/*** 배열 구조분해[array destructuring] ***/
var [adA, adB] = [10, 20];           // adA=10, adB=20
var [adC, , adD] = [1, 2, 3];        // adC=1, adD=3 (두 번째 건너뜀)
var [adE, ...adRest] = [1, 2, 3];    // adE=1, adRest=[2, 3]

// 값 교환[swap]
var [swapA, swapB] = [100, 200];
[swapA, swapB] = [swapB, swapA];     // swapA=200, swapB=100


/*** 객체 구조분해[object destructuring] ***/
var { name: odName, age: odAge = 30 } = { name: 'kim' };
// odName='kim', odAge=30 (기본값[default value] 적용)

var { a: odA, b: odB } = { a: 1, b: 2 };
// odA=1, odB=2 (키→변수 이름 변경[aliasing])

var { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };
// odP=1, odRest={ q:2, r:3 } (나머지 수집[rest collection])


/*** 중첩 구조분해[nested destructuring] ***/
var nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };
var { id: nestedId, addr: { city: nestedCity } } = nestedSrc;
// nestedId=7, nestedCity='Seoul'


/*** 파라미터 구조분해[parameter destructuring] ***/
function showUser({ name, role = 'user' }) {
  return `${name}(${role})`;
}
showUser({ name: 'kim' });                // 'kim(user)'
showUser({ name: 'lee', role: 'admin' }); // 'lee(admin)'


/*** for...of + 구조분해[destructuring] ***/
var teamList = [
  { name: 'kim', score: 90 },
  { name: 'lee', score: 80 },
];
for (var { name: tName, score: tScore } of teamList) {
  console.log(tName, tScore);
}
// kim 90
// lee 80


/*** 동적 키 구조분해[computed property destructuring] ***/
var dynKey = 'color';
var { [dynKey]: dynVal } = { color: 'blue' };
// dynVal='blue'


/*** 삼항 연산자 중첩[nested ternary operator] ***/
function grade(score) {
  return score >= 90 ? 'A'
       : score >= 80 ? 'B'
       : score >= 70 ? 'C'
       :               'F';
}
grade(85)  // 'B'
grade(65)  // 'F'
