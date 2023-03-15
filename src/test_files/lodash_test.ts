import _ from 'lodash';

const str = 'the brown fox jumps over the lazy dog.';

console.log(_.camelCase(str));    // theBrownFoxJumpsOverTheLazyDog
console.log(_.snakeCase(str));    // the_brown_fox_jumps_over_the_lazy_dog
console.log(_.kebabCase(str));    // the-brown-fox-jumps-over-the-lazy-dog