var path,pathImg,runner1,runner1Img,runner2,runner2Img;

function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runner1Img=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  runner1=createSprite(180,340,30,30);
  runner1.addAnimation("runner",runner1Img);
  runner1.scale=0.1;
  // create left Boundary 
  leftBoundary=createSprite(0,0,100,800); 
  leftBoundary.visible = false; 
  //create right Boundary
   rightBoundary=createSprite(410,0,100,800);
   rightBoundary.visible = false;
}

function draw() {
  background(0);

  if(path.y>400){
    path.y=height/2;
  }
 runner1.x=World.mouseX;
 edges=createEdgeSprites();
 runner1.collide(edges[3]);
 runner1.collide(leftBoundary)
 runner1.collide(rightBoundary)

drawSprites();
}
