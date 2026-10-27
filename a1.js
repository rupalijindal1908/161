function calculateArea() {
var choice = prompt("this is an area calculator \n Please choose a shape to calculate the area:  \n1. rectangle \n2. triangle \n3. circle \n4. parallelogram");
if (choice == "1") {
    var length = prompt("Please enter the length of the rectangle:");
    var width = prompt("Please enter the width of the rectangle:");
    var area = Number(length) * Number(width);
    alert("The area of the rectangle is: " + area);
}
if (choice == "2") {
    var base = prompt("Please enter the base of the triangle:");
    var height = prompt("Please enter the height of the triangle:");
    var area = Number(base) * Number(height) / 2;
    alert("The area of the triangle is: " + area);
}
if (choice == "3") {
    var radius = prompt("Please enter the radius of the circle:");
    var area = 3.14 * Number(radius) * Number(radius);
    alert("The area of the circle is: " + area);
}
if (choice == "4") {
    var base = prompt("Please enter the base of the parallelogram:");
    var height = prompt("Please enter the height of the parallelogram:");
    var area = Number(base) * Number(height);
    alert("The area of the parallelogram is: " + area);
}
}