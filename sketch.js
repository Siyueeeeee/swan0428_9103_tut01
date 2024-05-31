// Define a class named BigRectangle for creating and displaying large rectangles
class BigRectangle {
    constructor(x, y, width, height, color) {
      this.x = x;      // The x-coordinate of the rectangle
      this.y = y;      // The y-coordinate of the rectangle
      this.width = width;  // The width of the rectangle
      this.height = height; // The height of the rectangle
      this.color = color;  // The color of the rectangle
      this.baseX = x;     // Base x-coordinate for resizing
      this.baseY = y;     // Base y-coordinate for resizing
      this.baseWidth = width; // Base width for resizing
      this.baseHeight = height; // Base height for resizing
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
      fill(this.color);  // Set the fill color for the rectangle
      noStroke();        // Remove the stroke (outline) of the shape
      rect(this.x, this.y, this.width, this.height);  // Draw the rectangle
    }
  }
  
  let bigRectangles = [];  // Initialize an empty array to store big rectangle objects
  
  let colors = ['#EBCF14', '#A53A32', '#39468C', '#D8D6C7'];//Define an array of colours for subsequent dynamic colour selection
  let noiseOffset = 0;// Initialize the noise offset for dynamic colour changes
  const RECT_COUNT = 50;

  // The setup function to initialize the canvas and create rectangle objects
  function setup() {
    let canvasSize = min(windowWidth, windowHeight);  // Set the canvas size to the smaller dimension of the window
    createCanvas(canvasSize, canvasSize);            // Create a square canvas
  
  // Set big rectangle, Layer them on the canvas from largest to smallest.
 bigRectangles.push(new BigRectangle(0.868, 0.22, 0.066, 0.066, colors[1]));
 bigRectangles.push(new BigRectangle(0.648, 0.198, 0.088, 0.165, colors[2]));
 bigRectangles.push(new BigRectangle(0.087, 0.66, 0.066, 0.066, colors[2]));
 bigRectangles.push(new BigRectangle(0.154, 0.770, 0.088, 0.088, colors[0]));
 bigRectangles.push(new BigRectangle(0.185, 0.793, 0.022, 0.022, colors[3]));
 bigRectangles.push(new BigRectangle(0.846, 0.666, 0.066, 0.066, colors[2]));
 bigRectangles.push(new BigRectangle(0.846, 0.732, 0.066, 0.033, colors[0]));
 bigRectangles.push(new BigRectangle(0.846, 0.765, 0.066, 0.035, colors[1]));
 bigRectangles.push(new BigRectangle(0.154, 0.088, 0.088, 0.022, colors[0]));
 bigRectangles.push(new BigRectangle(0.868, 0.21, 0.066, 0.066, colors[1]));
 bigRectangles.push(new BigRectangle(0.648, 0.198, 0.088, 0.165, colors[2]));
 bigRectangles.push(new BigRectangle(0.352, 0.374, 0.065, 0.187, colors[0]));
 bigRectangles.push(new BigRectangle(0.692, 0.462, 0.088, 0.1, colors[1]));
 bigRectangles.push(new BigRectangle(0.176, 0.358, 0.044, 0.088, colors[0]));
 bigRectangles.push(new BigRectangle(0.286, 0.07, 0.066, 0.11, colors[1]));
 bigRectangles.push(new BigRectangle(0.176, 0.066, 0.044, 0.11, colors[1]));
 bigRectangles.push(new BigRectangle(0.286, 0.154, 0.066, 0.028, colors[3]));
 bigRectangles.push(new BigRectangle(0.3, 0.099, 0.033, 0.033, colors[3]));
 bigRectangles.push(new BigRectangle(0.352, 0.44, 0.066, 0.022, colors[1]));
 bigRectangles.push(new BigRectangle(0.352, 0.487, 0.066, 0.044, colors[1]));
 bigRectangles.push(new BigRectangle(0.176, 0.11, 0.044, 0.022, colors[3]));
 bigRectangles.push(new BigRectangle(0.187, 0.396, 0.022, 0.022, colors[1]));
 bigRectangles.push(new BigRectangle(0.286, 0.456, 0.044, 0.11, colors[2]));
 bigRectangles.push(new BigRectangle(0.286, 0.456, 0.044, 0.022, colors[1]));
 bigRectangles.push(new BigRectangle(0.297, 0.5, 0.022, 0.022, colors[1]));
 bigRectangles.push(new BigRectangle(0.648, 0.264, 0.088, 0.066, colors[1]));
 bigRectangles.push(new BigRectangle(0.67, 0.275, 0.044, 0.033, colors[3]));
 bigRectangles.push(new BigRectangle(0.714, 0.502, 0.044, 0.033, colors[3]));
 bigRectangles.push(new BigRectangle(0.692, 0.58, 0.088, 0.04, colors[0]));
 bigRectangles.push(new BigRectangle(0.846, 0.502, 0.105, 0.04, colors[1]));
 bigRectangles.push(new BigRectangle(0.888, 0.502, 0.022, 0.04, colors[0]));
 bigRectangles.push(new BigRectangle(0.088, 0.22, 0.045, 0.045, colors[0]));
 bigRectangles.push(new BigRectangle(0.89, 0.11, 0.06, 0.047, colors[1]));
 bigRectangles.push(new BigRectangle(0.154, 0.265, 0.088, 0.075, colors[0]));
 bigRectangles.push(new BigRectangle(0.181, 0.287, 0.035, 0.035, colors[1]));
 bigRectangles.push(new BigRectangle(0.381, 0.946, 0.066, 0.044, colors[3]));

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
    let noiseValue = noise(noiseOffset + rectangle.baseX + rectangle.baseY+ random(0, 0.1));
    let colorIndex = floor(noiseValue * colors.length);
    rectangle.color = colors[colorIndex];
    rectangle.resize(canvasSize);
    rectangle.display();
  });

    // Define the size ratio of small squares to the canvas
    let rectWidth = canvasSize * 0.022;
    let rectHeight = canvasSize * 0.02;
  
    drawAnimatedRow(0, canvasSize * 0.56, rectWidth, rectHeight, 0);
    drawAnimatedRow(0, canvasSize * 0.62, rectWidth, rectHeight, 0.1);
    drawAnimatedRow(canvasSize * 0.058, canvasSize * 0.725, rectWidth, rectHeight, 0.2);
    drawAnimatedRow(0, canvasSize * 0.845, rectWidth, rectHeight, 0.3);
    drawAnimatedRow(0, canvasSize * 0.93, rectWidth, rectHeight, 0.4);
    drawAnimatedRow(0, canvasSize * 0.02, rectWidth, rectHeight * 1.02, 0.5);
    drawAnimatedRow(0, canvasSize * 0.158, rectWidth, rectHeight, 0.6);
    drawAnimatedRow(0, canvasSize * 0.35, rectWidth, rectHeight, 0.7);
    drawAnimatedRow(0, canvasSize * 0.43, rectWidth, rectHeight, 0.8);
  
    drawAnimatedColumn(canvasSize * 0.022, 0, rectWidth, rectHeight * 1.02, 0);
    drawAnimatedColumn(canvasSize * 0.066, 0, rectWidth, rectHeight, 0.1);
    drawAnimatedColumn(canvasSize * 0.132, 0, rectWidth, rectHeight, 0.2);
    drawAnimatedColumn(canvasSize * 0.242, 0, rectWidth, rectHeight, 0.3);
    drawAnimatedColumn(canvasSize * 0.95, 0, rectWidth, rectHeight, 0.4);
    drawAnimatedColumn(canvasSize * 0.912, canvasSize * 0.179, rectWidth, rectHeight * 0.98, 0.5);
    drawAnimatedColumn(canvasSize * 0.868, 0, rectWidth, rectHeight * 0.96, 0.6);
    drawAnimatedColumn(canvasSize * 0.824, 0, rectWidth, rectHeight, 0.7);
    drawAnimatedColumn(canvasSize * 0.52, 0, rectWidth, rectHeight, 0.8);
    drawAnimatedColumn(canvasSize * 0.472, 0, rectWidth, rectHeight, 0.9);
    drawAnimatedColumn(canvasSize * 0.592, canvasSize * 0.465, rectWidth, rectHeight, 1);
  }

  //Draw the dynamic rows
function drawAnimatedRow(x, y, w, h, offset) {
    for (let i = 0; i < 50; i++) {
      let noiseValue = noise(noiseOffset + i * 0.1 + offset + random(0,0.1));
      let colorIndex = floor(noiseValue * colors.length);
      fill(colors[colorIndex]);
      rect(x + i * w, y, w, h);
    }
  }
  
  //Draw the dynamic Columns  
  function drawAnimatedColumn(x, y, w, h, offset) {
    for (let i = 0; i < RECT_COUNT; i++) {
      let noiseValue = noise(noiseOffset + i * 0.1 + offset + random(0,0.1));
      let colorIndex = floor(noiseValue * colors.length);
      fill(colors[colorIndex]);
      rect(x, y + i * h, w, h);
    }
  }
  
  // Adjust canvas size when window is resized
  function windowResized() {
    let canvasSize = min(windowWidth, windowHeight);
    resizeCanvas(canvasSize, canvasSize);
    draw(); // redraw the canvas after resizing
  }
  