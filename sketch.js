const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint 

var balloon,balloonImg,backgroundImg;

function preload(){

  balloonImg = loadImage("Hot Air Ballon-02.png")
  backgroundImg = loadImage("Hot Air Ballon-01.png")

}

function setup() {
  createCanvas(1500,1000);

  database = firebase.database()
  console.log(database)

  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg)
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10
  }

  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10
  }

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10
  }
}