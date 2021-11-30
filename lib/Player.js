const Potion = require('../lib/Potion');

function Player(name = '') {
  //name parameter sets a default empty string if no name is provided. This is another handy trick that came with ES6!
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;