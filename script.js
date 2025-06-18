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

// Generate a random bit location
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

// Generate the snake on the canvas
const interval = setInterval(drawSnake, 1000);
function drawSnake() {
    ctx.fillStyle = snake.color;
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    snake.y = snake.y - 20; 
    console.log(snake.y);
    endSnakeDraw();
};

// Stop drawing snake
function endSnakeDraw() {
    if (snake.y <= 0) {
    clearInterval(interval);
    }
};


// Generate a bit of food on the canvas
function drawBit() {
    ctx.fillStyle = randomBit.color;
    ctx.fillRect(generateCoordinate(), generateCoordinate(), randomBit.width, randomBit.height);
};

drawBit();

// Add bit to snake after 'eaten'. Basically, if the coordinates of snake head and random bit after =, add to height of snake
// Increase speed of snake after bit is eaten
// Increment counter
// End game if border is hit or snake touches itself

