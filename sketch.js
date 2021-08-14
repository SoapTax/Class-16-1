
var box1;
var box2
function setup() {
  createCanvas(600, 400);
  box1 = new Box()
  box2 = new Box()
}

function draw() {
  background(220);
box1.show()
box2.show()
box1.setWidth(100)
box2.setWidth(25)
}

