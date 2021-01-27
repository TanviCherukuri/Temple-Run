const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, monkeyAnimation, coinIMG, jungleIMG, caveEntranceIMG, stoneIMG, quicksandIMG;

function preload() {
    monkeyAnimation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    coinIMG = loadImage("Coin.png");
    jungleIMG = loadImage("jungle.jpg");
    caveEntranceIMG = loadImage("Cave Entrance.jpg");
    stoneIMG = loadImage("stone.png");
    quicksandIMG = loadImage("Quicksand.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
}