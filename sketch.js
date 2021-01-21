var tom,jerry,jerryImg,tomImg1,tomImg2,tomImg3,jerryImg1,jerryImg2,jerryImg3,garden;

function preload() {
    //load the images here
    tomImg1=loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree");
    tomImg3=loadAnimation("images/tomFour.png");
    
    garden=loadImage("images/garden.png");

    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600);
    tom.addImage("tomIMAGE",tomImg1);
    tom.scale=0.4;

    jerry=createSprite(200,500);
    jerry.addImage("jerryIMAGE",jerryImg1);
    jerry.scale=0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.x=300;
        tom.scale=0.4;
        tom.addAnimation("TomFunny",tomImg3);
        jerry.addAnimation("jerryFunny",jerry3)

        tom.changeAnimation("TomFunny");
        jerry.changeAnimation("jerryFunny");
        jerry.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-3;
      tom.addAnimation("TomFunnyHai",tomImg2);
      tom.changeAnimation("TomFunnyHai");
      
      jerry.addAnimation("jerryFunnyHai",jerry2)
      jerry.changeAnimation("jerryFunnyHai");

      jerry.frameDelay=20;
  }


}
