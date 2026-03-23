// ============================================================
// P02. 배열[array]
// ============================================================

/*** 배열 생성[array creation] ***/
Array.of(1, 2, 3)                        // [1, 2, 3]
Array.from('ABC')                        // ['A', 'B', 'C']
Array.from({ length: 3 }, (_, i) => i)  // [0, 1, 2]
Array.from(new Set([1, 2, 2, 3]))        // [1, 2, 3] (중복 제거[deduplication])
Array.isArray([1, 2])                    // true


/*** 기본 접근[access] / 변환[conversion] ***/
[9, 8, 7].at(0)     // 9
[9, 8, 7].at(-1)    // 7 (음수 인덱스[negative index])
[1, 2, 'a'].toString()       // '1,2,a'
['A', 'B', 'C'].join(' - ')  // 'A - B - C'


/*** 평탄화[flatten] ***/
[1, [2, [3]]].flat()           // [1, 2, [3]]  (기본 깊이[depth] 1)
[1, [2, [3]]].flat(Infinity)   // [1, 2, 3]    (전체 깊이[full depth])
['A B', 'C D'].flatMap(e => e.split(' '))  // ['A', 'B', 'C', 'D']


/*** 원본 변경[mutation] - 추가/제거 ***/
var mutPush = [1, 2];
mutPush.push(3, 4);   // 반환: 4 (길이[length]), mutPush=[1,2,3,4]

var mutPop = [1, 2, 3];
mutPop.pop();          // 반환: 3, mutPop=[1,2]

var mutUnshift = [3, 4];
mutUnshift.unshift(1, 2);  // 반환: 4, mutUnshift=[1,2,3,4]

var mutShift = [1, 2, 3];
mutShift.shift();           // 반환: 1, mutShift=[2,3]


/*** 원본 변경[mutation] - 정렬[sort] ***/
var mutSort = [10, 1, 21, 2];
mutSort.sort((a, b) => a - b);  // [1, 2, 10, 21] 오름차순[ascending]
mutSort.reverse();               // [21, 10, 2, 1]


/*** 원본 유지[immutable] (ES2023 - toSorted / toReversed / with) ***/
var immArr = [3, 1, 2];
immArr.toSorted((a, b) => a - b)  // [1, 2, 3] (원본 유지[non-mutating])
immArr.toReversed()               // [2, 1, 3] (원본 유지[non-mutating])
immArr.with(1, 99)                // [3, 99, 2] (인덱스1 값 교체[replace], 원본 유지)
immArr                            // [3, 1, 2]


/*** splice vs slice ***/
var spliceArr = ['A', 'B', 'C', 'D', 'E'];
spliceArr.splice(1, 2);       // 반환[return]: ['B','C'], spliceArr=['A','D','E']
spliceArr.splice(1, 0, 'X');  // 삽입[insert]: spliceArr=['A','X','D','E']

['A', 'B', 'C', 'D'].slice(1, 3)   // ['B', 'C'] (원본 유지[non-mutating])
['A', 'B', 'C', 'D'].slice(-2)     // ['C', 'D']


/*** fill / copyWithin ***/
[0, 0, 0].fill(7)            // [7, 7, 7]
[1, 2, 3, 4].fill(0, 1, 3)  // [1, 0, 0, 4]
[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5] (index3부터 index0에 덮어씀[overwrite])


/*** 검색[search] ***/
[10, 20, 30].indexOf(20)               // 1
[10, 20, 30].includes(20)              // true
[1, 2, 3, 4].find(e => e > 2)         // 3 (첫 번째 일치[match] 요소)
[1, 2, 3, 4].findIndex(e => e > 2)    // 2 (첫 번째 일치[match] 인덱스)
[1, 2, 3, 4].findLast(e => e > 2)     // 4 (마지막 일치[match] 요소)
[1, 2, 3, 4].findLastIndex(e => e > 2) // 3


/*** 조건 검사[predicate] ***/
[2, 4, 6].every(e => e % 2 === 0)   // true  (모두 충족[all pass])
[1, 2, 3].some(e => e > 2)          // true  (하나라도 충족[any pass])
[1, 2, 3].some(e => e > 10)         // false


/*** 변환[transformation] ***/
[1, 2, 3].map(e => e * 2)              // [2, 4, 6]
[1, 2, 3, 4].filter(e => e % 2 === 0) // [2, 4]
[1, 2, 3].map(e => e ** 2)            // [1, 4, 9]


/*** 누산[accumulation] (reduce) ***/
[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)  // 10 (합계[sum])
[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)  // 10 (최대값[max])

// 빈도 카운트[frequency count]
var countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];
countSrc.reduce((acc, key) => {
  acc[key] ??= 0;
  acc[key]++;
  return acc;
}, {});
// { A:3, B:2, C:1 }

// 그룹핑[grouping]
var groupSrc = [
  { type: 'fruit', name: 'apple' },
  { type: 'veg',   name: 'carrot' },
  { type: 'fruit', name: 'banana' },
];
groupSrc.reduce((acc, item) => {
  acc[item.type] ??= [];
  acc[item.type].push(item.name);
  return acc;
}, {});
// { fruit: ['apple','banana'], veg: ['carrot'] }


/*** 이터레이터[iterator] (entries / keys / values) ***/
var iterSrc = ['X', 'Y', 'Z'];
for (var [idx, val] of iterSrc.entries()) {
  console.log(idx, val);
}
// 0 'X'
// 1 'Y'
// 2 'Z'

[...iterSrc.keys()]    // [0, 1, 2]
[...iterSrc.values()]  // ['X', 'Y', 'Z']


/*** concat / 스프레드[spread] 비교 ***/
[1, 2].concat([3, 4], 5)   // [1, 2, 3, 4, 5]
[...[1, 2], ...[3, 4], 5]  // [1, 2, 3, 4, 5]
