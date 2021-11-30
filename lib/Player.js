const Potion = require('../lib/Potion');

function Player(name = '') {
  //name parameter sets a default empty string if no name is provided. This is another handy trick that came with ES6!
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];

  //Sep methods - shows that you are creating methods for each player. Unfortunately, that's also the problem: it creates new methods for each player.
  //returns an obj w/various player properties
  // this.getStats = function() {
  //   return {
  //     potions: this.inventory.length,
  //     health: this.health,
  //     strength: this.strength,
  //     agility: this.agility
  //   };
  // };

  // //returns the inventory array or false if empty
  // this.getInventory = function() {
  //   if(this.inventory.length) {
  //     return this.inventory;
  //   }
  //   return false;
  // };

  //INSTEAD USE PROTOTYPE: 
  //creating the method once on the constructor itself. New player objects simply INHERIT the  method from the constructor rather than having their own instances of that method.

  Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };

  Player.prototype.getInventory = function() {
    if(this.inventory.length) {
      return this.inventory;
    } 
    return false;
  };
}

module.exports = Player;