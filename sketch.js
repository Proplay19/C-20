var rect,rect2;



function setup() {
  createCanvas(1200,800);
  rect=createSprite(400, 100, 50, 80);
  rect2=createSprite(400, 800, 80, 30);
  rect.shapeColor="green";
  rect2.shapeColor="green";

  rect2.velocityY=-5;
  rect.velocityY=5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  

  if(rect2.x-rect.x<rect2.width/2+rect.width/2 && rect.x-rect2.x<rect.width/2+rect2.width/2 )
  {
    rect2.velocityX=rect2.velocityX*(-1);
    rect.velocityX=rect.velocityX*(-1);
  }
  
  if( rect2.y-rect.y<rect2.height/2+rect.height/2 && rect.y-rect2.y<rect.height/2+rect2.height/2)
    {
     rect2.velocityY=rect2.velocityY*(-1);
     rect.velocityY=rect.velocityY*(-1);
    }

}