
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var invisibleGround;
function preload(){
  
  
  monkey_running =    loadImage("dad.jpg")        
  
  bananaImage = loadImage("heart.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(100,300,20,20);
  monkey.addAnimation("monkey1",monkey_running);
  ground = createSprite(10,300,800,10);
  monkey.scale = 0.01;
  bananaGroup = new Group();
  obstacleGroup = new Group();
  score = 0
}


function draw() {
background("white")
text("Love: "+ score, 200,50);
text("Collect The Hearts to get love", 200,50);
 if(keyDown("space")) {
        monkey.velocityY = -12;
  
 }
  monkey.velocityY = monkey.velocityY + 0.8
  ground.velocityX = -4
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  
  if (frameCount % 80 === 0){
    banana = createSprite(400,200,10,10);
    banana.velocityX = -4;
    banana.lifetime = 300;
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    bananaGroup.add(banana)
    
      
    

  }
  
       if (bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach()
         monkey.scale = monkey.scale + 0.02
         score = score+1
       }
   //if (frameCount % 100 === 0){
     //obstacle = createSprite(500,280,50,10)
     //obstacle.velocityX = -6
     //obstacle.lifetime = 600
     //obstacle.addImage(obstacleImage)
     //obstacle.scale = 0.04
     //obstacleGroup.add(obstacle)
   //}
  //if (obstacleGroup.isTouching(monkey)){
   // obstacleGroup.setVelocityXEach(0)
   // bananaGroup.setVelocityXEach(0)
   // monkey.scale = monkey.scale - 0.01
      
  
  drawSprites()
}






