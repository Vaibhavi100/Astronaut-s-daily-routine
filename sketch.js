var bg,sleep,brush,gym,eat,drink,move;
var astronaut;
var edge;
function preload(){
bg=loadImage("iss.png")
sleep=loadAnimation("sleep.png")
brush=loadAnimation("brush.png")
gym=loadAnimation("gym1.png","gym2.png")
eat=loadAnimation("eat1.png","eat2.png")
drink=loadAnimation("drink1.png","drink2.png")
bath=loadAnimation("bath1.png","bath2.png")
move=loadAnimation("move.png","move1.png")
}

function setup() {
  createCanvas(800,400);
astronaut=createSprite(400,200)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1


}

function draw() {
  background(bg)
  edge=createEdgeSprites();
astronaut.bounceOff(edge)

textSize(20)
fill("white")
text("Instructions: ",20,20)
textSize(15)
text("UP_ARROW=Brushing",20,50)
text("DOWN_ARROW=Gyming",20,70)
text("LEFT_ARROW=Eating",20,90)
text("RIGHT_ARROW=Bathing",20,110)
text("M key=Moving",20,130)

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming")
  
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("Bathing",bath)
  astronaut.changeAnimation("Bathing")
  
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving")
  astronaut.velocityX=1
  astronaut.velocityY=1
}
  drawSprites();
}