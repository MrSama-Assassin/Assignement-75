const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, shovel, ball1,ball2,ball3;
var chair1, chair2, umbrella1, umbrella2,basket, backgroundImg;

function preload() {
    bgimg = loadImage('./sprites/beach.jpg')
}

function setup(){
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    var options={
        isStatic: true,
    }
    ground = Bodies.rectangle(0, 590, 4200, 8, options)
    ball1 = new Ball(970,0)
    ball3 = new Ball(678,500)
    ball2 = new Ball(560,0)
    basket = new Basket(600, 150)
    chair1 = new Chair(1400, 400)
    chair2 = new Chair(100, 400)
    shovel = new Shovel(100, 100);
    umbrella1 = new Umbrella(1250, 300)
    umbrella2 = new Umbrella(250, 300)

    Composite.add(world, ground)
}

function draw(){
    Engine.update(engine);
    background(bgimg);
    chair1.display();
    umbrella1.display();
    umbrella2.display();
    chair2.display();
    basket.display();
    ball1.display();
    ball3.display();
    shovel.display();
    ball2.display();
    fill('#C2B280')
    stroke('10px')
    rect(ground.position.x, ground.position.y, 1600, 10);

}

