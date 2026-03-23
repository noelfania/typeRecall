// ============================================================
// P02. TypeScript 실무 패턴
// ============================================================

type Product = {
  id: number;
  name: string;
  price: number;
};

type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

// 리터럴 유니온[literal union]
let sortOrder: 'asc' | 'desc' = 'asc';
console.log(sortOrder);
// 결과: asc

// 타입 별칭[type alias]
const productItem: Product = {
  id: 1,
  name: 'keyboard',
  price: 50000,
};
console.log(productItem.name);
// 결과: keyboard

// 읽기 전용[readonly]
type UserProfile = {
  readonly id: number;
  nickname: string;
};

const profileItem: UserProfile = {
  id: 1,
  nickname: 'neo',
};
console.log(profileItem.id);
// 결과: 1

// 상태 분기[discriminated union]
const fetchState: FetchState<Product> = {
  status: 'success',
  data: productItem,
};

if (fetchState.status === 'success') {
  console.log(fetchState.data.price);
}
// 결과: 50000

// 배열 패턴[array pattern]
const productList: Product[] = [productItem];
const productNameList = productList.map(item => item.name);
console.log(productNameList);
// 결과: ['keyboard']
