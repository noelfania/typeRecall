// ============================================================
// P04. 함수[function]
// ============================================================

/*** 함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function] ***/
function declFn(x) { return x * 2; }        // 호이스팅[hoisting] O
var exprFn = function (x) { return x * 2; }; // 호이스팅[hoisting] X
var arrowFn = x => x * 2;                    // this 없음, 암묵적 반환[implicit return]
var arrowBlock = x => { return x * 2; };     // 블록 바디[block body]

declFn(5)   // 10
arrowFn(5)  // 10


/*** 기본값 매개변수[default parameter] ***/
function greetFn(name, msg = 'Hello') {
  return `${msg}, ${name}!`;
}
greetFn('kim')           // 'Hello, kim!'
greetFn('lee', 'Hi')     // 'Hi, lee!'


/*** Rest 파라미터[rest parameter] ***/
function sumFn(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first);
}
sumFn(1, 2, 3, 4)  // 10


/*** Function 메타 정보[metadata] ***/
declFn.name                    // 'declFn'
((a, b) => {}).length          // 2
((a, b, c = 0) => {}).length   // 2 (기본값[default] 이후는 카운트 안됨)
((...args) => {}).length       // 0 (rest는 카운트 안됨)


/*** call / apply / bind - 명시적 this 바인딩[explicit this binding] ***/
function greetCtx(greeting) {
  return `${greeting}, ${this.name}!`;
}
var ctx = { name: 'park' };
greetCtx.call(ctx, 'Hello')            // 'Hello, park!'
greetCtx.apply(ctx, ['Hi'])            // 'Hi, park!'
var boundGreet = greetCtx.bind(ctx);
boundGreet('Hey')                      // 'Hey, park!'

// bind로 부분 적용[partial application]
var boundHello = greetCtx.bind(ctx, 'Hola');
boundHello()  // 'Hola, park!'


/*** IIFE - 즉시 실행 함수[immediately invoked function expression] ***/
var iifeResult = (function (x) { return x * x; })(5);  // 25


/*** 클로저[closure] - 상태 은닉[encapsulation] ***/
function makeCounter(start) {
  var count = start ?? 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    get value()  { return count; },
  };
}
var counterA = makeCounter(10);
counterA.increment()  // 11
counterA.increment()  // 12
counterA.value        // 12


/*** 커링[currying] ***/
var add = a => b => a + b;
add(3)(4)    // 7

var add5 = add(5);
add5(10)     // 15
add5(20)     // 25


/*** 클로저 스코프 체인[closure scope chain] ***/
var closureD = 4;
var closureFn = a => b => c => a + b + c + closureD;
closureFn(1)(2)(3)  // 10


/*** 재귀[recursion] ***/
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
factorial(5)  // 120

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(7)  // 13


/*** 제너레이터[generator] ***/
function* rangeGen(start, end, step = 1) {
  for (var i = start; i <= end; i += step) yield i;
}
var genIter = rangeGen(1, 5);
genIter.next()  // { value:1, done:false }
genIter.next()  // { value:2, done:false }

[...rangeGen(1, 5)]        // [1, 2, 3, 4, 5]
[...rangeGen(0, 10, 2)]    // [0, 2, 4, 6, 8, 10]


/*** yield* 위임[delegation] ***/
function* innerGen() { yield 'a'; yield 'b'; }
function* outerGen() {
  yield 1;
  yield* innerGen();  // 다른 제너레이터에 위임[delegate]
  yield 2;
}
[...outerGen()]  // [1, 'a', 'b', 2]


/*** 팩토리 함수 패턴[factory function pattern] ***/
function createUser(name, role) {
  return {
    name,
    role,
    toString() { return `${this.role}:${this.name}`; },
  };
}
var adminUser = createUser('kim', 'admin');
adminUser.toString()  // 'admin:kim'


/*** 프로토타입 메서드[prototype method] 추가 ***/
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}
Animal.prototype.speak = function () {
  return `${this.name} says ${this.sound}`;
};
var dogA = new Animal('Rex', 'Woof');
dogA.speak()  // 'Rex says Woof'
dogA instanceof Animal  // true


/*** 객체 내부 메서드 패턴[method definition pattern] ***/
var methodObj = {
  value: 10,
  // 화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)
  getArrow: () => methodObj.value,
  // 메서드 단축 표기[method shorthand]: this = 호출 객체[calling object]
  getMethod() { return this.value; },
};
methodObj.getArrow()   // 10
methodObj.getMethod()  // 10
