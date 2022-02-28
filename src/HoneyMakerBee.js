var HoneyMakerBee = function() {
  // Call Bee class
  Bee.call(this);
  // Create a few unique traits to HoneyMakers
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

// Set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// Reset the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// makeHoney method for HoneyMakerBee
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

// giveHoney methof for HoneyMakerBee
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
