var jaxon,jaxon_running;
var street,street_img;
var edges;
var limitd;
var limite;

function preload(){
  //imagens pré-carregadas
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");

  street_img = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  street = createSprite(200,200,400,400);
  street.addImage(street_img);

  jaxon = createSprite(200,300,70,70);
  jaxon.addAnimation("run",jaxon_running);
  jaxon.scale = 0.1;
  jaxon.depth = +1;

  edges = createEdgeSprites();
  limitd = createSprite(0,200,5,400);
  limite = createSprite(399,200,5,400);

  limitd.visible = false;
  limite.visible = false;
}

function draw() {
  background(0);

  street.velocityY = 8;
  if (street.y>400) {
    street.y = 200;
  }

  jaxon.x = mouseX;

  jaxon.collide(limite);
  jaxon.collide(limitd);

  drawSprites();
}