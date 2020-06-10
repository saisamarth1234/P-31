
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var snake;
var cherry;
var score;
 
function setup() {
    createCanvas(400, 400);

    snake = new snake(200,200,score,5);
    cherry = new cherry(rand, rand, 5, 5);
    score = 0;

}
 

 
function draw() {

    if(keyDown(LEFT_ARROW)){
        snake.x = snake.x - 1;
    }
    else if(keyDown(RIGHT_ARROW)){
        snake.x = snake.x + 1;
    }
    else if(keyDown(UP_ARROW)){
        snake.y = snake.y - 1;
    }
    else if(keyDown(DOWN_ARROW)){
        snake.y = snake.y + 1;
    }
    cherry();

    
  
    drawsprites();
    
}
 

