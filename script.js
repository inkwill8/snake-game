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
const interval = setInterval(drawSnake, 500);
function drawSnake() {
    ctx.clearRect(snake.x, snake.y, snake.width, snake.height);
    snake.y = snake.y - 20; 
    ctx.fillStyle = snake.color;
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    console.log(snake.x, snake.y);
    endSnakeDraw();
};

// Stop drawing snake
function endSnakeDraw() {
    if (snake.y <= 0) {
    clearInterval(interval);
    }
};

// Snake Movement Functions
function moveUp(e) {
    if (e.code === 'ArrowUp' ||
        e.code === 'KeyW' ||
        e.code === 'KeyK' ) {
        snake.y -= 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

function moveRight(e) {
    if (e.code === 'ArrowRight' ||
        e.code === 'KeyD' ||
        e.code === 'KeyL' ) {
        snake.x += 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

function moveDown(e) {
    if (e.code === 'ArrowDown' ||
        e.code === 'KeyS' ||
        e.code === 'KeyJ' ) {
        snake.y += 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }

};

function moveLeft(e) {
    if (e.code === 'ArrowLeft' ||
        e.code === 'KeyA' ||
        e.code === 'KeyH' ) {
        snake.x -= 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

// Generate a bit of food on the canvas
function drawBit() {
    ctx.fillStyle = randomBit.color;
    ctx.fillRect(generateCoordinate(), generateCoordinate(), randomBit.width, randomBit.height);
};

drawBit();

// EVENT LISTENERS
document.addEventListener('keydown', moveUp);
document.addEventListener('keydown', moveRight);
document.addEventListener('keydown', moveDown);
document.addEventListener('keydown', moveLeft);
// Add bit to snake after 'eaten'. Basically, if the coordinates of snake head and random bit after =, add to height of snake
// Increase speed of snake after bit is eaten
// Increment counter
// End game if border is hit or snake touches itself

