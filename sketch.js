const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score;
var groundSprite,containerSprite
var engine, world;


function setup() {
  createCanvas(800, 700);
  createSprite(400, 200, 50, 50);


  engine = Engine.create();
  world = engine.world;

  groundSprite=new Ground(width/2,670,width,20);
  containerSprite=new Container(1200,650);
  ballSprite=new Ball(200,500,20,20); 

  score = 0;

    Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(230);

  groundSprite.display();
  containerSprite.display();
  ballSprite.display();
  
  if (ballSprite.isTouching(containerSprite)) {
    score=score+1;
  } 

  drawSprites();
}