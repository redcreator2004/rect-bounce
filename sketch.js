var fixedRect, movingRect;

function setup() { 
  createCanvas(1200,800); 

  fixedRect = createSprite(200, 200, 50, 80); 
  fixedRect.shapeColor = "green"; 

  movingRect = createSprite(400, 200, 80, 30); 
  movingRect.shapeColor = "green"; 

  movingRect.velocityX = -8;
  fixedRect.velocityX = 3;

} 

function draw() { 
  background(0);



  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2) { 
    fixedRect.shapeColor = "red"; 
    movingRect.shapeColor = "red"; 
    
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  } else{ 
    fixedRect.shapeColor = "green"; 
    movingRect.shapeColor = "green"; 
  } 

  drawSprites(); 
}