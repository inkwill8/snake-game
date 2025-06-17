// HTML Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;

// SNAKE OBJECT
const snake = {
    x: 250,
    y: 250,
    width: 10,
    height: 10,
    color: 'purple'
};

ctx.fillStyle = snake.color;
ctx.fillRect(snake.x, snake.y, snake.width, snake.height);

// Generate a 'bit'
function generateCoordinate() {

    let random = Math.floor((Math.random() * 500) + 10);
    
       while (random > 490) {
           random = Math.floor((Math.random() * 500) + 10);
       }

    return random;
};

// Context for bit rendering on canvas
const randomBit = {
    width: 10,
    height: 10,
    color: 'black'
};

ctx.fillStyle = randomBit.color;
ctx.fillRect(generateCoordinate(), generateCoordinate(), randomBit.width, randomBit.height);

// Make the snake move
function constantSnakeMovement() {
    
};

// Add bit to snake after 'eaten'
// Increase speed of snake after bit is eaten
// Increment counter
// End game if border is hit or snake touches itself

