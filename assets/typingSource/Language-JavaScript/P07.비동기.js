// ============================================================
// P07. 비동기[asynchronous] (Promise / async-await)
// ============================================================

/*** Promise 기본 생성[basic construction] ***/
var pBasic = new Promise((resolve, reject) => {
  setTimeout(() => resolve('완료'), 100);
});
pBasic.then(v => console.log(v));   // '완료'


/*** Promise.resolve / reject 단축[shorthand] ***/
Promise.resolve(42).then(v => console.log(v));                          // 42
Promise.reject(new Error('실패')).catch(e => console.error(e.message)); // '실패'


/*** then / catch / finally 체인[chain] ***/
Promise.resolve(1)
  .then(v => v + 1)           // 2
  .then(v => { if (v > 1) throw new Error('too big'); return v; })
  .catch(e => { console.error(e.message); return 0; })  // 'too big' → 0
  .finally(() => console.log('정리 완료'));              // 항상 실행[always runs]


/*** Promise.all - 전체 성공 대기[wait for all] (병렬[parallel]) ***/
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  new Promise(r => setTimeout(() => r(3), 50)),
]).then(values => console.log(values));
// [1, 2, 3]

// 하나라도 reject → 즉시 거부[short-circuit rejection]
Promise.all([
  Promise.resolve('ok'),
  Promise.reject(new Error('fail')),
]).catch(e => console.error(e.message));  // 'fail'


/*** Promise.allSettled - 전부 완료 후 결과 수집[settle all] ***/
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(new Error('oops')),
]).then(results => console.log(results));
// [
//   { status:'fulfilled', value: 1 },
//   { status:'rejected',  reason: Error: oops },
// ]


/*** Promise.any - 가장 먼저 이행[first fulfilled] ***/
Promise.any([
  Promise.reject('a'),
  new Promise(r => setTimeout(() => r('b'), 100)),
  new Promise(r => setTimeout(() => r('c'), 50)),
]).then(v => console.log(v));  // 'c'

// 전부 reject → AggregateError
Promise.any([Promise.reject('x'), Promise.reject('y')])
  .catch(e => console.log(e.constructor.name));  // 'AggregateError'


/*** Promise.race - 가장 먼저 정산[first settled] (resolve or reject) ***/
Promise.race([
  new Promise(r => setTimeout(() => r('slow'), 200)),
  new Promise(r => setTimeout(() => r('fast'), 50)),
]).then(v => console.log(v));  // 'fast'


/*** async / await 기본 ***/
async function fetchData(id) {
  var data = await Promise.resolve({ id, name: 'kim' });  // 비동기 대기[async await]
  return data;
}
fetchData(1).then(d => console.log(d));  // { id:1, name:'kim' }


/*** async / await - try/catch 에러 처리[error handling] ***/
async function safeFetch(url) {
  try {
    var res = await Promise.reject(new Error('네트워크 오류'));
    return res;
  } catch (err) {
    console.error('에러:', err.message);  // '에러: 네트워크 오류'
    return null;
  } finally {
    console.log('요청 종료');  // 항상 실행[always runs]
  }
}
safeFetch('/api/data');


/*** 순차 실행[sequential execution] ***/
async function sequential() {
  var a = await Promise.resolve(1);
  var b = await Promise.resolve(2);  // a 완료 후 실행[after a resolves]
  var c = await Promise.resolve(3);  // b 완료 후 실행[after b resolves]
  return a + b + c;
}
sequential().then(v => console.log(v));  // 6


/*** 병렬 실행[parallel execution] - Promise.all + await ***/
async function parallel() {
  var [a, b, c] = await Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30),
  ]);
  return a + b + c;
}
parallel().then(v => console.log(v));  // 60


/*** 비동기 이터레이터[async iterator] (for await...of) ***/
async function* asyncCounter(start, end) {
  for (var i = start; i <= end; i++) {
    await new Promise(r => setTimeout(r, 10));  // 딜레이[delay] 10ms
    yield i;
  }
}

async function runCounter() {
  for await (var num of asyncCounter(1, 3)) {
    console.log(num);
  }
}
runCounter();
// 1
// 2
// 3


/*** 에러를 값으로 처리하는 패턴[error-as-value pattern] ***/
async function safeAll() {
  var results = await Promise.all([
    Promise.resolve('ok').catch(e => e),
    Promise.reject(new Error('fail')).catch(e => e),
  ]);
  console.log(results);
}
safeAll();
// ['ok', Error: fail]


/*** await 최상위[top-level await] - 모듈[module]에서만 사용 가능 ***/
// var config = await fetch('/api/config').then(r => r.json());
