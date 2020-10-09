
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
	tree = new TREE();
	stone = new STONE(235,420,30,50);

	boy = new BOY(200,420,200,400);

	mango1=new MANGO(1100,100,30);
  mango2=new MANGO(1170,130,30);
	mango3=new MANGO(1010,140,30);
	mango4=new MANGO(1000,70,30);
	mango5=new MANGO(1100,70,30);
	mango6=new MANGO(1000,230,30);
	mango7=new MANGO(900,230,40);

	l = new launcher(stone.body,{x:235,y:420});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
 
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();  

 l.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

  drawSprites();
}

function detectCollision(lstone,lmango)
{
 // console.log("hit");
	mangoBodyposition = lmango.body.position
	stoneBodyposition = lstone.body.position

	var distance = dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y);
      
  console.log(distance)
 //console.log(lmango.r+lstone.r)
  if (distance<=lmango.r+lstone.r)
        {
          console.log("hit1111");
	        Matter.Body.setStatic(lmango.body,false);
        }


}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  l.fly();
}

function keyPressed()
{
   if (keyCode === 32)
   {
     Matter.Body.setPosition(stone.body,{x:235,y:420})
     l.attach(stone.body);
   }  
}
