var airBalloon
var BackgroundImg
function setup() {
  createCanvas(500,500);
  airBalloon(400, 200, 50, 50);
}
function preload(){
 BackgroundImg = LoadImage("Hot Air Ballon-01.png");

}

function draw() {
  background(); 
  
  if(keyDown(LEFT_ARROW)){
    airBalloon.x =balloon.x -10;
  }
  else if (keyDown(RIGHT_ARROW)){
    airBalloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
   airBalloon.y = balloon.y -10;
  }
  else if(keyDown(UP_ARROW)){
    airBalloon.y = balloon.y +10;
   }
  drawSprites();
}