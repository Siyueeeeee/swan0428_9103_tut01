// Initialize an empty array to store big rectangle objects
let bigRectangles = [];
// Initialize the noise offset for dynamic colour changes
let noiseOffset = 0;

// The setup function to initialize the canvas and create rectangle objects
function setup() {
  // Set the canvas size to the smaller dimension of the window
  let canvasSize = min(windowWidth, windowHeight);
  // Create a square canvas  
  createCanvas(canvasSize, canvasSize);  
  // Loop through the bigRectangleAttributes array and create BigRectangle objects     
  for (let bigRectangleAttributeIndex = 0; 
    bigRectangleAttributeIndex < bigRectangleAttributes.length; bigRectangleAttributeIndex++) {
    bigRectangles.push(new BigRectangle(
      bigRectangleAttributes[bigRectangleAttributeIndex][0],
      bigRectangleAttributes[bigRectangleAttributeIndex][1], 
      bigRectangleAttributes[bigRectangleAttributeIndex][2],
      bigRectangleAttributes[bigRectangleAttributeIndex][3]
  ));
  }
  // Resize all big rectangles to fit the current canvas size
  bigRectangles.forEach(rectangle => rectangle.resize(canvasSize));
}

// The draw function that gets called repeatedly to draw the content on the canvas
function draw() {
  // Set canvas size and clear the background
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  background(255);
  // Update noise offset every frame  
  noiseOffset += 0.01;
  // Select large rectangle colours
  // Calculate a colour index using the noise function and the current rectangle position, selects a colour from the colour array and applies it to the rectangle object
  bigRectangles.forEach(rectangle => {
    let noiseValue = noise(noiseOffset + rectangle.baseX + rectangle.baseY + random(0, 0.1));
    let colorIndex = floor(noiseValue * colors.length);
    rectangle.color = colors[colorIndex];
    rectangle.resize(canvasSize);
    rectangle.display();
  });

  // Define the size ratio of small squares to the canvas
  let rectWidth = canvasSize * 0.022;
  let rectHeight = canvasSize * 0.02;
 // Draw animated rectangles based on Perlin noise array
  for (let perlinNoiseArrayIndex = 0; perlinNoiseArrayIndex < perlinNoiseArray.length; perlinNoiseArrayIndex++) {
    drawAnimated(perlinNoiseArray[
    perlinNoiseArrayIndex][0], 
    canvasSize * perlinNoiseArray[perlinNoiseArrayIndex][1], 
    canvasSize * perlinNoiseArray[perlinNoiseArrayIndex][2],
    rectWidth * perlinNoiseArray[perlinNoiseArrayIndex][3],
    rectHeight * perlinNoiseArray[perlinNoiseArrayIndex][4],
    perlinNoiseArray[perlinNoiseArrayIndex][5]);
  }
}

// Use perlin noise to draw to draw animated rectangles
function drawAnimated(type, x, y, w, h, offset) {
  for (let i = 0; i < RECT_COUNT; i++) {
    let noiseValue = noise(noiseOffset + i * 0.1 + offset + random(0, 0.1));
    let colorIndex = floor(noiseValue * colors.length);
    fill(colors[colorIndex]);
    if (type == ROW) {
      rect(x + i * w, y, w, h);
    } else if (type == COLUMN) {
      rect(x, y + i * h, w, h);
    }
  }
}

// Adjust canvas size when window is resized
function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  // redraw the canvas after resizing
  draw();
}



// Define a class named BigRectangle for creating and displaying large rectangles
class BigRectangle {
  constructor(x, y, width, height, color) {
    // The x-coordinate of the rectangle
    this.x = x;
    // The y-coordinate of the rectangle      
    this.y = y;
    // The width of the rectangle      
    this.width = width; 
    // The height of the rectangle 
    this.height = height;
    // The color of the rectangle 
    this.color = color;
    // Base x-coordinate for resizing  
    this.baseX = x;
    // Base y-coordinate for resizing     
    this.baseY = y; 
    // Base width for resizing    
    this.baseWidth = width; 
    // Base height for resizing
    this.baseHeight = height; 
  }

  // Method to resize the rectangle based on the new canvas size
  resize(canvasSize) {
    this.x = this.baseX * canvasSize;
    this.y = this.baseY * canvasSize;
    this.width = this.baseWidth * canvasSize;
    this.height = this.baseHeight * canvasSize;
  }

  // Method to display the rectangle
  display() {
    // Set the fill color for the rectangle
    fill(this.color);
    // Remove the stroke (outline) of the shape  
    noStroke();
    // Draw the rectangle        
    rect(this.x, this.y, this.width, this.height);  

  }
}


// Const
// Define an array of colours for subsequent dynamic colour selection  
let colors = ['#EBCF14', '#A53A32', '#39468C', '#D8D6C7'];
const RECT_COUNT = 50;
const ROW = "ROW";
const COLUMN = "COLUMN";

// Initialize an empty array to store big rectangle attributes
let bigRectangleAttributes = [
    [0.868, 0.22, 0.066, 0.066, colors[1]],
    [0.648, 0.198, 0.088, 0.165, colors[2]],
    [0.087, 0.66, 0.066, 0.066, colors[2]],
    [0.154, 0.770, 0.088, 0.088, colors[0]],
    [0.185, 0.793, 0.022, 0.022, colors[3]],
    [0.846, 0.666, 0.066, 0.066, colors[2]],
    [0.846, 0.732, 0.066, 0.033, colors[0]],
    [0.846, 0.765, 0.066, 0.035, colors[1]],
    [0.154, 0.088, 0.088, 0.022, colors[0]],
    [0.868, 0.21, 0.066, 0.066, colors[1]],
    [0.648, 0.198, 0.088, 0.165, colors[2]],
    [0.352, 0.374, 0.065, 0.187, colors[0]],
    [0.692, 0.462, 0.088, 0.1, colors[1]],
    [0.176, 0.358, 0.044, 0.088, colors[0]],
    [0.286, 0.07, 0.066, 0.11, colors[1]],
    [0.176, 0.066, 0.044, 0.11, colors[1]],
    [0.286, 0.154, 0.066, 0.028, colors[3]],
    [0.3, 0.099, 0.033, 0.033, colors[3]],
    [0.352, 0.44, 0.066, 0.022, colors[1]],
    [0.352, 0.487, 0.066, 0.044, colors[1]],
    [0.176, 0.11, 0.044, 0.022, colors[3]],
    [0.187, 0.396, 0.022, 0.022, colors[1]],
    [0.286, 0.456, 0.044, 0.11, colors[2]],
    [0.286, 0.456, 0.044, 0.022, colors[1]],
    [0.297, 0.5, 0.022, 0.022, colors[1]],
    [0.648, 0.264, 0.088, 0.066, colors[1]],
    [0.67, 0.275, 0.044, 0.033, colors[3]],
    [0.714, 0.502, 0.044, 0.033, colors[3]],
    [0.692, 0.58, 0.088, 0.04, colors[0]],
    [0.846, 0.502, 0.105, 0.04, colors[1]],
    [0.888, 0.502, 0.022, 0.04, colors[0]],
    [0.088, 0.22, 0.045, 0.045, colors[0]],
    [0.89, 0.11, 0.06, 0.047, colors[1]],
    [0.154, 0.265, 0.088, 0.075, colors[0]],
    [0.181, 0.287, 0.035, 0.035, colors[1]],
    [0.381, 0.946, 0.066, 0.044, colors[3]]
  ];
  
  // Perlin noise array for small rectangles
  let perlinNoiseArray = [
    [ROW, 0, 0.56, 1, 1, 0],
    [ROW, 0, 0.62, 1, 1, 0.1],
    [ROW, 0.058, 0.725, 1, 1, 0.2],
    [ROW, 0, 0.845, 1, 1, 0.3],
    [ROW, 0, 0.93, 1, 1, 0.4],
    [ROW, 0, 0.02, 1, 1.02, 0.5],
    [ROW, 0, 0.158, 1, 1, 0.6],
    [ROW, 0, 0.35, 1, 1, 0.7],
    [ROW, 0, 0.43, 1, 1, 0.8],
    [COLUMN, 0.022, 0, 1, 1.02, 0],
    [COLUMN, 0.066, 0, 1, 1, 0.1],
    [COLUMN, 0.132, 0, 1, 1, 0.2],
    [COLUMN, 0.242, 0, 1, 1, 0.3],
    [COLUMN, 0.95, 0, 1, 1, 0.4],
    [COLUMN, 0.912, 0.179, 1, 0.98, 0.5],
    [COLUMN, 0.868, 0, 1, 0.96, 0.6],
    [COLUMN, 0.824, 0, 1, 1, 0.7],
    [COLUMN, 0.52, 0, 1, 1, 0.8],
    [COLUMN, 0.472, 0, 1, 1, 0.9],
    [COLUMN, 0.592, 0.465, 1, 1, 1]
  ];


