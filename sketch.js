var seaImg, shipImg
function preload(){
  seaImg=loadImage("sea.png");
  shipImg=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200);
  sea.addImage(seaImg)
  sea.scale=0.5;
  sea.velocityX=-3;

  ship=createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale=0.25;
  
}

function draw() {
  background("white");
  if (sea.x < 0) {
    sea.x = 400;
  }
  drawSprites();
}