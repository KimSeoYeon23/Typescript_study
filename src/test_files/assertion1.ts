// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
// const el = document.querySelector('body');
// el.textContent = 'Hello World';
// el: HTMLBodyElement | null
// 'el'은(는) 'null'일 수 있습니다.
// const el = document.querySelector('body') as HTMLBodyElement;
// el.textContent = 'Hello World?!';   
// body태그는 as HTMLBodyElement 를 통해 null이 아니고 HTML 요소임을 알려준다.
const el = document.querySelector('body');
el!.textContent = 'Hello World?!';
// ! 기호를 사용해서 ! 앞쪽에 있는 변수는 절대 null이 아니다라고 단언을 해준다.

// 2)
// function getNumber(x: number | null | undefined) {
//   return Number(x.toFixed(2));
//   // 'x'은(는) 'null' 또는 'undefined'일 수 있습니다.
//   // toFixed는 null 이나 undefined에서 사용할 수 없다.
// }
// function getNumber(x: number | null | undefined) {
//   return Number((x as number).toFixed(2));
// }
// getNumber(3.1415926535);
// getNumber(null);
function getNumber(x: number | null | undefined) {
  return Number(x!.toFixed(2));
}
getNumber(3.1415926535);
getNumber(null);

// 3)
// function getValue(x: string | number, isNumber: boolean) {
//   if (isNumber) {
//     return Number((x).toFixed(2));
//     // 'string | number' 형식에 'toFixed' 속성이 없습니다.
//     // 'string' 형식에 'toFixed' 속성이 없습니다.
//   }
//   return (x).toUpperCase();
//   // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
//   // 'number' 형식에 'toUpperCase' 속성이 없습니다.
// }
// function getValue(x: string | number, isNumber: boolean) {
//   if (isNumber) {
//     return Number((x as number).toFixed(2));
//   }
//   return (x as string).toUpperCase();
// }
// getValue('hello world', false); // HELLO WORLD
// getValue(3.1415926535, true);   // 3.14
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }
  return (x as string).toUpperCase();
}
getValue('hello world', false); // HELLO WORLD
getValue(3.1415926535, true);   // 3.14
