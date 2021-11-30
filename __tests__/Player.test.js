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


//test for stats obj that has 4 properties: potion, health, strength  agiity
test("gets player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});


//test for player inventory
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});
