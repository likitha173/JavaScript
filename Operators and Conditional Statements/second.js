// Operators and Conditional Statements

// comments
/* This code print
Hello, world */
console.log("Hello, world");

// Operators
// Artimetic Operators
let a = 5;
let b = 2;

console.log("a = " , a, "& b = ", b);
console.log("a + b = " ,  a + b);
console.log("a - b = " ,  a - b);
console.log("a * b = " ,  a * b);
console.log("a / b = " ,  a / b);
console.log("a % b = " ,  a % b); // 1
console.log("a ** b = " ,  a ** b); // 5^2 = 25

// Unary Operators
a++;
console.log("a = ", a);
a++;
console.log("a = ", a);

b--;
console.log("b = ", b);
b--;
console.log("b = ", b);

// Assignment Operators

let c = 5;
console.log("a = ", a);

c += 4;
console.log("c + 4 = ", c);

c -= 4;
console.log("c - 4 = ", c);

c *= 4;
console.log("c * 4 = ", c);

c /= 4;
console.log("c / 4 = ", c);

c %= 4;
console.log("c % 4 = ", c);

c **= 4;
console.log("c ** 4 = ", c);

// comparision Operators
let x = 5;
let y = 5;
let z = '5';

console.log("x == y", x == y);
console.log("x == z", x == z);
console.log("x === z", x === z);
console.log("x != y", x != y);
console.log("x !== z", x !== z);

a = 5;
b = 3;

console.log("a > b = ", a > b);
console.log("a < b = ", a < b);

console.log("a >= b = ", a >= b);
console.log("a <= b = ", a <= b);

// logical Operators

let n = 6;
let m = 5;

let cond1 = n > m;
let cond2 = n === 5;

console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("!cond1 = ", !cond1);
console.log("!cond2 = ", !cond2);



// Conditional Statements 

// if Statements 
let age = 21;

if(age > 18) {
    console.log("You can Vote");
}

if(age < 18) {
    console.log("You CANNOT Vote");
}

let mode = "dark";
let backgroundColor;

if(mode === "dark") {
    backgroundColor = "black";
}

if(mode === "light") {
    backgroundColor = "white";
}

console.log("backgroundColor: ", backgroundColor)

// if-else Statements

let PCmode = "light";
let color;

if(PCmode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log("Color: ", color)


let number = 10;

if(number%2 === 0) {
    console.log(number, " is Even");
} else {
    console.log(number, " is odd");
}

// else-if Statements

let mode2 = "blue";
let color2;

if(mode2 === "dark") {
    color2 = "black";
} else if(mode2 == "blue") {
    color2 = "blue";
} else if(mode2 == "pink") {
    color2 = "pink";
} else {
    color2 = "white";
}

console.log("color: ", color2);


if(mode == "dark") console.log(mode);

let myAge = 21;

let result = myAge >= 18 ? "adult" : "NOT adult";
console.log("I am ", result);