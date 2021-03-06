const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
  constructor(name = '') {
    //calling parent constructor here
    super(name);
    // this.name = name;
    // this.health = Math.floor(Math.random() * 10 + 95);
    // this.strength = Math.floor(Math.random() * 5 + 7);
    // this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
  };


  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };


  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };


  addPotion(potion) {
    this.inventory.push(potion);
  };

  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
      case 'agility':
        this.agility += potion.value;
        break;
    }
  }
}

module.exports = Player;













// ES 5
//function Player(name = '') {
//   //name parameter sets a default empty string if no name is provided. This is another handy trick that came with ES6!
//   this.name = name;

//   this.health = Math.floor(Math.random() * 10 + 95);
//   this.strength = Math.floor(Math.random() * 5 + 7);
//   this.agility = Math.floor(Math.random() * 5 + 7);

//   this.inventory = [new Potion('health'), new Potion()];
// };
// // };
// //Sep methods - shows that you are creating methods for each player. Unfortunately, that's also the problem: it creates new methods for each player.
// //returns an obj w/various player properties
// // this.getStats = function() {
// //   return {
// //     potions: this.inventory.length,
// //     health: this.health,
// //     strength: this.strength,
// //     agility: this.agility
// //   };
// // };

// // //returns the inventory array or false if empty
// // this.getInventory = function() {
// //   if(this.inventory.length) {
// //     return this.inventory;
// //   }
// //   return false;
// // };

// //INSTEAD USE PROTOTYPE: 
// //creating the method once on the constructor itself. New player objects simply INHERIT the  method from the constructor rather than having their own instances of that method.

// // Est Inheritance Here ie inherit prototype methods from Character constructor
// Player.prototype = Object.create(Character.prototype);


// Player.prototype.getStats = function () {
//   return {
//     potions: this.inventory.length,
//     health: this.health,
//     strength: this.strength,
//     agility: this.agility
//   };
// };

// Player.prototype.getInventory = function () {
//   if (this.inventory.length) {
//     return this.inventory;
//   }
//   return false;
// };


// Player.prototype.addPotion = function (potion) {
//   this.inventory.push(potion);
// };

// //10.3.4
// //array.splice(index, howmany, item1, ....., itemX) start = index to start the change; howmany = # of elements to remove from start

// //.splice() removes items from array
// //  Returns removed item(s) as a new array
// //  Two things are happening here: 
// //      *Original inventory array has a single Potion removed at the specified index value
// //       this potion is put into a new "removed items" array /////       then the Potion at index [0] of this "removed items"  array is saved in a potion variable.
// Player.prototype.usePotion = function (index) {
//   const potion = this.getInventory().splice(index, 1)[0];

//   switch (potion.name) {
//     case 'agility':
//       this.agility += potion.value;
//       break;
//     case 'health':
//       this.health += potion.value;
//       break;
//     case 'strength':
//       this.strength += potion.value;
//       break;
//   }
// };
