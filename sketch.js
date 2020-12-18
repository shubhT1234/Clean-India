const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var world;
var garb;
var box1, pig1;
var bin1,bin2,bin3,ground;
var backgroundImg;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bin1=new Bin(580,345,20,45);
    bin2=new Bin(600,380,60,15);
    bin3=new Bin(660,345,20,45);

    ground=new Ground(1,390,700,15)
    garb=new Ball(100,380,40,40);
}

function draw(){
    background("white");
    Engine.update(engine);
    console.log(bin1.X,bin1.y)
     bin1.display();
     bin2.display();
     bin3.display();
     ground.display();
     garb.display();
     if(keyDown("up")){
         Matter.Body.applyForce(garb.body,garb.body.position,{x:12,y:-12})
     }
}