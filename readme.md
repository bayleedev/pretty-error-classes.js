## Pretty Error Classes

Allows you to dynamically create error classes, with an elegant API.

~~~ javascript
const { ValidationError } = require('pretty-error-classes')

try {
  throw new ValidationError('meow')
} catch (e) {
  if (e instanceof ValidationError) {
    console.log('validation error') // gets here
  } else {
    console.log('generic catching') // does not get here
  }
}
~~~~
