
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5
var roof
var sling1, sling2, sling3, sling4, sling5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,150,400,50)

	ball1= new Ball(900,150,30)
	ball2= new Ball(900,150,30)
	ball3= new Ball(900,150,30)
	ball4= new Ball(900,150,30)
	ball5= new Ball(900,150,30)

	sling1= new SlingShot(ball1.body,{x:400, y:150});
	sling2= new SlingShot(ball2.body,{x:500, y:150});
	sling3= new SlingShot(ball3.body,{x:550, y:150});
	sling4= new SlingShot(ball4.body,{x:300, y:150});
	sling5= new SlingShot(ball5.body,{x:250, y:150});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();  

 
}



