let spacingX = 20;
let spacingY = 20;
let y = 0;
let x = 0;
let barx = 0;
let carspeed = 1;
let direction = 1;
let polespeed = 15;
let polespace = 50;

let clouds = []; // <— array to hold all clouds
let poles = [];

function setup() {
  createCanvas(1500, 800);
  frameRate(30);

  // initialize clouds
  clouds = [
    { x: 0, speed: 6, end: -600, start: 1300, y: 300 },
    { x: 0, speed: 5, end: -1000, start: 800, y: 100 },
    { x: 0, speed: 6, end: -1650, start: 600, y: 200 },
  ];
}

function draw() {
  // sky
  background(70, 170, 255);

  // sun
  fill(255, 255, 230);
  ellipse(1000, 200, 80, 80);

  // sea
  fill(20, 100, 205);
  noStroke();
  rect(0, 400, 1500, 750);

  // pavement
  fill(50, 50, 50);
  rect(0, 700, 1500, 600);

  grass(0, 0);
  car();

  // draw all clouds from array
  for (let c of clouds) {
    makecloud(c);
  }
}

//make these spiky and then add unique flowers with the same code as the clouds
function grass(xthing, ything) {
  fill(150, 255, 150);
  rect(0, 680, width, 25);

  barx = speedmove(polespeed, -500-polespace, barx, 0);
  for (let i = 0; i < width / polespace + 500; i++) {
  let xstuff = i * polespace + barx;
  triangle(xstuff, 685, 58 + xstuff, 670, 100 + xstuff, 685);
}
}

function car() {
  carshake();
  fill(50, 50, 50);
  beginShape();
  vertex(500, 690 + y);
  vertex(1000, 690 + y);
  vertex(1000, 640 + y);
  vertex(900, 630 + y);
  vertex(850, 520 + y);
  vertex(580, 520 + y);
  vertex(550, 630 + y);
  vertex(500, 640 + y);
  endShape();

  // wheels
  ellipse(600, 690 + y, 100, 100);
  ellipse(875, 690 + y, 100, 100);

  // window
  fill(200, 200, 200);
  beginShape();
  vertex(895, 630 + y);
  vertex(845, 525 + y);
  vertex(750, 525 + y);
  vertex(750, 630 + y);
  endShape();
}

function makecloud(c) {
  c.x = speedmove(c.speed, c.end, c.x, c.start);
  fill(255);
  noStroke();
  beginShape();
  if (c.y === 300) {
    vertex(c.x +300,300);
    vertex(c.x +500,300);
    vertex(c.x +500,290);
    vertex(c.x +300,290);
    ellipse(c.x +300,295,10,10);
    ellipse(c.x +500,295,10,10);
    ellipse(c.x +400,260,80,80);
    ellipse(c.x +350,290,80,80);
    ellipse(c.x +390,290,50,50);
    ellipse(c.x +325,290,50,50);
    ellipse(c.x +420,290,60,60);
    ellipse(c.x +430,280,70,70);
    ellipse(c.x +470,290,50,50);
  } else if (c.y === 100) {
    vertex(c.x + 700,100);
    vertex(c.x + 900,100);
    vertex(c.x + 900,90);
    vertex(c.x + 700,90);
    ellipse(c.x + 800,95,10,10);
    ellipse(c.x + 700,95,10,10);
    ellipse(c.x + 900,60,80,80);
    ellipse(c.x + 850,90,80,80);
    ellipse(c.x + 890,90,50,50);
    ellipse(c.x + 925,90,50,50);
    ellipse(c.x + 820,90,60,60);
    ellipse(c.x + 730,80,70,70);
    ellipse(c.x + 770,90,50,50);
  } else if (c.y === 200) {
    vertex(c.x + 1400,200);
    vertex(c.x + 1600,200);
    vertex(c.x + 1600,190);
    vertex(c.x + 1400,190);
    ellipse(c.x + 1400,195,10,10);
    ellipse(c.x + 1400,195,10,10);
    ellipse(c.x + 1500,160,80,80);
    ellipse(c.x + 1540,210,80,80);
    ellipse(c.x + 1490,190,50,50);
    ellipse(c.x + 1600,190,50,50);
    ellipse(c.x + 1440,210,60,60);
    ellipse(c.x + 1530,180,70,70);
    ellipse(c.x + 1570,190,50,50);
  }
  endShape();
}

function carshake() {
  y += carspeed * direction;
  if (y > 1 || y < -1) {
    direction *= -1;
  }
}

function speedmove(s, e, c, b) {
  let x = c - s;
  if (x < e) {
    x = b;
  }
  return x;
}

//function keyPressed(){
// if (keyCode === RIGHT_ARROW) { // check if the right arrow is pressed
//    speed+=1; // increase the variable
// }
// if (keyCode === LEFT_ARROW) { // check if the left arrow is pressed
//    speed-=1; // decrease the variable
//  }
//}
