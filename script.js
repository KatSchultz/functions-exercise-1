function getAreaOfCircle(radius) {
  return Math.PI * (radius * radius);
}

console.log(getAreaOfCircle(4));

const getCircumferenceOfCircle = function (radius) {
  return radius * 2 * Math.PI;
};

console.log(getCircumferenceOfCircle(4));

function getAreaOfSquare(side) {
  return side * side;
}

console.log(getAreaOfSquare(5));

const getAreaOfTriangle = function (base, height) {
  return (base * height) / 2;
};

console.log(getAreaOfTriangle(4, 5));
