var RetiredForagerBee = function() {
  // Call the ForagerBee class
  ForagerBee.call(this);
  // Create some unique traits
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

// Set prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// Reset constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// Create a new forage method for RetiredForagerBee
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

// Create an always-winning gamble method for RetiredForagerBee
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};