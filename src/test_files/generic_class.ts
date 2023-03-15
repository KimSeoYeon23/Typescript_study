// 제네릭(Generic)
/// 클래스

class User<T> {
  constructor(public payload: T) {};
  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
};

interface UserBType {
  name: string;
  age: number;
  emails: string[]
};

const heropy = new User<UserAType>({
  name: 'Heropy',
  age: 85,
  isValid: true,
});

const neo = new User<UserBType>({
  name: 'Neo',
  age: 102,
  emails: ['neo@gmail.com']
});

console.log(heropy);
console.log(neo);