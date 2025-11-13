let spacingX = 20;
let spacingY = 20;
let y = 0;
let x = 0;
let barx = 0;
let carspeed = 1;
let direction = 1;
let polespeed = 15;
let polespace = 50;
let ud = 0;
let udv = 0;

let clouds = []; // <— array to hold all clouds
let poles = [];
let flowers = []

function setup() {
  createCanvas(1500, 800);
  frameRate(30);

  // initialize clouds
  clouds = [
    { x: 0, speed: 6, end: -600, start: 1300, y: 300 },
    { x: 0, speed: 5, end: -1000, start: 800, y: 100 },
    { x: 0, speed: 6, end: -1650, start: 600, y: 200 },
  ];

  flowers = [
    { x: 0, speed: 15, end: -600, start: 2000, y: 680 },
    { x: 0, speed: 15, end: -1000, start: 1500, y: 670 },
    { x: 0, speed: 15, end: -1650, start: 1300, y: 690 },
  ];
}

function draw() {
  ud += udv;

  udv *= 0.9;

  if (abs(udv) < 0.1) {
    udv = 0;
  }

  // sky
  background(70, 170, 255);

  // sun
  fill(255, 255, 230);
  ellipse(1000, 200, 80, 80);

  // sea
  fill(20, 100, 205);
  noStroke();
  rect(0, 400 + ud, 1500, 750);

  // pavement
  fill(50, 50, 50);
  rect(0, 700 + ud, 1500, 600);

  grass(0, 0);

  // draw all clouds from array
  for (let c of clouds) {
    makecloud(c);
  }
  for (let f of flowers) {
    makeflower(f);
  }

  car();

  
}

//make these spiky and then add unique flowers with the same code as the clouds
function grass(xthing, ything) {
  fill(150, 255, 150);
  rect(0, 680 + ud, width, 25);

  barx = speedmove(polespeed, -500-polespace, barx, 0);
  for (let i = 0; i < width / polespace + 500; i++) {
  let xstuff = i * polespace + barx;
  triangle(xstuff, 685 + ud, 58 + xstuff, 670 + ud, 100 + xstuff, 685 + ud);
}
}

function car() {
  carshake();
  fill(50, 50, 50);
  beginShape();
  vertex(500, 690 + y + ud);
  vertex(1000, 690 + y + ud);
  vertex(1000, 640 + y + ud);
  vertex(900, 630 + y + ud);
  vertex(850, 520 + y + ud);
  vertex(580, 520 + y + ud);
  vertex(550, 630 + y + ud);
  vertex(500, 640 + y + ud);
  endShape();

  // wheels
  ellipse(600, 690 + y + ud, 100, 100);
  ellipse(875, 690 + y + ud, 100, 100);

  // window
  fill(200, 200, 200);
  beginShape();
  vertex(895, 630 + y + ud);
  vertex(845, 525 + y + ud);
  vertex(750, 525 + y + ud);
  vertex(750, 630 + y + ud);
  endShape();
}


function makecloud(c) {
  c.x = speedmove(c.speed, c.end, c.x, c.start);
  fill(255);
  noStroke();
  beginShape();
  if (c.y === 300) {
    vertex(c.x +300,300 + ud);
    vertex(c.x +500,300 + ud);
    vertex(c.x +500,290 + ud);
    vertex(c.x +300,290 + ud);
    ellipse(c.x +300,295 + ud,10,10);
    ellipse(c.x +500,295 + ud,10,10);
    ellipse(c.x +400,260 + ud,80,80);
    ellipse(c.x +350,290 + ud,80,80);
    ellipse(c.x +390,290 + ud,50,50);
    ellipse(c.x +325,290 + ud,50,50);
    ellipse(c.x +420,290 + ud,60,60);
    ellipse(c.x +430,280 + ud,70,70);
    ellipse(c.x +470,290 + ud,50,50);
  } else if (c.y === 100) {
    vertex(c.x + 700,100 + ud);
    vertex(c.x + 900,100 + ud);
    vertex(c.x + 900,90 + ud);
    vertex(c.x + 700,90 + ud);
    ellipse(c.x + 800,95 + ud,10,10);
    ellipse(c.x + 700,95 + ud,10,10);
    ellipse(c.x + 900,60 + ud,80,80);
    ellipse(c.x + 850,90 + ud,80,80);
    ellipse(c.x + 890,90 + ud,50,50);
    ellipse(c.x + 925,90 + ud,50,50);
    ellipse(c.x + 820,90 + ud,60,60);
    ellipse(c.x + 730,80 + ud,70,70);
    ellipse(c.x + 770,90 + ud,50,50);
  } else if (c.y === 200) {
    vertex(c.x + 1400,200 + ud);
    vertex(c.x + 1600,200 + ud);
    vertex(c.x + 1600,190 + ud);
    vertex(c.x + 1400,190 + ud);
    ellipse(c.x + 1400,195 + ud,10,10);
    ellipse(c.x + 1400,195 + ud,10,10);
    ellipse(c.x + 1500,160 + ud,80,80);
    ellipse(c.x + 1540,210 + ud,80,80);
    ellipse(c.x + 1490,190 + ud,50,50);
    ellipse(c.x + 1600,190 + ud,50,50);
    ellipse(c.x + 1440,210 + ud,60,60);
    ellipse(c.x + 1530,180 + ud,70,70);
    ellipse(c.x + 1570,190 + ud,50,50);
  }
  endShape();
}

function makeflower(f) {
  f.x = speedmove(f.speed, f.end, f.x, f.start);
  noStroke();
  beginShape();
  if (f.y === 680) {
    fill(150, 255, 150);
    rect(f.x+300,640 + ud,8,40)
    fill(0,255,0);
    ellipse(f.x+305,640 + ud,40,40)
    fill(255,255,0);
    ellipse(f.x+305,640 + ud,20,20)
  } else if (f.y === 670) {
    fill(150, 255, 150);
    rect(f.x+300,640 + ud,8,40)
    fill(255,0,0);
    ellipse(f.x+305,640 + ud,40,40)
    fill(255,255,0);
    ellipse(f.x+305,640 + ud,20,20)
  } else if (f.y === 690) {
    fill(150, 255, 150);
    rect(f.x+300,640 + ud,8,40)
    fill(0,255,255);
    ellipse(f.x+305,640 + ud,40,40)
    fill(255,255,0);
    ellipse(f.x+305,640 + ud,20,20)
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

function keyPressed(){
 if (keyCode === UP_ARROW) { // check if the right arrow is pressed
    udv = 100; // increase the variable
 }
// if (keyCode === LEFT_ARROW) { // check if the left arrow is pressed
//    speed-=1; // decrease the variable
//  }
}
