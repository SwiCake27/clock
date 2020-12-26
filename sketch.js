

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var sechand,hourhand,minhand

  function setup() {
    createCanvas(720, 400);
    engine = Engine.create();
	world = engine.world;
    noStroke();
    h = hour();
m = minute();
s = second();
sechand=new shand(0,0,10,10)
hourhand=new hhand(0,0,10,10)
minhand=new mhand(0,0,10,10)
  }
  
  function draw() {
    background(0);
    text(h, 10, 50);
text( m, 30, 50);
text( s, 50, 50);
fill("blue");
    arc(360, 200, 300, 300, 100, h);
    fill("pink");
    arc(360, 200, 200, 200, 100, m);
    fill("purple");
    arc(360, 200, 100, 100, 100, s);
  
//sechand.display();
//minhand.display();
//hourhand.display();


  }
  