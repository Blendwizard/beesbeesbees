var ForagerBee = function() {
  // Call Bee class
  Bee.call(this);
  // Create some unique traits
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// Set prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// Reset constructor
ForagerBee.prototype.constructor = ForagerBee;

// Create a forage method for ForagerBee
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};