const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

let engine;
let world;

var ball, ball2;
var con,cons;
function setup(){
createCanvas(400,400);
engine = Engine.create();

world = engine.world;

var options1={
  restitution:0.8   
}
ball2=Bodies.circle(350,50,10,options1);
ball=Bodies.circle(200,100,10,options1);
World.add(world , ball)
World.add(world, ball2)
var options2={
  bodyA:ball,
  pointA:{x:0, y:0},
  pointB:{x:200, y:50},
  length:50,
  stiffness:0.1
}

cons=Constraint.create(options2);
World.add(world, cons)
var options3={
  bodyA:ball,
  bodyB:ball2,
  pointA:{x:0, y:0},
  pointB:{x:0,y:0},
  length:50,
  stiffness:0.1
}
con=Constraint.create(options3);
World.add(world, con)
rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw(){
background(51);
Engine.update(engine);
stroke(255)
strokeWeight(5)
ellipse( ball.position.x, ball.position.y,10)
line(cons.pointB.x, cons.pointB.y, ball.position.x, ball.position.y)

ellipse(ball2.position.x,ball2.position.y,10)
line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
}
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}