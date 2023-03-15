declare module 'lodash' {
  // lodash라는 모듈을 사용할 때 타입을 선언하겠다는 의미로 declare 키워드를 붙인다.
  // 선언하려는 타입의 모듈은 lodash다.
  interface Lodash {
    camelCase: (str: string) => string
    snakeCase: (str: string) => string
    kebabCase: (str: string) => string
  }
  const _: Lodash
  export default _
}