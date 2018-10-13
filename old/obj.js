//pascal casing
function Mobile(color) {
  this.width = 10;
  this.height = 20;

  this.color = color;

  this.call = function () {
    console.log("Calling...");
  }
}

var m1 = new Mobile("red");
var m3 = new Mobile("black");
var m4 = new Mobile("green");

console.log(m1);
console.log(m3);
console.log(m4);
