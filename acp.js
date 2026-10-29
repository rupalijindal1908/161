var choice = prompt("this is a perimeter calculator \n Please choose a shape to calculate the perimeter:  \n1. rectangle \n2. equilateral triangle \n3. circle \n4. parallelogram");
if (choice == 1){
    var length = prompt("please enter the length of the rectangle")
    var width = prompt("please enter the width of the rectangle")
    var result = (Number(length)+Number(width)) * 2
    alert("the perimeter is " + result)
}
if (choice == 2) {
    var side = prompt("please enter the side of the equilateral triangle")
    var result = 3 * side
    alert("the perimeter is " + result)
}
if (choice == 3) {
    var diameter = prompt("please enter the diameter of the circle")
    var result = 3.14 * diameter
    alert("the circumference is " + result)
}
if (choice == 4) {
    var length = prompt("please enter the length of the parallelogram")
    var width = prompt("please enter the width of the parallelogram")
    var result = (Number(length) + Number(width)) * 2
    alert("the perimeter is " + result)
}