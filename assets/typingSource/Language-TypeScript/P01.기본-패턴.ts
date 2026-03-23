// ============================================================
// P01. TypeScript 기본 패턴
// ============================================================

type User = {
  id: number;
  name: string;
  age?: number;
  role: 'user' | 'admin';
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
};

// 기본 타입[basic type]
let userName: string = 'kim';
let userAge: number | null = 30;
let isOpen: boolean = false;

console.log(userName, userAge, isOpen);
// 결과: kim 30 false

// 배열[array]
const numberList: number[] = [1, 2, 3];
const nameList: Array<string> = ['lee', 'park'];
console.log(numberList, nameList);
// 결과: [1, 2, 3] ['lee', 'park']

// 객체 타입[object type]
const userItem: User = {
  id: 1,
  name: 'lee',
  role: 'admin',
};
console.log(userItem.name);
// 결과: lee

// 함수[function]
function add(numA: number, numB: number): number {
  return numA + numB;
}
console.log(add(3, 4));
// 결과: 7

// 유니온 타입[union type]
function formatValue(input: string | number): string {
  return typeof input === 'number' ? input.toFixed(2) : input.toUpperCase();
}
console.log(formatValue(3.14));
console.log(formatValue('ts'));
// 결과:
// 3.14
// TS

// 인터페이스 대체 패턴[object response pattern]
const userResponse: ApiResponse<User> = {
  ok: true,
  data: userItem,
};
console.log(userResponse.data.role);
// 결과: admin

// 옵셔널 체이닝[optional chaining] / null 병합[nullish coalescing]
const maybeAge = userItem.age ?? 0;
console.log(maybeAge);
// 결과: 0

// 제네릭[generic]
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}
console.log(firstItem<number>([10, 20, 30]));
// 결과: 10
