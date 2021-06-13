var a;
var circles=[];
var groundGame;
var ground1,ground2;
var engine;
var world;
var box1;
var polygon1;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(displayWidth, displayHeight);
  stroke(255)
  engine = Matter.Engine.create();
  world = engine.world;
  ground1 = new ground(1000,600,200,10);
ground2= new ground(1400,300,200,20);
groundGame = new ground(displayWidth/2,999,displayWidth,10);
box1 = new box(1000,565);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
} 

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  ground1.display();
  ground2.display();
  groundGame.display(); 
  box1.display();
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
