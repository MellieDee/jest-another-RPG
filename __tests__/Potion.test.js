const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  //The expect.any() method takes a constructor as an argument.
  // We're expecting that the value property is created with a Number() constructor.
  //Allow value to be any number, rather than a number in a range test is more flexible.
  //This general test allows us to avoid testing the random number generator hundreds of times to make sure that it works.
  expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion opbject', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});