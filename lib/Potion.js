// ES5 Constructor:

//function Potion(name) {
//   this.types = ['strength', 'agility', 'health'];
//   // Notice that the this.name function is set to name || this.types[Math.floor(Math.random() * this.types.length)]. 
//   //Use  of the || operator. 
//   //checking: if name is truthy— ie it can be coerced to true—then this.name = name. 
//   //If name is not truthy, then this.name = this.types[Math.floor(Math.random() * this.types.length)] or a random type of potion.
//   this.name = name || this.types[Math.floor(Math.random() * this.types.length)];


//   if(this.name === 'health') {
//     this.value = Math.floor(Math.random() * 10 + 30);
//   } else { 
//     this.value = Math.floor(Math.random() * 5 + 7);
//   }
// }


//   ES6 Constructor
class Potion {
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}
module.exports = Potion;