// 인터페이스(Interface)
// 함수 타입 - 호출 시그니쳐(Call Signature)

// interface GetName {
//   (text: string, hello: string): string
// }

// interface User {
//   name: string,
//   age: number,
//   getName: GetName
// }

// const heropy2: User = {
//   name: 'heropy',
//   age: 85,
//   getName(message: string) {
//     console.log(message);
//     console.log(this.name);
//     return this.name;
//   }
// }
// heropy2.getName('Hello~');

// interface User {
//   name: string,
//   age: number,
//   getName: (text: string) => string
// }

// const heropy2: User = {
//   name: 'heropy',
//   age: 85,
//   getName(message: string) {
//     console.log(message);
//     console.log(this.name);
//     return this.name;
//   }
// }
// heropy2.getName('Hello~');