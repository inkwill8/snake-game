// HTML Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;

// Place head of snake at starting position
ctx.fillStyle = 'purple';
ctx.fillRect(250, 250, 10, 10);

// Generate a 'bit'
function generateCoordinate() {

    let random = Math.floor((Math.random() * 500) + 10);
    
       while (random > 490) {
           random = Math.floor((Math.random() * 500) + 10);
       }

    return random;
};

// Context for bit rendering on canvas
ctx.fillStyle = 'black';
ctx.fillRect(generateCoordinate(), generateCoordinate(), 10, 10);

// Make the snake move
function constantSnakeMovement() {
    
};

// Add bit to snake after 'eaten'
// Increase speed of snake after bit is eaten
// Increment counter
// End game if border is hit or snake touches itself

