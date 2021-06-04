const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow = [];
var maxSnow = 100;
var snowbgImage;

function preload(){

  snowbgImage = loadImage("snow1.jpg");
  
}
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);
  
  if(frameCount%150 === 0){
    for(var i = 0;i<maxSnow;i++){
      snow.push(new Snow(random(0,1500),random(0,700)))
    }
  }
  
}

function draw() {
  
  background(snowbgImage); 
  for(var i = 0 ; i < maxSnow; i++){
    snow[i].display();
    snow[i].updateY();
  }
  
  
 // drawSprites();
}