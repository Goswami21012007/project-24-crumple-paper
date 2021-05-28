
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,680,800,20)
	ball=new Ball(100,600,20)
	dustBin1=new Dustbin(550,620,20,100)
	dustBin2=new Dustbin(610,660,100,20)
	dustBin3=new Dustbin(670,620,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display()
  ball.display()
dustBin1.display()
dustBin2.display()
dustBin3.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}




