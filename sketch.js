var rocket
var bg1
var bg2
var bg3
var rocketImg
var bgImg


function preload(){
    rocketImg = loadImage("Rocket png.png");
    bgImg = loadImage("Background .jpeg");
    bg2Img = loadImage("Background full.jpeg");
   
}
function setup(){
    createCanvas(1200,600);
    bg1 = createSprite(600,300,50,50)
    bg1.addImage(bgImg)
    bg1.scale = 1.35;
    
    
    rocket = createSprite(600,500,50,50)
    rocket.addImage(rocketImg)
    rocket.scale = 0.3;
}
function draw(){
    background(0);

    if (keyIsDown(UP_ARROW)){
        rocket.velocityY = -6;
    }
    if (keyIsDown(LEFT_ARROW)){
        rocket.velocityX = -3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        rocket.velocityX = 3;
    }
    console.log(rocket.y)
    if (rocket.y <= -10 ){
        bg1.addImage(bg2Img);
        bg1.scale = 1.35;
        rocket.y = 500;
    }
    //camera.position.x = rocket.position.x
   // camera.position.y = rocket.position.y

    drawSprites();

} 