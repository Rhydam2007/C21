function setup() {
  createCanvas(1200,800);
 FR= createSprite(400, 200, 80, 30);
 MR=createSprite(200,200,50,80);
 FR.shapeColor="green"
 MR.shapeColor="green"
 R1=createSprite(800,200,50,50);
 R2=createSprite(800,700,50,50);
 R3=createSprite(200,500,50,50);
 R4=createSprite(200,100,50,100);
 R5=createSprite(200,300,50,20);
 R1.velocityY=3;
 R2.velocityY=-3;
 R1.shapeColor="blue"
 R3.shapeColor="green"
 R4.shapeColor="green"
 R5.shapeColor="green"
}

function draw() {
  background(0,0,0);  
MR.x=mouseX
MR.y=mouseY
if(isTouching(MR,R3)){
  R3.shapeColor="blue"
  MR.shapeColor="blue"
  
}
else{
  R3.shapeColor="green"
  MR.shapeColor="green"
 }

bounce()
  drawSprites();
}
