console.log("Hello, world!");
console.log("Likitha Khatri");
console.log("I Love JavaScript!");

// variables
fullName = "Likitha Khatri";
console.log(fullName);

age = 21;
console.log(age);

radius = 14.3;
console.log(radius);

x = null;
console.log(x);

y = undefined;
console.log(y);

isFollow = false;
console.log(isFollow);

// var, let, const

var a = 21;
var a = 24;
var a = 60;
console.log(a);

let b = 21;
b = 24;
b = 60;
console.log(b);
let z;
z = 10;

const PI = 3.14
console.log(PI);

{
    let l = 5;
    console.log(l);
}

{
    let l = 10;
    console.log(l);
}

// Data Types

// primitive(7)
let myAge = 21;
console.log(myAge);
typeof myAge; // number

let myName = "Likitha";
console.log(myName);
typeof myName; // string

let isShe = true;
console.log(isShe);
typeof isShe; // boolean

let u;
typeof u; // undefined

let n = null;
typeof n; // null- (object)

let i = BigInt("123"); 
console.log(i);
typeof i; // bigint

let s = Symbol("hello");
console.log(s); 
typeof s; //symbol

// Non-primitive

// Object
const student = {
    fullName: "Likitha Khatri",
    age: 21,
    cgpa: 7.72,
    isPass: false
}
console.log(student);
typeof student; // object

console.log(student["fullName"]); // Likitha
console.log(student.fullName); // Likitha

console.log(student["age"]); // 21
console.log(student.age); // 21

student.age = student.age + 1;
console.log(student.age);

const product = {
    title: "pen",
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);