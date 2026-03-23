// ============================================================
// P10. Proxy / Reflect
// Proxy: 객체 조작을 가로채는[intercept] 래퍼[wrapper]
// Reflect: 기본 동작[default behavior]을 수행하는 내장 객체
// ============================================================

/*** 기본 구조[basic structure] ***/
// new Proxy(target, handler)
// target  : 가로챌 대상 객체[target object]
// handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)

var emptyProxy = new Proxy({ a: 1 }, {});
emptyProxy.a   // 1  (트랩 없음 → target에 그대로 전달[passthrough])


/*** get 트랩[get trap] - 속성 읽기[property access] 가로채기 ***/
var getTarget = { name: 'kim', age: 30 };
var getProxy = new Proxy(getTarget, {
  get(target, prop, receiver) {
    // prop이 없으면 기본값[default value] 반환
    return prop in target ? Reflect.get(target, prop, receiver) : `[${prop} 없음]`;
  }
});
getProxy.name    // 'kim'
getProxy.job     // '[job 없음]'


/*** set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기 ***/
var setProxy = new Proxy({}, {
  set(target, prop, value, receiver) {
    // 유효성 검사[validation]: age는 양수 정수만 허용
    if (prop === 'age') {
      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
        throw new TypeError(`age는 양수 정수[positive integer]여야 합니다`);
      }
    }
    return Reflect.set(target, prop, value, receiver);  // 기본 동작 수행
  }
});
setProxy.name = 'lee';   // 'lee'
setProxy.age = 25;       // 25
// setProxy.age = -1;    // ❌ TypeError 발생


/*** has 트랩[has trap] - in 연산자[in operator] 가로채기 ***/
var rangeProxy = new Proxy({ min: 1, max: 100 }, {
  has(target, prop) {
    // 숫자면 범위 안에 있는지 확인[range check]
    var num = Number(prop);
    if (!isNaN(num)) return num >= target.min && num <= target.max;
    return prop in target;
  }
});
50  in rangeProxy   // true  (범위 내)
150 in rangeProxy   // false (범위 밖)
'min' in rangeProxy // true  (속성 존재)


/*** deleteProperty 트랩 - delete 연산자[delete operator] 가로채기 ***/
var deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {
  deleteProperty(target, prop) {
    // _ 로 시작하는 속성은 삭제 금지[deletion forbidden]
    if (prop.startsWith('_')) {
      throw new Error(`프라이빗 속성[private property] '${prop}'은 삭제 불가`);
    }
    return Reflect.deleteProperty(target, prop);
  }
});
delete deleteProxy.pub    // true
// delete deleteProxy._priv  // ❌ Error 발생


/*** apply 트랩[apply trap] - 함수 호출[function call] 가로채기 ***/
function multiply(a, b) { return a * b; }

var applyProxy = new Proxy(multiply, {
  apply(target, thisArg, args) {
    console.log(`호출[call]: multiply(${args})`);  // 로깅[logging]
    return Reflect.apply(target, thisArg, args);
  }
});
applyProxy(3, 4)   // 로그: '호출[call]: multiply(3,4)', 반환: 12


/*** construct 트랩[construct trap] - new 연산자[new operator] 가로채기 ***/
function Person(name) { this.name = name; }

var constructProxy = new Proxy(Person, {
  construct(target, args, newTarget) {
    console.log(`인스턴스 생성[instantiation]: ${args[0]}`);
    var instance = Reflect.construct(target, args, newTarget);
    instance.createdAt = new Date().toISOString().slice(0, 10);
    return instance;
  }
});
var p1 = new constructProxy('kim');
p1.name       // 'kim'
p1.createdAt  // '2026-03-18'


/*** ownKeys 트랩 - Object.keys / for...in 가로채기 ***/
var ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {
  ownKeys(target) {
    // _ 로 시작하는 키[key] 숨기기
    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));
  }
});
Object.keys(ownKeysProxy)    // ['pub', 'normal']  (_priv 숨겨짐)


/*** 활용 패턴 1 - 읽기 전용[read-only] 객체 ***/
function readOnly(obj) {
  return new Proxy(obj, {
    set(target, prop) {
      throw new Error(`읽기 전용[read-only]: '${prop}' 수정 불가`);
    },
    deleteProperty(target, prop) {
      throw new Error(`읽기 전용[read-only]: '${prop}' 삭제 불가`);
    }
  });
}
var frozenConfig = readOnly({ host: 'localhost', port: 3000 });
frozenConfig.host        // 'localhost'
// frozenConfig.host = 'x'; // ❌ Error 발생


/*** 활용 패턴 2 - 기본값[default value] 제공 ***/
function withDefaults(target, defaults) {
  return new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : defaults[prop];
    }
  });
}
var settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });
settings.theme     // 'dark'  (직접 설정값 우선)
settings.lang      // 'ko'    (기본값[default])
settings.fontSize  // 14      (기본값[default])


/*** 활용 패턴 3 - 관찰자[observable] / 반응형[reactive] ***/
function observable(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value, receiver) {
      var oldValue = target[prop];
      var result = Reflect.set(target, prop, value, receiver);
      if (oldValue !== value) onChange(prop, oldValue, value);  // 변경 알림[notify change]
      return result;
    }
  });
}
var state = observable({ count: 0 }, (prop, oldVal, newVal) => {
  console.log(`${prop}: ${oldVal} → ${newVal}`);
});
state.count = 1;   // 'count: 0 → 1'
state.count = 5;   // 'count: 1 → 5'


/*** Reflect - 기본 동작[default behavior] 수행 ***/
// Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용

var refObj = { x: 1 };

Reflect.get(refObj, 'x')             // 1     (refObj.x 와 동일)
Reflect.set(refObj, 'y', 2)          // true  (refObj.y = 2 와 동일)
Reflect.has(refObj, 'x')             // true  ('x' in refObj 와 동일)
Reflect.deleteProperty(refObj, 'x')  // true  (delete refObj.x 와 동일)
Reflect.ownKeys(refObj)              // ['y']

// Reflect.apply - 함수 호출[function invocation]
Reflect.apply(Math.max, null, [1, 2, 3])  // 3

// Reflect.construct - new 호출[constructor call]
function Point(x, y) { this.x = x; this.y = y; }
var pt = Reflect.construct(Point, [3, 4]);
pt.x  // 3
pt.y  // 4


/*** Proxy 취소[revocable proxy] ***/
var revocable = Proxy.revocable({ data: 42 }, {
  get(target, prop) { return Reflect.get(target, prop); }
});
var revProxy = revocable.proxy;
var revoke = revocable.revoke;

revProxy.data  // 42
revoke();      // 프록시 비활성화[deactivate]
// revProxy.data  // ❌ TypeError: Cannot perform 'get' on a proxy that has been revoked
