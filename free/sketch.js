let spacingX = 20
let spacingY = 20
let y = 0;   
let x = 0 ;
let cx1 = 0;
let cx2 = 0;
let cx3 = 0;
let barx = 0
let carspeed = 1;      
let direction = 1;

function setup(){
    createCanvas(1500,800);
    frameRate(30);
  
  
  
}

function draw(){
//sky
background(70,170,255);
//sun
fill(255,255,230)
ellipse (1000,200,80,80)
// sea
fill(20,100,205);
noStroke();
rect(0,400,1500,750);
//pavement
fill(50,50,50)
rect(0,700,1500,600);
railsnpoles(0,0);
//car
car();
//clouds
cloudone();
cloudtwo();
cloudthree();


    




}

function railsnpoles(xthing,ything) {
  // rail
  fill(50, 50, 50);
  rect(0, 660, width, 25);

  // poles
  let polespace = 400;
  barx = speedmove(50, -polespace, barx, polespace); // speed, then the minimum spacing, then the current space, then maximum
  for (let i = 0; i < width / polespace + 2; i++) {//i counts iterations
    let xstuff = i * polespace + barx;
    rect(xstuff, 669, 50, 75);
  }
}

function car(){
    carshake();
    //body
    fill(50,50,50);
    beginShape();
    vertex(500,690+y);
    vertex(1000,690+y);
    vertex(1000,640+y)
    vertex(900,630+y);
    vertex(850,520+y);
    vertex(580,520+y);
    vertex(550,630+y);
    vertex(500,640+y);
    endShape();
    //wheel
    ellipse(600,690+y,100,100);
    ellipse(875,690+y,100,100);
    //window
    fill(200,200,200);
    beginShape();
    vertex(895,630+y);
    vertex(845,525+y);
    vertex(750,525+y);
    vertex(750,630+y);
    endShape();

}

function cloudone(){
    cx1 = speedmove(6,-600,cx1,1300);
    fill(255,255,255)
    beginShape();
    vertex(cx1+300,300);
    vertex(cx1+500,300);
    vertex(cx1+500,290);
    vertex(cx1+300,290);
    ellipse(cx1+300,295,10,10);
    ellipse(cx1+500,295,10,10);
    ellipse(cx1+400,260,80,80);
    ellipse(cx1+350,290,80,80);
    ellipse(cx1+390,290,50,50);
    ellipse(cx1+325,290,50,50);
    ellipse(cx1+420,290,60,60);
    ellipse(cx1+430,280,70,70);
    ellipse(cx1+470,290,50,50);
    endShape();
}
function cloudtwo(){
    cx2 = speedmove(5,-1000,cx2,800);
    fill(255,255,255)
    beginShape();
    vertex(cx2+700,100);
    vertex(cx2+900,100);
    vertex(cx2+900,90);
    vertex(cx2+700,90);
    ellipse(cx2+800,95,10,10);
    ellipse(cx2+700,95,10,10);
    ellipse(cx2+900,60,80,80);
    ellipse(cx2+850,90,80,80);
    ellipse(cx2+890,90,50,50);
    ellipse(cx2+925,90,50,50);
    ellipse(cx2+820,90,60,60);
    ellipse(cx2+730,80,70,70);
    ellipse(cx2+770,90,50,50);
    endShape();
}

function cloudthree(){
    cx3 = speedmove(6,-1650,cx3,600);
    fill(255,255,255)
    beginShape();
    vertex(cx3+1400,200);
    vertex(cx3+1600,200);
    vertex(cx3+1600,190);
    vertex(cx3+1400,190);
    ellipse(cx3+1400,195,10,10);
    ellipse(cx3+1400,195,10,10);
    ellipse(cx3+1500,160,80,80);
    ellipse(cx3+1540,210,80,80);
    ellipse(cx3+1490,190,50,50);
    ellipse(cx3+1600,190,50,50);
    ellipse(cx3+1440,210,60,60);
    ellipse(cx3+1530,180,70,70);
    ellipse(cx3+1570,190,50,50);
    endShape();
}


function carshake(){
  // move the car up and down
  y += carspeed * direction;

  // reverse direction when it reaches limits
  if (y > 1 || y < -1) {
    direction *= -1;
  }
}


function speedmove(s,e,c,b){
    let speed = s
    let end = e
    let x = c
    let begin = b
    //object's x is subtracted by a specific amount before it returns to the max screen extension
     x -= speed; // move left
  if (x < end) {
    x = begin; // send it back to the right
  }
  return x; // send to the clouds or stuff
}

//function keyPressed(){
// if (keyCode === RIGHT_ARROW) { // check if the right arrow is pressed
//    speed+=1; // increase the variable
// }
// if (keyCode === LEFT_ARROW) { // check if the left arrow is pressed
//    speed-=1; // decrease the variable
//  }
//}