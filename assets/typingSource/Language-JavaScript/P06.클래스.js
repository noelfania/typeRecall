// ============================================================
// P06. 클래스[class]
// ============================================================

/*** 기본 클래스[basic class] ***/
class Vehicle {
  static count = 0;          // 정적 속성[static field] (인스턴스 공유 안됨)
  #fuel;                     // 프라이빗 필드[private field] (클래스 외부 접근 불가)

  constructor(type, fuel) {
    this.type = type;
    this.#fuel = fuel;
    Vehicle.count++;
  }

  getFuel()  { return this.#fuel; }                    // 프라이빗 접근자[private accessor]
  describe() { return `${this.type} (${this.#fuel})`; }

  static getCount() { return Vehicle.count; }          // 정적 메서드[static method]
}

var car1 = new Vehicle('car', 'gasoline');
var car2 = new Vehicle('bike', 'none');
car1.describe()         // 'car (gasoline)'
car1.getFuel()          // 'gasoline'
Vehicle.count           // 2
Vehicle.getCount()      // 2


/*** Getter / Setter - 접근자 프로퍼티[accessor property] ***/
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area()          { return Math.PI * this.radius ** 2; }
  get circumference() { return 2 * Math.PI * this.radius; }
  set diameter(d)     { this.radius = d / 2; }
}

var circle1 = new Circle(5);
circle1.area.toFixed(2)           // '78.54'
circle1.circumference.toFixed(2)  // '31.42'
circle1.diameter = 20;
circle1.radius                    // 10


/*** 상속[inheritance] (extends / super) ***/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() { return `${this.name} makes a noise.`; }
  toString() { return `Animal(${this.name})`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // 부모[parent] constructor 호출 필수 (this 사용 전)
    this.breed = breed;
  }
  speak() {               // 오버라이드[override]
    return `${this.name} barks.`;
  }
  parentSpeak() {
    return super.speak(); // 부모 메서드[parent method] 호출
  }
}

var dog1 = new Dog('Rex', 'Labrador');
dog1.speak()         // 'Rex barks.'
dog1.parentSpeak()   // 'Rex makes a noise.'
dog1.toString()      // 'Animal(Rex)'  (상속[inheritance])
dog1 instanceof Dog      // true
dog1 instanceof Animal   // true


/*** 정적 초기화 블록[static initialization block] ***/
class Config {
  static host;
  static port;
  static {
    Config.host = 'localhost';
    Config.port = 3000;
  }
}
Config.host  // 'localhost'
Config.port  // 3000


/*** 클래스 표현식[class expression] ***/
var Rectangle = class {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  get area() { return this.w * this.h; }
};
new Rectangle(4, 5).area  // 20


/*** 믹스인 패턴[mixin pattern] ***/
var Serializable = Base => class extends Base {
  serialize() { return JSON.stringify(this); }
};

var Timestamped = Base => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString().slice(0, 10);
  }
};

class BaseEntity {
  constructor(data) { Object.assign(this, data); }
}

class UserEntity extends Serializable(Timestamped(BaseEntity)) {}

var userEntity = new UserEntity({ id: 1, name: 'kim' });
userEntity.serialize()   // '{"id":1,"name":"kim","createdAt":"2026-03-18"}'


/*** 내장 클래스 상속[built-in class inheritance] ***/
class TypedArray extends Array {
  sum() { return this.reduce((acc, n) => acc + n, 0); }
  avg() { return this.sum() / this.length; }
}

var nums = new TypedArray(10, 20, 30);
nums.sum()           // 60
nums.avg()           // 20
nums.map(n => n * 2) // TypedArray [20, 40, 60]


/*** instanceof / constructor 확인[inspection] ***/
dog1.constructor === Dog                        // true
dog1.constructor.name                           // 'Dog'
Object.getPrototypeOf(dog1) === Dog.prototype   // true
