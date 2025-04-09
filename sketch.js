var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor=color("#20fc03")
}

function draw() 
{
   background("blue");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor=color("#fc03e8")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor=color("#fc0384")
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor=color("#03cafc")
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor=color("#fcf403")
  }

  drawSprites();
}




