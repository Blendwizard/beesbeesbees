
// Grub Super Class
var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';

};


// Create an eat method for our Grub class
Grub.prototype.eat = function(food) {
  if (food === this.food) {
    console.log(`Mmmm I love ${food}.`);
  } else {
    console.log(`I don't like ${food}.`);
  }
};