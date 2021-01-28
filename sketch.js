const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango= new Mango(900,190,20);
	mango2= new Mango(900,160,20);
	mango3= new Mango(595,210,20);
	mango4= new Mango(655,210,20);
	mango5= new Mango(715,210,20);

    tree=new Tree(820,15,390,400);

    stone= new Stone(100,420,30); 

    ground= new Ground(600,height,1200,20);
    launcherObject=new launcher(stone.body,{x:235,y:420})
	Engine.run(engine)
}


function draw() {
  background(230);
  rectMode(CENTER);
 
  
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  tree.display();
  stone.display();
  launcherObject.display();
  //detectCollison();
  

  detectCollison(stone,mango);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);
 

  drawSprites();

 
 
}

function detectCollison(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      console.log("mango collided")
  	  Matter.Body.setStatic(lmango.body,false);
    }
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  
  launcherObject.fly();
}