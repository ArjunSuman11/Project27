
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var bobDiameter=radius;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(200, 400, 40, 0);
	bob2= new Bob(250, 500, 40, 0);
	bob3= new Bob(300, 400, 40, 0);
	bob4= new Bob(350, 400, 40, 0);
	bob5= new Bob(400, 400, 40, 0);
	roof1= new Roof (200, 200, 20, 10);
	rope1= new Rope(bob1.body, roof1.body, -bobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  drawSprites();
 
}



