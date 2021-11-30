const  Player = require('../lib/Player');
// The require() line imports the Potion() constructor establishing Potion as a usable variable (otherwise new Potion() would throw an error
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());
 
test('creates a player objects', () => {
  const player  = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});