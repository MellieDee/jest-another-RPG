const Potion = require('../lib/Potion');
const Character = require('./Character');
const Player = require('./Player');


class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
    //this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    // this.health = Math.floor(Math.random() * 10 + 85);
    // this.strength = Math.floor(Math.random() * 5 + 5);
    // this.agility = Math.floor(Math.random() * 5 + 5);
  };

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

}
module.exports = Enemy;









// ES5 function Enemy(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
//   this.potion = new Potion();

//   this.health = Math.floor(Math.random() * 10 + 85);
//   this.strength = Math.floor(Math.random() * 5 + 5);
//   this.agility = Math.floor(Math.random() * 5 + 5);
// };


  // Est Inheritance Here ie inherit prototype methods from Character constructor
// Enemy.prototype = Object.create(Character.prototype);


// Enemy.prototype.getDescription = function() {
//   return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };