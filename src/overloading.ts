// 함수 - 오버로딩(Overloading)

// 1)
function add1(a: string, b: string) {
  return a + b;
}

function add2(a: number, b: number) {
  return a + b;
}
add1('hello ', 'world~' );  // 'hello world~
add2(1, 2);                 // 3
add1('hello ', 2);          // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
add2('hello ', 2);          // 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.

// 2)
function add(a: string, b: string): string    // 타입 선언
function add(a: number, b: number): number    // 타입 선언
function add(a: any, b: any) {                // 함수 구현
  return a + b;
}
add('hello ', 'world~');    // hello world~
add(1, 2);                  // 3

// 에러 발생
add('hello', 2);
/**
 * 이 호출과 일치하는 오버로드가 없습니다.
 * 오버로드 1/3('(a: string, b: string): string')에서 다음 오류가 발생했습니다.
 * 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
 */
add('hello', 2);
/*
 * 오버로드 2/3('(a: number, b: number): number')에서 다음 오류가 발생했습니다.
 * 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
 */
  