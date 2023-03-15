// 클래스

// 접근 제어자(Access Modifiers)
/// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
/// protected - 나와 파생된 후손 클래스 내에서 접근 가능
/// private - 내 클래스에서만 접근 가능

// class UserA {
//   // public 생략 가능
//   // public first: string = '';
//   // public last: string = '';
//   // public age: number = 0;
//   // protected first: string = '';
//   // protected last: string = '';
//   // protected age: number = 0;
//   private first: string = '';
//   private last: string = '';
//   private age: number = 0;

//   constructor(first: string, last: string, age: number) {
//     this.first = first;
//     this.last = last;
//     this.age = age;
//   }
//   protected getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   } 
// }
class UserA {
  constructor(
    public first: string, 
    public last: string, 
    public age: number
  ) {
      // ...
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  } 
}

class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
    // 'first' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
    // 'last' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
    // 'age' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.  }
}

class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
    // 'first' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
    // 'last' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
    // 'age' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
  }
}

// const neo = new UserA('Neo', 'Anderson', 102);
// console.log(neo.first);   // Neo
// console.log(neo.last);    // Anderson
// console.log(neo.age);     // 102
// console.log(neo.first);   // 'first' 속성은 보호된 속성이며 'UserA' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
// console.log(neo.last);    // 'last' 속성은 보호된 속성이며 'UserA' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
// console.log(neo.age);     // 'age' 속성은 보호된 속성이며 'UserA' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
console.log(neo.first);   // 'first' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
console.log(neo.last);    // 'last' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.
console.log(neo.age);     // 'age' 속성은 private이며 'UserA' 클래스 내에서만 액세스할 수 있습니다.