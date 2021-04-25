var cat , catIMG,catImg2;
var mouse, mouseIMG;
var background , backgroundImg




function preload() {
    //load the images here
backgroundImg = loadImage("images/garden.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseIMG = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png",)
catIMG = loadAnimation("images/cat1.png")
catImg3 = loadAnimation("images/cat4.png")
mouse2Img = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);


cat = createSprite(700,650,40,40)
cat.addAnimation("catrunning",catIMG)
cat.scale = 0.1

mouse = createSprite(100,650,40,40)
mouse.addAnimation("mouserunning",mouseIMG)
mouse.scale = 0.1
    //create tom and jerry sprites here

    
    

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRunning",catImg2)
    cat.changeAnimation("catRunning")
}


if(cat.x - mouse.x<(cat.width - mouse.width)/2){
    cat.addAnimation("catLastImage",catImg3)
    cat.changeAnimation("catLastImage")
    cat.velocityX = 0

}
if(cat.isTouching(mouse)){
    mouse.addAnimation("mouseTeasing",mouse2Img)
    mouse.changeAnimation("mouseTeasing")
}

  //For moving and changing animation write code here


}
