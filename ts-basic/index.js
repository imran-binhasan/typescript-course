"use strict";
// Explicit =>
let a; //When var is not defined but declared
// Implecit =>
let x = 2; //When var is declared instantly
// String type
let b;
b = `{a}`; // 'number' under quote or "" or ''
// Boolean type
let c;
c = true;
// Null vs Undefined
let result = null; //Explicitly define it as empty;
let result2 = undefined; //It might be defined later;
// as null is empty ,it value could be anything , so can't assign type;
// by default both are not strict,however we can assign strict type on undefined
// void => used when returning nothing from a function
// never => error or infinite loops.never completes
// var arr = [1, 2, 3, 'hello'];
// arr[0] + 1 ERROR !
var arr = [1, 2, 3];
arr[0] + 1;
var arr2 = ['hello', 'world'];
var arr3 = [['ok'], ['ok2']]; //Nested array
var arr4 = [['hi', 1], ['hello', 1]];
arr4[1].length;
// recommandation : user => 
let arr1 = [];
// coordinate pair x,y
const coord = [1, '2'];
console.log(coord[0]);
const coords = [
    [1, [2, 5]],
    [-3, [4, 6]]
];
coords[0][1];
// literal is ts
// let direction : string;
// but its its fixed to some values then, 
// Literals
let direction;
direction = 'north';
if (direction == "north") {
    console.log(direction);
}
let responseCode;
responseCode = 200;
// Enums - num
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 11] = "Medium";
    Size[Size["Large"] = 12] = "Large";
})(Size || (Size = {}));
var size = 10;
if (size === Size.Small) {
}
// Enums - string
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
var value;
var Description;
(function (Description) {
    Description["SmallText"] = "This is a little text";
})(Description || (Description = {}));
console.log(Description.SmallText);
let p = 1; //ignores type validation
let q = 2; //forces to check type
if (typeof q == 'number') {
    const result = q + 1;
}
else if (typeof q == 'string') {
    const result = q.length;
}
// type cast
let z = 1;
const output = z + 10; //take z an a number - casting
console.log(output);
