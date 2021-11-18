var retFixo, retMovendo;
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(600, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  retFixo.velocityY=-3;
  retMovendo.velocityY=3;
  //retFixo.velocityX=-0;
  //retMovendo.velocityX=0;
}
function draw() {
  background(0, 0, 0);
  //retMovendo.x = World.mouseX;
  //retMovendo.y = World.mouseY;
  colisao(retFixo,retMovendo);

  //retFixo.velocityY=retFixo.velocityY-1;
  //retMovendo.velocityY=retMovendo.velocityY+1;
  drawSprites();
}
