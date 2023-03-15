// 인터페이스(Interface)
// 인덱스 가능 타입 - 인덱스 시그니쳐(Index Signature)

// 배열
interface Fruits {
  [item: number]: string
}
const fruits: Fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);

// 객체
// interface User {
//   [key: string]: unknown
//   name: string
//   age: number
// }

// const heropy: User = {
//   name: 'heropy',
//   age: 85,
// }
// heropy['isValid'] = true;
// heropy['emails'] = ['tjdus3431@daum.net', 'test@gmail.com'];
// console.log(heropy);


// interface Payload {
//   [key: string]: unknown
// }
// function logValues(payload: Payload) {
//   for (const key in payload) {
//     console.log(payload[key]);
//   }
// }

// interface User {
//   [key: string]: unknown
//   name: string
//   age: number
//   isValid: boolean
// }
// const heropy: User = {
//   name: 'heropy',
//   age: 85,
//   isValid: true
// };
// logValues(heropy);
