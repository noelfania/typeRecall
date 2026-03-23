// ============================================================
// P03. 객체[object]
// ============================================================

/*** 기본 생성[creation] / 접근[access] ***/
var baseObj = { name: 'kim', age: 20 };
baseObj.name     // 'kim'
baseObj['age']   // 20

// 단축 속성명[shorthand property]
var oName = 'lee', oAge = 30;
var shortObj = { oName, oAge };  // { oName: 'lee', oAge: 30 }


/*** Object.assign - 얕은 병합[shallow merge] ***/
var assignTarget = { a: 1 };
Object.assign(assignTarget, { b: 2 }, { c: 3 });
// assignTarget = { a:1, b:2, c:3 } (원본 변경[mutation])

var cloneObj = Object.assign({}, assignTarget);  // 얕은 복사[shallow copy]


/*** 스프레드[spread]로 병합[merge] / 복사[copy] ***/
var src1 = { a: 1, b: 2 };
var src2 = { b: 9, c: 3 };
var spreadMerge = { ...src1, ...src2 };  // { a:1, b:9, c:3 } (나중이 우선[last-wins])
var spreadClone = { ...src1 };           // { a:1, b:2 } (얕은 복사[shallow copy])


/*** Object.entries / keys / values ***/
var sampleObj = { a: 1, b: 2, c: 3 };
Object.keys(sampleObj)    // ['a', 'b', 'c']
Object.values(sampleObj)  // [1, 2, 3]
Object.entries(sampleObj) // [['a',1], ['b',2], ['c',3]]


/*** Object.fromEntries - 배열[array]→객체[object] / Map→객체[object] ***/
Object.fromEntries([['x', 10], ['y', 20]])  // { x:10, y:20 }

// 값 변환[value transformation] 패턴
var doubleVals = Object.fromEntries(
  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])
);
// { a:2, b:4 }

// Map → Object
var mapToObj = new Map([['p', 1], ['q', 2]]);
Object.fromEntries(mapToObj)  // { p:1, q:2 }


/*** Object.hasOwn - 직접 소유 속성[own property] 확인 ***/
var hasObj = { x: 1 };
Object.hasOwn(hasObj, 'x')        // true  (직접 소유[own])
Object.hasOwn(hasObj, 'toString') // false (프로토타입 상속[prototype inheritance])
'x'        in hasObj              // true
'toString' in hasObj              // true  (상속[inherited] 포함)


/*** Object.create - 프로토타입[prototype] 지정 ***/
var protoBase = { greet() { return `Hi, ${this.name}`; } };
var protoChild = Object.create(protoBase);
protoChild.name = 'kim';
protoChild.greet()  // 'Hi, kim'

Object.create(null)  // 프로토타입[prototype] 없는 순수 딕셔너리[plain dictionary]


/*** Object.freeze / seal ***/
var frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });
frozenObj.val = 99;     // 무시됨 (strict 모드: TypeError)
frozenObj.val           // 1
frozenObj.inner.n = 99; // 얕은 동결[shallow freeze] → 중첩 객체는 변경 가능
frozenObj.inner.n       // 99

var sealedObj = Object.seal({ val: 1 });
sealedObj.val = 99;     // ✅ 값 변경[value mutation] 가능
delete sealedObj.val;   // ❌ 삭제[deletion] 불가
sealedObj.val           // 99


/*** Object.is - 동일성 비교[identity comparison] (=== 보완) ***/
Object.is(NaN, NaN)    // true  (=== 는 false)
Object.is(0, -0)       // false (=== 는 true)
Object.is({ a: 1 }, { a: 1 })  // false (다른 참조[reference])

var refSame = { a: 1 };
Object.is(refSame, refSame)     // true


/*** Computed property - 동적 키[dynamic key] ***/
var prefix = 'item';
var dynKeyObj = {
  [prefix + 1]: 'a',
  [prefix + 2]: 'b',
};
// { item1:'a', item2:'b' }


/*** Getter / Setter - 접근자 프로퍼티[accessor property] ***/
var tempConv = {
  _celsius: 0,
  get fahrenheit() { return this._celsius * 9 / 5 + 32; },
  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },
};
tempConv.fahrenheit = 212;
tempConv._celsius   // 100
tempConv.fahrenheit // 212


/*** 이터러블 객체[iterable object] (Symbol.iterator 구현) ***/
var iterableRange = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    var cur = this.from;
    var last = this.to;
    return {
      next() {
        return cur <= last
          ? { value: cur++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
[...iterableRange]  // [1, 2, 3]


/*** in 연산자[in operator] / delete ***/
'name' in baseObj    // true
delete baseObj.age;
'age' in baseObj     // false


/*** 속성 열거[property enumeration] (for...in) ***/
var enumObj = { a: 1, b: 2, c: 3 };
for (var key in enumObj) {
  console.log(key, enumObj[key]);
}
// a 1
// b 2
// c 3
