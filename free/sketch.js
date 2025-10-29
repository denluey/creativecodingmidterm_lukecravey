let spacingX = 20
let spacingY = 20

function setup(){
    createCanvas(1500,800);
    frameRate(5);
  
  
  
}

function draw(){
//sky
background(70,170,255);
// sea
fill(20,120,235);
noStroke();
rect(0,400,1500,750);
//pavement
fill(50,50,50)
rect(0,700,1500,600);
railsnpoles();

car();

    




}

function railsnpoles(){
    fill(50,50,50);
    rect(0,660,1500,25)

}

function car(){
    //body
    fill(50,50,50);
    beginShape();
    vertex(500,690);
    vertex(1000,690);
    vertex(1000,640)
    vertex(900,630);
    vertex(850,510);
    vertex(580,510);
    vertex(550,630);
    vertex(500,640);
    endShape();
    //wheel
    ellipse(600,690,100,100);
    ellipse(875,690,100,100);
    //window
    fill(200,200,200);
    beginShape();
    vertex(895,630);
    vertex(845,515);
    vertex(750,515);
    vertex(750,630);
    endShape();

}

