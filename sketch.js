var garden, rabbit, apple, leaves, orangeleaf
var gardenImg,rabbitImg, appleImg, leavesImg, orangeleafImg;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leavesImg=loadImage("leaf.png")
orangeleafImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

function createApples(){
  apple = createSprite(random(50,350),40, 10, 10)
  apple.addImage(appleImg);
}
 
}




function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
 var select_sprites = Math.round(random(1,3));
 if (frameCount % 80 == 0){
if (select_sprites == 1)
{createApples();} 
else if (select_sprites == 2){              createApples();}
else{createApples();}}
drawSprites();


var select_sprites = Math.round(random(1,3));
 if (frameCount % 100 == 0){
if (select_sprites == 1)
{createLeaves();} 
else if (select_sprites == 5){              createApples();}
else{createLeaves();}}
drawSprites();

var select_sprites = Math.round(random(1,3));
 if (frameCount % 100 == 0){
if (select_sprites == 1)
{createOrangeleaves();} 
else if (select_sprites == 5){              createApples();}
else{createOrangeleaves();}}
drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40, 10, 10)
  apple.addImage(appleImg);
  apple.scale=0.1
  apple.velocityY= 5;
  apple.lifetime = 150;
}

function createLeaves(){
  leaves = createSprite(random(50,350),40, 10, 10)
  leaves.addImage(leavesImg);
 leaves.scale=0.1
  leaves.velocityY= 5;
  leaves.lifetime = 150;
}


function createOrangeleaves(){
  orangeleaf = createSprite(random(50,350),40, 10, 10)
  orangeleaf.addImage(orangeleafImg);
  orangeleaf.scale=0.1
  orangeleaf.velocityY= 5;
  orangeleaf.lifetime = 150;
}