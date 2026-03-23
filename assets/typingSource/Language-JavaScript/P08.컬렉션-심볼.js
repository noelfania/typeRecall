// ============================================================
// P08. Map / Set / WeakMap / WeakSet / Symbol
// ============================================================

/*** Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음) ***/
var mapA = new Map();
mapA.set('name', 'kim');
mapA.set(42, 'forty-two');
mapA.set({ id: 1 }, 'objKey');  // 객체도 키[key] 가능
mapA.get('name')    // 'kim'
mapA.get(42)        // 'forty-two'
mapA.has('name')    // true
mapA.size           // 3
mapA.delete('name');
mapA.size           // 2


/*** Map 생성 - 배열[array]로 초기화[initialize] ***/
var mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);
mapB.get('b')   // 2


/*** Map 순회[iteration] ***/
for (var [k, v] of mapB) {
  console.log(k, v);
}
// a 1
// b 2
// c 3

[...mapB.keys()]    // ['a', 'b', 'c']
[...mapB.values()]  // [1, 2, 3]
[...mapB.entries()] // [['a',1], ['b',2], ['c',3]]

mapB.forEach((v, k) => console.log(k, v));
// a 1 / b 2 / c 3


/*** Map ↔ Object 변환[conversion] ***/
var mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));
// Map { 'x' => 10, 'y' => 20 }

Object.fromEntries(mapFromObj)
// { x: 10, y: 20 }


/*** WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable]) ***/
var weakMapA = new WeakMap();
var wmKey = {};
weakMapA.set(wmKey, 'private-data');
weakMapA.get(wmKey)   // 'private-data'
weakMapA.has(wmKey)   // true
// wmKey = null; → GC 수거[garbage collection] 시 WeakMap에서도 자동 제거


/*** Set - 중복 없는 값 컬렉션[unique value collection] ***/
var setA = new Set([1, 2, 3, 2, 1]);  // 중복 자동 제거[automatic deduplication]
setA.size    // 3
setA.has(2)  // true
setA.add(4);
setA.delete(1);
[...setA]    // [2, 3, 4]


/*** Set 활용 - 배열 중복 제거[array deduplication] ***/
var dupArr = [1, 2, 2, 3, 3, 3, 4];
var uniqArr = [...new Set(dupArr)];  // [1, 2, 3, 4]


/*** Set 순회[iteration] ***/
var setB = new Set(['X', 'Y', 'Z']);
for (var item of setB) { console.log(item); }
// X / Y / Z


/*** Set 집합 연산[set operation] ***/
var setX = new Set([1, 2, 3, 4]);
var setY = new Set([3, 4, 5, 6]);

var union        = new Set([...setX, ...setY]);                          // 합집합[union]: {1,2,3,4,5,6}
var intersection = new Set([...setX].filter(v =>  setY.has(v)));         // 교집합[intersection]: {3,4}
var difference   = new Set([...setX].filter(v => !setY.has(v)));         // 차집합[difference]: {1,2}

[...union]        // [1, 2, 3, 4, 5, 6]
[...intersection] // [3, 4]
[...difference]   // [1, 2]


/*** WeakSet - 약한 참조[weak reference] 객체 집합 ***/
var weakSetA = new WeakSet();
var wsObj = { id: 1 };
weakSetA.add(wsObj);
weakSetA.has(wsObj)   // true
// wsObj = null; → GC 수거[garbage collection] 시 자동 제거


/*** Symbol - 고유 식별자[unique identifier] ***/
var symA = Symbol('description');
var symB = Symbol('description');
symA === symB            // false (항상 고유[always unique])
symA.toString()          // 'Symbol(description)'
symA.description         // 'description'
typeof symA              // 'symbol'


/*** Symbol을 객체 키[object key]로 사용 ***/
var symId = Symbol('id');
var symRole = Symbol('role');
var symObj = {
  [symId]: 42,
  [symRole]: 'admin',
  name: 'kim',
};
symObj[symId]           // 42
symObj[symRole]         // 'admin'
Object.keys(symObj)     // ['name']  (Symbol은 열거[enumeration] 안됨)
Object.getOwnPropertySymbols(symObj)  // [Symbol(id), Symbol(role)]


/*** Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능) ***/
var globalSym1 = Symbol.for('shared');
var globalSym2 = Symbol.for('shared');
globalSym1 === globalSym2  // true (같은 키면 동일 심볼)
Symbol.keyFor(globalSym1)  // 'shared'


/*** Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol]) ***/
var rangeObj = {
  from: 1, to: 3,
  [Symbol.iterator]() {
    var cur = this.from, last = this.to;
    return {
      next() {
        return cur <= last
          ? { value: cur++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
[...rangeObj]  // [1, 2, 3]


/*** Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion]) ***/
var customNum = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'forty-two';
    return true;  // 기본값[default hint]
  }
};
+customNum            // 42
`${customNum}`        // 'forty-two'
customNum + ''        // 'true'
