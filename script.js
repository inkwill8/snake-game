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

// Create an array for snake body. Values should be pushed into this as snake eats bits
const snakeBody = [];

// Add bit to snake after 'eaten'. If coordinates of snake head and bit equal, add to length of snake 
const addBitToSnakeInterval = setInterval(addBitToSnake, 100);
function addBitToSnake() {
    if (snake.x === randomBit.x &&
        snake.y === randomBit.y) {
        snake.height += 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
	console.log(snakeBody);
    }
};

// Generate the snake on the canvas
const drawSnakeInterval = setInterval(drawSnake, 500);
function drawSnake() {
    ctx.clearRect(snake.x, snake.y, snake.width, snake.height);
    snake.y = snake.y - 20; 
    ctx.fillStyle = snake.color;
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
//    console.log(snake.x, snake.y);
    endSnakeDraw();
};

// Stop drawing snake
function endSnakeDraw() {
    if (snake.y <= 0) {
    clearInterval(drawSnakeInterval);
    }
};

// Snake Control Functions
function moveUp(e) {
    if (e.code === 'ArrowUp' ||
        e.code === 'KeyW' ||
        e.code === 'KeyK' ) {
        ctx.clearRect(snake.x, snake.y, snake.width, snake.height);
        snake.y -= 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

function moveRight(e) {
    if (e.code === 'ArrowRight' ||
        e.code === 'KeyD' ||
        e.code === 'KeyL' ) {
        ctx.clearRect(snake.x, snake.y, snake.width, snake.height);
        snake.x += 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

function moveDown(e) {
    if (e.code === 'ArrowDown' ||
        e.code === 'KeyS' ||
        e.code === 'KeyJ' ) {
        ctx.clearRect(snake.x, snake.y, snake.width, snake.height);
        snake.y += 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

function moveLeft(e) {
    if (e.code === 'ArrowLeft' ||
        e.code === 'KeyA' ||
        e.code === 'KeyH' ) {
        ctx.clearRect(snake.x, snake.y, snake.width, snake.height);
        snake.x -= 10;
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    }
};

// Generate a random bit location
function generateCoordinate() {

    let random = Math.floor((Math.random() * 500) + 10);
    
       while (random > 490 || random % 10 !== 0) {
           random = Math.floor((Math.random() * 500) + 10);
       }

    return random;
};

// Context for bit rendering on canvas
const randomBit = {
    x: generateCoordinate(),
    y: generateCoordinate(),
    width: 10,
    height: 10,
    color: 'black'
};

// Generate a bit of food on the canvas
function drawBit() {
    ctx.fillStyle = randomBit.color;
    ctx.fillRect(randomBit.x, randomBit.y, randomBit.width, randomBit.height);
	console.log(randomBit);
};

drawBit();


// Increment counter
// EVENT LISTENERS
document.addEventListener('keydown', moveUp);
document.addEventListener('keydown', moveRight);
document.addEventListener('keydown', moveDown);
document.addEventListener('keydown', moveLeft);

