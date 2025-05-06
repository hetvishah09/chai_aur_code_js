// premitiive data types: nn bb ss u
// number
// null
// boolean
// bigint
// string  
// symbol
// undefined
// non-premitiive data types
// object
// array
// function


let a = 5;
let b = "hetvi";
let c = a + b;
console.log("value of C:",c);

let d;
console.log("d: ",d)

console.log(typeof(b))

// DATA-TYPE CONVERSION
// string ---> number
let score = "33"
console.log("score>>>",score)
let valueInNumber = Number(score)
console.log("valueInNumber>>",valueInNumber);

console.log(typeof score);
console.log(typeof valueInNumber);

// number ---> boolean
let isLogged = 1
// let isLogged = ""
let booleanIsLogged = Boolean(isLogged)
console.log("booleanIsLogged>>>",booleanIsLogged)