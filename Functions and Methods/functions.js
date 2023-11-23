// Functions & Methods

console.log("Functions & Methods");

"abc".toUpperCase();
[1, 2, 3].push(4);


function myFunction() {
    console.log("Welcome to console");
    console.log("I am learning JS :)");
}

myFunction();
myFunction();
myFunction();

function myFunction2(msg) { // Parameter
    console.log(msg);
}

myFunction2("hello"); // Argument

function sum(a, b) {
    console.log(a + b);
}

sum(5, 3);

function sum2(a, b) {
    return (a + b);
}

console.log(sum2(43, 5));


// Arrow function
const arrowSum = (a, b) => {
    return a + b;
}

console.log(arrowSum(56, 4));
console.log(arrowSum);


let arrowMul = (a, b) => {
    return a * b;
}

console.log(arrowMul(1, 8));
console.log(arrowMul);

arrowMul = 42;
console.log(arrowMul);


const printHello = () => {
    console.log("Hello");
}

printHello();

const printHello2 = () => console.log("Hello2");
printHello2();

// Q1

function countVowels(str) {
    let count = 0;
    for(const char of str) {
        if(char === "a" ||char === "i" || char === "e" || char === "o" || char === "u"){
            count++
        }
    }
    console.log(count);
}

countVowels("Likitha");