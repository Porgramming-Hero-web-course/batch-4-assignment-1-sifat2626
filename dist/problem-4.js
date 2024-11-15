"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return parseFloat((shape.radius ** 2 * Math.PI).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return -1;
    }
}
// Sample Inputs and Outputs
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); // Output: 24
