var gameState = play;
var gameState = end;
var play = 1;
var end = 0;
function preload(){
  treasureImage = loadImage("treasure_chest_PNG31.png");
  laserImage = loadImage("laser 2.png");
  laser2Image = loadImage("laser.png");
  youImage = loadImage("you.png");
  onImage = loadImage("on.png");
  offImage = loadImage("off.png");
  bulbImage = loadImage("bulb.png");
  bulb2Image = loadImage("bulboff.png");
  taponImage = loadImage("tapon.png");
  tapoffImage = loadImage("tapoff.png");
  treeImage = loadImage("tree.png");
  groundImage = loadImage("ground.png");
  bucketImage = loadImage("bucket.png");
  waterbucketImage = loadImage("water bucket.png");
  carImage = loadImage("car.png");
  cycleImage = loadImage("cycle.png");
  restartImage = loadImage("restart.png");
  clickImage = loadImage("starttext.png");
  textImage = loadImage("text10.png");
  wasdImage = loadImage("wasd.png");
  bellSound = loadSound("bell.mp3");
  switchSound = loadSound("switch.mp3");
  faucetSound = loadSound("faucet.mp3");
  waterSound = loadSound("watersound.mp3");
}

function setup() {
  createCanvas(400,400);

  wall1 = createSprite(279,341,10,150);
  wall2 = createSprite(350,200,150,10);
  wall3 = createSprite(7,50,150,10);
  wall4 = createSprite(286,50,300,10);
  wall5 = createSprite(291,170,130,10);
  wall6 = createSprite(221,150,10,80);
  wall7 = createSprite(180,380,10,400);
  wall8 = createSprite(180,88,10,80);
  wall9 = createSprite(64,130,10,150);
  wall10 = createSprite(20,255,80,10);
  wall11 = createSprite(57,362,10,80);
  wall12 = createSprite(11,371,80,10);

  laser1 = createSprite(279,232);
  laser1.addImage(laserImage);
  laser1.scale = 0.12
  
  laser2 = createSprite(110,50);
  laser2.addImage(laser2Image);
  laser2.scale = 0.12

  laser3 = createSprite(180,150);
  laser3.addImage(laserImage);
  laser3.scale = 0.12

  laser4 = createSprite(64,225);
  laser4.addImage(laserImage);
  laser4.scale = 0.12
  
  treasure = createSprite(346,352);
  treasure.addImage(treasureImage);
  treasure.scale = 0.03
  
  you = createSprite(15,19);
  you.addImage(youImage);
  you.scale = 0.3

  bulb = createSprite(356,19);
  bulb.addImage(bulbImage);
  bulb.scale = 0.1
  bulboff = createSprite(356,19);
  bulboff.addImage(bulb2Image);
  bulboff.scale = 0.1

  tapon = createSprite(381,95);
  tapon.addImage(taponImage);
  tapon.scale = 0.1
  tapoff = createSprite(381,95);
  tapoff.addImage(tapoffImage);
  tapoff.scale = 0.1


  off = createSprite(300,19);
  off.addImage(offImage);
  off.scale = 0.04
  on = createSprite(300,19);
  on.addImage(onImage);
  on.scale = 0.04

  off2 = createSprite(300,130);
  off2.addImage(offImage);
  off2.scale = 0.04
  on2 = createSprite(300,130);
  on2.addImage(onImage);
  on2.scale = 0.04

  off3 = createSprite(18,130);
  off3.addImage(offImage);
  off3.scale = 0.04
  on3 = createSprite(18,130);
  on3.addImage(onImage);
  on3.scale = 0.04
  
  off4 = createSprite(18,336);
  off4.addImage(offImage);
  off4.scale = 0.04
  on4 = createSprite(18,336);
  on4.addImage(onImage);
  on4.scale = 0.04

  ground = createSprite(20,223);
  ground.addImage(groundImage);
  ground.scale = 0.1;

  tree = createSprite(20,223);
  tree.addImage(treeImage);
  tree.scale = 0.1;

  bucket = createSprite(66,165);
  bucket.addImage(bucketImage);
  bucket.scale = 0.1;
  waterbucket = createSprite(66,165);
  waterbucket.addImage(waterbucketImage);
  waterbucket.scale = 0.1;
  waterbucket.visible = false;
  tree.visible = false;

  car = createSprite(120,282);
  car.addImage(carImage);
  car.scale = 0.05;
 
  cycle = createSprite(120,282);
  cycle.addImage(cycleImage);
  cycle.scale = 0.3;
  cycle.visible = false;

  text1 = createSprite(200,200);
  text1.addImage(textImage);
  text1.visible = false;

  wasd = createSprite(200,200);
  wasd.addImage(wasdImage);
  wasd.visible = true;
  

  restart = createSprite(180,289);
  restart.addImage(restartImage);
  restart.scale = 0.5;

  click = createSprite(200,200);
  click.addImage(clickImage);
  click.scale = 0.8;
  
  you.setCollider("rectangle",0,0,50,130);
}


function draw() {
  background("pink");
  text(mouseY,50,10);
  text(mouseX,10,10);

  wasd.visible = true;
  text1.visible = false;
  click.visible = false;

  if(keyDown("space")){
    wasd.visible = false;
    gameState = play;
  }


if (gameState === play){
  click.visible = false;
  text1.visible = false;
  wasd.visible = false;

  if(keyDown("d")){
    you.x = you.x+4;
  }
  if(keyDown("a")){
    you.x = you.x-4;
  }
  if(keyDown("w")){
    you.y = you.y-4;
  }
  if(keyDown("s")){
    you.y = you.y+4;
  }

  if(you.collide(off)){
    on.visible = false;
    laser2.x = 600;
    bulb.visible = false;
    switchSound.play();
  }
  if(you.collide(off2)){
    on2.visible = false;
    laser1.x = 600;
    tapon.visible = false;
    switchSound.play();
    faucetSound.play();
  }

  if(you.collide(off3)){
    on3.visible = false;
    laser3.x = 600;
    waterbucket.visible = true;
    bucket.visible = false;
    tree.visible = true;
    switchSound.play();
    waterSound.play();
  }
  if(you.collide(off4)){
    on4.visible = false;
    laser4.x = 600;
    cycle.visible = true;
    car.visible = false;
    switchSound.play();
    bellSound.play();
  }

  if(you.collide(treasure)){
  text1.visible = true;
  gameState = end;
  wasd,visible = false;
  }
}

if (gameState == end){
    text1.visible = true;
    wasd.visible = false;
  }
if(gameState == end && keyDown("r")) {
    reset();
}

restart.visible = false;

if (you.x < 0){
 you.x = 0;
}
if (you.x > 400){
  you.x = 400;
 }
 if (you.y < 0){
  you.y = 0;
 }
 if (you.y > 400){
  you.y = 400;
 }

  
  you.visible = true;
  you.collide(wall4);
  you.collide(wall2);
  you.collide(wall3);
  you.collide(wall1);
  you.collide(wall5);
  you.collide(wall6);
  you.collide(wall7);
  you.collide(wall8);
  you.collide(wall9);
  you.collide(wall10);
  you.collide(wall11);
  you.collide(wall2);
  you.collide(laser2);
  you.collide(laser3);
  you.collide(laser4);
  you.collide(laser1);

  drawSprites();
}
function reset(){
  gameState = play;
  on3.visible = true;
  on4.visible = true;
  on2.visible = true;
  on.visible = true;
  car.visible = true;
  bucket.visible = true;
  waterbucket.visible = false;
  tree.visible = false;
  tapon.visible = true;
  text1.visible = false;
  bulb.visible = true;
  cycle.visible = false;
  you.x = 15;
  you.y = 19;
  laser1.x = 279;
  laser1.y = 232;
  laser2.x = 110;
  laser2.y = 50;
  laser3.x = 180;
  laser3.y = 150;
  laser4.x = 64;
  laser4.y = 225;
}