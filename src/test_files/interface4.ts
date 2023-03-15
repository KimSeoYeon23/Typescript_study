// 인터페이스(Interface)
// 확장(상속)

// interface UserA {
//   name: string
//   age: number
// }
// interface UserB extends UserA {
//   isValid: boolean
// }

// const heropy: UserA = {
//   name: 'heropy',
//   age: 85,
//   isValid: true
// }
// const neo: UserB = {
//   name: 'Neo',
//   age: 102,
//   isValid: true
// }

interface FullName {
  firstName: string
  lastName: string
}
interface FullName {
  middleName: string
  // lastName: boolean
  // 후속 속성 선언에 같은 형식이 있어야 합니다. 
  // 'lastName' 속성이 'string' 형식이어야 하는데 여기에는 'boolean' 형식이 있습니다
  lastName: string
}

const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sea',
  lastName: 'Connery'
}