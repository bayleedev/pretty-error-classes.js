const { WatError, ValidationError, Foo } = require('./')

try {
  throw new ValidationError('meow')
} catch (e) {
  if (e instanceof WatError) {
    throw new Error('✕ - Did not catch ValidationError - caught WatError')
  } else if (e instanceof ValidationError) {
    console.log('✓ Caught ValidationError')
  } else {
    throw new Error('✕ - Did not catch ValidationError')
  }
}
