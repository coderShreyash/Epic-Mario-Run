var mario,mario_running,mario_collided;
var bg,bgImage;
var ground;
function preload(){
  mario_running=loadAnimation("images/mar1.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar2.png","images/mar3.png","images/mar7.png");
  bgImage=loadImage("images/bgnew.jpg");
}
function setup(){
  createCanvas(1400,650)
  mario=createSprite(200,475,40,100);
  mario.addAnimation("run",mario_running);
  mario.scale=0.3;

  ground=createSprite(200,560,200,40);
  ground.visible=false;
}
function draw(){
  if(keyDown("space")){
    mario.velocityY=-15;
  }
  mario.velocityY+=0.5;
  mario.debug=true;
  mario.setCollider("rectangle",0,0,300,500);
  mario.collide(ground);
  background(bgImage);
  drawSprites();
  


}