var l1, l2, l3, l4;
var e1, e2, e3, e4, e5;
var p1, p2, p3, p4, p5;
var bodys = 1;
var show = 0;
var eyes =1;
var show =0;
var lips =1;
var show = 0;
var bodyChoice;
var eyeChoice;
var lipChoice;

function preload() {
  l1 = loadImage("images/l1.png");
  l2 = loadImage("images/l2.png");
  l3 = loadImage("images/l3.png");
  l4 = loadImage("images/l4.png");

  e1 = loadImage("images/e1.png");
  e2 = loadImage("images/e2.png");
  e3 = loadImage("images/e3.png");
  e4 = loadImage("images/e4.png");
  e5 = loadImage("images/e5.png");

  p1 = loadImage("images/p1.png");
  p2 = loadImage("images/p2.png");
  p3 = loadImage("images/p3.png");
  p4 = loadImage("images/p4.png");
  p5 = loadImage("images/p6.png");
}

function setup() {
  createCanvas(2000, 2000);
  imageMode(CENTER);
}

function draw() {
  background(206, 234, 234);

  if (show == 1) {
    creature( lipChoice, eyeChoice, bodyChoice);
  }

}

function mouseReleased() {
  lipChoice = int(random(4));
  eyeChoice = int(random(5));
  bodyChoice = int(random(5));
  show = 1;
}

function creature( body, eye, lip){
  
    if (body == 0) {
    image(p1, 1000, 1000);
  }

  if (body == 1) {
    image(p2, 1000, 1000);
  }

  if (body == 2) {
    image(p3, 1000, 1000);
  }

  if (body == 3) {
    image(p4, 1000, 1000);
  }
 
  if (body == 4) {
    image(p5, 1000, 1000);    
  }  
 
    if (lip == 0) {
    image(l1, 1000, 1000);
  }

  if (lip == 1) {
    image(l2, 1000, 1000);
  }

  if (lip == 2) {
    image(l3, 1000, 1000);
  }

  if (lip == 3) {
    image(l4, 1000, 1000);
  }

  if (eye == 0) {
    image(e1, 1000, 1000);
  }

  if (eye == 1) {
    image(e2, 1000, 1000);
  }

  if (eye == 2) {
    image(e3, 1000, 1000);
  }

  if (eye == 3) {
    image(e4, 1000, 1000);
  }
 
  if (eye == 4) {
    image(e5,1000, 1000);    
  }
  

}
