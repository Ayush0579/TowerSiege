const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tries = 3;
var score = 0;
var blocks = [];

function preload() {
}

function setup() {
    canvas = createCanvas(1500,700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(750,685,1500,50);
    border1 = new Ground(-25, 350, 50, 700);
    border2 = new Ground(750, -25, 1500, 50);
    border3 = new Ground(1525, 350, 50, 700);
    platform1 = new Ground(550,500,200,20);
    platform2 = new Ground(1250,300,200,20);

    ball = new Ball(200,500);
    ballSling = new slinger(ball.body, {x: 200, y: 500});

    block1A = Bodies.rectangle(565,470,30,30);
    block2A = Bodies.rectangle(535,470,30,30);
    block3A = Bodies.rectangle(595,470,30,30);
    block4A = Bodies.rectangle(505,470,30,30);
    block5A = Bodies.rectangle(625,470,30,30);
    block6A = Bodies.rectangle(475,470,30,30);
    World.add(world,[block1A,block2A,block3A,block4A,block5A,block6A]);
    blocks.push(block1A,block2A,block3A,block4A,block5A,block6A);

    block7A = Bodies.rectangle(550,440,30,30);
    block8A = Bodies.rectangle(520,440,30,30);
    block9A = Bodies.rectangle(580,440,30,30);
    block10A = Bodies.rectangle(490,440,30,30);
    block11A = Bodies.rectangle(610,440,30,30);
    World.add(world,[block7A,block8A,block9A,block10A,block11A]);
    blocks.push(block7A,block8A,block9A,block10A,block11A);

    block12A = Bodies.rectangle(565,410,30,30);
    block13A = Bodies.rectangle(535,410,30,30);
    block14A = Bodies.rectangle(595,410,30,30);
    block15A = Bodies.rectangle(505,410,30,30);
    World.add(world,[block12A,block13A,block14A,block15A]);
    blocks.push(block12A,block13A,block14A,block15A);

    block16A = Bodies.rectangle(550,380,30,30);
    block17A = Bodies.rectangle(520,380,30,30);
    block18A = Bodies.rectangle(580,380,30,30);
    World.add(world,[block16A,block17A,block18A]);
    blocks.push(block16A,block17A,block18A);

    block19A = Bodies.rectangle(565,350,30,30);
    block20A = Bodies.rectangle(535,350,30,30);
    World.add(world,[block19A,block20A]);
    blocks.push(block19A,block20A);

    block21A = Bodies.rectangle(550,320,30,30);
    World.add(world,[block21A]);
    blocks.push(block21A);

    block1B = Bodies.rectangle(1250,270,30,30);
    block2B = Bodies.rectangle(1220,270,30,30);
    block3B = Bodies.rectangle(1280,270,30,30);
    block4B = Bodies.rectangle(1190,270,30,30);
    block5B = Bodies.rectangle(1310,270,30,30);
    World.add(world,[block1B,block2B,block3B,block4B,block5B]);
    blocks.push(block1B,block2B,block3B,block4B,block5B);

    block6B = Bodies.rectangle(1235,240,30,30);
    block7B = Bodies.rectangle(1265,240,30,30);
    block8B = Bodies.rectangle(1205,240,30,30);
    block9B = Bodies.rectangle(1295,240,30,30);
    World.add(world,[block6B,block7B,block8B,block9B]);
    blocks.push(block6B,block7B,block8B,block9B);

    block10B = Bodies.rectangle(1250,210,30,30);
    block11B = Bodies.rectangle(1220,210,30,30);
    block12B = Bodies.rectangle(1280,210,30,30);
    World.add(world,[block10B,block11B,block12B]);
    blocks.push(block10B,block11B,block12B);

    block13B = Bodies.rectangle(1235,180,30,30);
    block14B = Bodies.rectangle(1265,180,30,30);
    World.add(world,[block13B,block14B]);
    blocks.push(block13B,block14B);
    
    block15B = Bodies.rectangle(1250,150,30,30);
    World.add(world,[block15B]);
    blocks.push(block15B);

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(51,132,220);

    ground.display();
    platform1.display();
    platform2.display();

    ball.display(200,500);
    ballSling.display(ball.body, {x: 200, y: 500});

    fill("yellow");
    rect(block1A.position.x,block1A.position.y,30,30);
    rect(block2A.position.x,block2A.position.y,30,30);
    rect(block3A.position.x,block3A.position.y,30,30);
    rect(block4A.position.x,block4A.position.y,30,30);
    rect(block5A.position.x,block5A.position.y,30,30);
    rect(block6A.position.x,block6A.position.y,30,30);
    fill("pink");
    rect(block7A.position.x,block7A.position.y,30,30);
    rect(block8A.position.x,block8A.position.y,30,30);
    rect(block9A.position.x,block9A.position.y,30,30);
    rect(block10A.position.x,block10A.position.y,30,30);
    rect(block11A.position.x,block11A.position.y,30,30);
    fill("orange");
    rect(block12A.position.x,block12A.position.y,30,30);
    rect(block13A.position.x,block13A.position.y,30,30);
    rect(block14A.position.x,block14A.position.y,30,30);
    rect(block15A.position.x,block15A.position.y,30,30);
    fill("cyan");
    rect(block16A.position.x,block16A.position.y,30,30);
    rect(block17A.position.x,block17A.position.y,30,30);
    rect(block18A.position.x,block18A.position.y,30,30);
    fill("green");
    rect(block19A.position.x,block19A.position.y,30,30);
    rect(block20A.position.x,block20A.position.y,30,30);
    fill("red");
    rect(block21A.position.x,block21A.position.y,30,30);

    fill("yellow");
    rect(block1B.position.x,block1B.position.y,30,30);
    rect(block2B.position.x,block2B.position.y,30,30);
    rect(block3B.position.x,block3B.position.y,30,30);
    rect(block4B.position.x,block4B.position.y,30,30);
    rect(block5B.position.x,block5B.position.y,30,30);
    fill("pink");
    rect(block6B.position.x,block6B.position.y,30,30);
    rect(block7B.position.x,block7B.position.y,30,30);
    rect(block8B.position.x,block8B.position.y,30,30);
    rect(block9B.position.x,block9B.position.y,30,30);
    fill("orange");
    rect(block10B.position.x,block10B.position.y,30,30);
    rect(block11B.position.x,block11B.position.y,30,30);
    rect(block12B.position.x,block12B.position.y,30,30);
    fill("cyan");
    rect(block13B.position.x,block13B.position.y,30,30);
    rect(block14B.position.x,block14B.position.y,30,30);
    fill("green");
    rect(block15B.position.x,block15B.position.y,30,30);

    for (let i = 0; i < blocks.length; i++) {
        if(blocks[i]){
            if(blocks[i].position.y > 600){
                score = score+1;
                blocks[i] = null;
            }
        }
    }

    fill("black");
    textSize(40);
    text("Score: " + score + "/36", 1200, 50);
}

function keyPressed(){
    if(keyCode === 32){
        ballSling.attach(ball.body);
    }
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    if(tries > 0){
        ballSling.fly();
        tries = tries-1;
    }
}