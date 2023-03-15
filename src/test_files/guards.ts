// 타입 가드(Guards)

function logText(el: Element) {
  console.log(el.textContent);
}
// Element: HTML의 요소를 의미함

const h1El = document.querySelector('h1');
// logText(h1El);
// 'HTMLHeadingElement | null' 형식의 인수는 'Element' 형식의 매개 변수에 할당될 수 없습니다.
// 'null' 형식은 'Element' 형식에 할당할 수 없습니다.

// if문 사용
// if (h1El) {
//   logText(h1El);
// }

// instanceof
// if(h1El instanceof HTMLHeadingElement) {
//   logText(h1El);
// }

function add(val: string | number | boolean) {
  let res = 'Result => ';
  if(typeof val === 'number') {
    res += val.toFixed(2);
  }
  if(typeof val === 'string') {
    res += val.toUpperCase();
  } else {
    res += val;
  }
  console.log(res);
}

add(3.141582);
add('hello world');
add(true);