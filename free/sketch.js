let spacingX = 20
let spacingY = 20
let size = 20

function setup(){
    createCanvas(800,800);
    frameRate(5);
  
  
  
}

function draw(){
    background(200,100,50);
    fill(255,200,0);
    rectMode(CENTER);


goldngems(0,0);
bladenblood(200,0);
booksnmagic(0,200);
holything(200,200);
goldngems(0,400);
bladenblood(400,200);
booksnmagic(400,0);
holything(400,400);
goldngems(600,600);
bladenblood(400,600);
booksnmagic(400,600);
holything(0,600);
bladenblood(600,400)
holything(600,0)
goldngems(600,200);
bladenblood(200,600);
booksnmagic(200,400);




}

function goldngems(xthing,ything){

for (let x = xthing ; x < xthing+200; x += spacingX) {
    for (let y = ything; y < ything+200; y += spacingY) {
      push();
      noStroke();
      translate(x, y);
      fill(100,100,255);
      rect(5,5,size,size)
      //coin
      ellipseMode(CENTER)
      fill(255,200,0);
      ellipse(5, 5, size, size);
      fill(0);
      rect(5,5,size-10,size-10);
      //gem
      fill(0,230,0);
      quad(10,5,15,10,10,15,5,10);
      quad(0,-5,5,0,0,5,-5,0);
      pop();
    }
  }
}

function bladenblood(xthing,ything){

for (let x = xthing ; x < xthing+200; x += spacingX) {
    for (let y = ything;  y < ything+200; y += spacingY) {
      push();
      translate(x, y);
      stroke(100,0,0)
      fill(100,100,100)
      rect(5,5,size-5,size-5)
      noStroke();
      //blades
      fill(200,200,200);
      quad(5,-5,10,5,5,15,0,5);
      quad(-5,5,5,10,15,5,5,0);
      //blood
      fill(200,0,0);
      quad(-5,0,10,10,15,10,0,0)
      pop();

    }
  }
    
}

function booksnmagic(xthing,ything){

for (let x = xthing ; x < xthing+200; x += spacingX) {
    for (let y = ything;  y < ything+200; y += spacingY) {
      push();
      //book
      translate(x, y);
      fill(100,50,0);
      stroke(200,230,255)
      rect(5,5,size-2,size-2)
      //eye
      fill(0,0,200);
      ellipse(5,5,size-10,size-10);
      fill(50,70,255);
      noStroke()
      ellipse(5,5,size-10,size-15);
      fill(0,0,200);
      ellipse(5,5,size-18,size-18);
      pop();

    }
  }
}

function holything(xthing,ything){

for (let x = xthing ; x < xthing+200; x += spacingX) {
    for (let y = ything;  y < ything+200; y += spacingY) {
      push();
      translate(x, y);
      noStroke();
      fill(0,100,0);
      rect(5,5,size,size)
      //light
      fill(255,255,0);
      rect(5,5,size-3,size-3);
      fill(255,255,200);
      ellipse(5, 5, size-1, size-1);
      //pedestal
      fill(255,255,255);
      stroke(230,230,0)
      quad(0,10,2,5,8,5,10,10)
      //thing
      noStroke();
      fill(255,255,0)
      triangle(2,4,5,-2,8,4);
      pop();
      

    }
  }
}
