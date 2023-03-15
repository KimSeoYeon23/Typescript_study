// 제네릭(Generic)
/// 함수

interface Obj {
  x: number;
}
type Arr = [number, number];

function toArray<T>(a: T, b: T) {
  return [a, b];
}

console.log(
  // toArray("Neo", 123),
  // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
  // toArray<string>("Neo", 123),
  toArray<string>("Neo", "Anderson"),
  toArray(1, 2),
  toArray(true, false),
  toArray({x: 1}, {x: 2}),
  toArray<Arr>([1, 2], [3, 4])   // number[]
)