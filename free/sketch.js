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
//sun
car();
railsnpoles(0,0);
cloudone();


    




}

function railsnpoles(xthing,ything){
    //rail
    fill(50,50,50);
    rect(0,660,1500,25)
    //poles
    for (let x = xthing ; x < xthing+1500; x += 400) {
        push();
        translate(x,0);
        rect(50,669,50,75)
        pop();
  }


}

function car(){
    //body
    fill(50,50,50);
    beginShape();
    vertex(500,690);
    vertex(1000,690);
    vertex(1000,640)
    vertex(900,630);
    vertex(850,520);
    vertex(580,520);
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
    vertex(845,525);
    vertex(750,525);
    vertex(750,630);
    endShape();

}

function cloudone(){
    fill(255,255,255)
    beginShape();
    vertex(300,300);
    vertex(500,300);
    vertex(500,290);
    vertex(300,290);
    ellipse(300,295,10,10);
    ellipse(500,295,10,10);
    ellipse(400,260,80,80);
    ellipse(350,290,80,80);
    ellipse(390,290,50,50);
    ellipse(325,290,50,50);
    ellipse(420,290,60,60);
    ellipse(430,280,70,70);
    ellipse(470,290,50,50);
    endShape();

}

