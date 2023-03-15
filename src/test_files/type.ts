// 타입 종류

// 문자
// let str: string;
// let red: string = 'red';
// let green: string = 'green';
// let myColor: string = `My color is ${red}`;
// let yourColor: string = `Your color is ` + green;

// console.log(str, red, green, myColor, yourColor);
// undefined 'red' 'green' 'My color is red' 'Your color is green'

// 숫자
// let num: number;
// let integer: number =6;
// let float: number = 3.14;
// let infinity: number = Infinity;
// let nan: number = NaN;

// console.log(num, integer, float, infinity, nan);
// undefined 6 3.14 Infinity NaN

// 불린
// let isBoolean: boolean;
// let isDone: boolean = false;

// console.log(isBoolean, isDone);
// undefined false

// Null / Undefined
// let nul: null;          
// let und: undefined;
// nul = null;

// console.log(nul, und);
// null undefined

// 배열
// 배열 타입은 항상 배열을 의미하는 대괄호와 그 안에 들어갈 아이템의 타입을 같이 작성해야 한다.
// let fruits: string[] = ['Apple', 'Banana', 'Cherry'];
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
// let union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3];
// // | <- 해당 기호를 사용하는 타입을 union 타입이라고 한다.
// // union 타입은 소괄호로 묶어줘야 한다.

// console.log(fruits, numbers, union);
// ['Apple', 'Banana', 'Cherry'], [1, 2, 3, 4, 5, 6, 7], ['Apple', 1, 2, 'Banana', 3]

// 객체
// typeof DATA === 'object'
// object 타입은 'object' 라는 문자가 나오는 모든 타입은 object 타입으로 명시가 된다.
// const obj: object = {}
// const arr: object = []
// const func: object = function () {}
// console.log(obj, arr, func);
// // {}, [], ƒ () {}
// // 위와 같이 object 타입은 function이나 배열도 반환하기  엄격하지 않기 때문에 거의 사용하지 않는다.

// interface User {
//   name: string,
//   age: number,
//   isValid: boolean
// }

// const userA: User = {
//   name: 'heropy',
//   age: 85,
//   isValid: true
// }

// console.log(userA);
// // {name: 'heropy', age: 85, isValid: true}

// const userB: User = {
//   name: 'neo',
//   age: 23,
//   isValid: false
// }

// console.log(userB);
// {name: 'neo', age: 23, isValid: false}


// 함수
// const add: (x: number, y: number) => number = function (x, y) {
//   return x + y;
// };
// const add = function (x: number, y: number): number {
//   return x + y;
// };
// const a: number = add(1, 2);

// console.log(a);
// // 3

// Any
// let hello: any = 'Hello world';
// hello = 123;
// hello = false;
// hello = null;
// hello = {};
// hello = [];
// hello = function () {}

// Unknown
// const a: any = 123;
// const u: unknown = 123;

// const any: any = a;
// const boo: boolean = a;
// const num: number = a;
// const arr: string[] = a;
// const obj: { x: string, y: number} = a;

// const any: any = u;
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: { x: string, y: number} = u;


// Tuple
// const tuple: [string, number, boolean] = ['a', 1, false];
// const users: [number, string, boolean][] = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];

// Void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}`);
// };

// const hi: void = hello('world');

// Never
// const nev: [] = [];
// nev.push(3);


// Union
// let union: string | number;
// union = 'Hello type!';
// union = 123;
// union = false;

// Intersection
// interface User {
//   name: string,
//   age: number
// }
// interface Validation {
//   isValid: boolean
// }
// const heropy: User & Validation = {
//   name: 'Neo',
//   age: 85,
//   isValid: true
// }