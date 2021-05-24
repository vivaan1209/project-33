const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(50,50)
 

}

function draw() {
  background(backgroundImg); 
  
  snow1.display();
 
  
  
  drawSprites();
}