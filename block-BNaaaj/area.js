function squareArea(sideSize) {
    return Math.pow(sideSize, 2);
}

function rectangleArea(length, width) {
    return length * width;
}

function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

module.exports = {squareArea, rectangleArea, circleArea};