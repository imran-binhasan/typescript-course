// Explicit =>
let a: number; //When var is not defined but declared
// Implecit =>
let x = 2; //When var is declared instantly

// String type
let b: string;
b = `{a}` // 'number' under quote or "" or ''

// Boolean type
let c: boolean;
c = true

// Null vs Undefined
let result = null; //Explicitly define it as empty;
let result2 = undefined; //It might be defined later;

// as null is empty ,it value could be anything , so can't assign type;
// by default both are not strict,however we can assign strict type on undefined

// void => used when returning nothing from a function
// never => error or infinite loops.never completes


// var arr = [1, 2, 3, 'hello'];
// arr[0] + 1 ERROR !

var arr: number[] = [1, 2, 3];
arr[0]+1

var arr2: string[] = ['hello', 'world']
var arr3: string[][] = [['ok'],['ok2']] //Nested array

var arr4 = [['hi',1],['hello',1]]
arr4[1].length

// recommandation : user => 

let arr1: number[] = [];


// coordinate pair x,y

const coord: [number,string] = [1,'2'];
console.log(coord[0]);

const coords: [number, number[]][] = [
    [1,[2,5]],
    [-3,[4,6]]
]

coords[0][1]


// literal is ts

// let direction : string;
// but its its fixed to some values then, 


// Literals
let direction : 'north' | 'south' | 'east' | 'west'| 5;
direction = 'north'
if(direction == "north"){
    console.log(direction)
}


let responseCode: 200 | 404 | 500;
responseCode = 200;

// Enums - num
enum Size {
    Small = 10,
    Medium,
    Large
}

var size: Size = 10;

if(size === Size.Small){
}

// Enums - string

enum Direction {
    Up = 'UP',
    Left = 'LEFT',
    Right = 'RIGHT',
    Down = 'DOWN' 
}

var value: Direction;

enum Description {
    SmallText = 'This is a little text'
}

console.log(Description.SmallText)


let p:any= 1; //ignores type validation

let q:unknown = 2; //forces to check type
if (typeof q == 'number') {
    const result = q+1;
} else if (typeof q == 'string'){
    const result = q.length;
}
// type cast
let z:unknown = 1;
const output = (z as number)+10; //take z an a number - casting
console.log(output)

// avoid runtime error using unknown
const r:unknown = 10;
if(r == ''){
    const res = (r as number[][])[0][1]
}
