const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


//****    Game Constructor    *****/
//Note that currentEnemy and player are currently undefined. That's fine. We'll assign them when the initializeGame() method is called. Including them now simply helps convey which properties a Game object is intended to have.

// Main Game function set-up
function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
};

//   initialize Game
Game.prototype.initializeGame = function () {
  this.enemies.push(new Enemy('goblin', 'sword'));
  this.enemies.push(new Enemy('orc', 'baseball bat'));
  this.enemies.push(new Enemy('skeleton', 'axe'));

  this.currentEnemy = this.enemies[0];

  inquirer.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
    // destructure name from the prompt obj
    .then(({ name }) => {
      this.player = new Player(name);

      this.startNewBattle();
    });
}


//   start New Battle
Game.prototype.startNewBattle = function () {
  if (this.player.agility > this.currentEnemy.agility) {
    this.isPlayerTurn = true;
  } else {
    this.isPlayerTurn = false;
  }
  console.log('Your stats are as folllows:');
  console.table(this.player.getStats());
  console.log(this.currentEnemy.getDescription());

  this.battle()
};


//  start BATTLE - Main game logic;  runs indefinite n times
Game.prototype.battle = function () {
  if (this.isPlayerTurn) {
    inquirer.prompt
      ({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Attack', 'Use potion']
      })
      .then(({ action }) => {
        if (action === 'Use potion') {
          if (!this.player.getInventory()) {
            console.log("You don't have any potions!");

            return this.checkEndOfBattle();
          }
          inquirer.prompt
            ({
              type: 'list',
              message: 'Which potion would you like to use?',
              name: 'action',
              choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
            })
            .then(({ action }) => {
              const potionDetails = action.split(': ');
              this.player.usePotion(potionDetails[0] - 1);
              console.log(`You used a ${potionDetails[1]} potion.`);

              this.checkEndOfBattle();
            });

        } else {
          const damage = this.player.getAttackValue();
          this.currentEnemy.reduceHealth(damage);

          console.log(`You attacked the ${this.currentEnemy.name}`);
          console.log(this.currentEnemy.getHealth());

          this.checkEndOfBattle();
        }
      });

  } else {
    const damage = this.currentEnemy.getAttackValue();
    this.player.reduceHealth(damage);

    console.log(`You were attacked by the ${this.currentEnemy.name}`);
    console.log(this.player.getHealth());

    this.checkEndOfBattle();
  }
};




Game.prototype.checkEndOfBattle = function () {
  //verify if both characters are alive.
  if (this.player.isAlive() && this.currentEnemy.isAlive()) {
    // If so, switch the turn order 
    this.isPlayerTurn = !this.isPlayerTurn;
    // and run battle() again
    this.battle();
    //verify if player is Alive and enemy is dead
  } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
    console.log(`You have defeated the ${this.currentEnemy.name}`);
    //player gts enemy's potion
    this.player.addPotion(this.currentEnemy.potion);
    console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);
    // fight round numbe increases  
    this.roundNumber++;

    //if the round Number is less than the number of enemies
    if (this.roundNumber < this.enemies.length) {
    //the next current Enemyis the one at the index equal to the roundnumber
      this.currentEnemy = this.enemies[this.roundNumber];
    // start a new round
      this.startNewBattle();
    } else {
      //if all enemies are dead then player wins
      console.log('You win!');
    }
  } else {
    //if player is not alive then its dead
    console.log("You have been defeated!");
  }
}
module.exports = Game