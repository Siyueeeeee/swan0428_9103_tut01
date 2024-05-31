# swan0428_9103_tut01

# Interaction Description:
Upon loading the canvas, the colors of the rectangles within it will change smoothly, creating a dynamic visual effect. If the browser window is resized, the canvas and all rectangular elements will automatically adjust to fit the new window size. Refreshing the webpage will update the animation on the canvas.

# Personal Animation Group Code Method:
I used Perlin noise technology to generate smooth random values, causing the colors of the rectangles and squares to dynamically change between red, yellow, blue, and gray.

# Inspiration:
The inspiration came from the dynamic effects in the classic game "Snake." In the Snake game, the snake changes color and length by eating food, which inspired me to use a noise function in my code to generate dynamic color changes.

# Brief Technical Description：
## Technical Description：

noiseOffset and colors: By updating the value of noiseOffset, the noise function produces new outputs, achieving dynamic color changes.


RECT_COUNT, ROW, COLUMN: Used to define the number and type of rectangles.


bigRectangleAttributes: An array of attributes for large rectangles.
perlinNoiseArray: An array of Perlin noise values for small rectangle animations.

setup() Function: Initializes the canvas. Iterates through the bigRectangleAttributes array, creates BigRectangle objects, and adds them to the bigRectangles array.

draw() Function: Updates noiseOffset each frame to achieve dynamic color changes. Calculates a noise value for each large rectangle and selects a color from the colors array based on this value. Adjusts the size and displays the rectangles.
drawAnimated() Function: Uses Perlin noise to generate dynamic rectangles. Creates an animation effect based on noise values.

## Explanation of Changes in Group Code:

Function Replacement:
Replaced the original drawRow and drawColumn functions with drawAnimated. The new function includes an additional parameter type to distinguish between drawing rows and columns.

Attribute Storage:
Stored all position, size, and color information of the rectangles in the bigRectangleAttributes array. Stored Perlin noise variables in the perlinNoiseArray array.

Optimization with Loops:
Added a for loop in the setup and draw functions to iterate through the corresponding arrays, reducing code volume. Utilized JavaScript syntax sugar, specifically iterators, for for loops to make the code more concise.

Code Modularity and Documentation: 
Improved overall comment formatting. Enhanced modularity and extensibility of the code. Encapsulated constants and functions further. Decoupled the code for better readability and maintainability.