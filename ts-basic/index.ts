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