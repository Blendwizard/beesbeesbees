// Create Bee class
var Bee = function() {
  // Call the super class 'Grub'
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';


};

// Set Bee methods to inherit Grub methods
// Reset Bee's contructor to not be overwritten
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

