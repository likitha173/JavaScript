// Loops
console.log("Loops");

// for Loop
for (let i = 1; i <= 5; i++) {
    console.log("Hello!", i);
}

// calculate sum of of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("total sum = ", sum);

// while Loop
let i = 1;
while(i <= 5) {
    console.log("i =", i);
    i++;
}

let j = 10;
do{
    console.log("hello!", j);
    j++;
} while(j <= 12);

//for - of loop
let str = "JavaScript";
let strSize = 0;
for(let i of str) {
    console.log(i);
    strSize++;
}

console.log("String Size:", strSize);

// for in loop
let student = {
    name: "Likitha",
    age: 21,
    cgpa: 7.9,
    isPass: true
};

for(let key in student) {
    console.log("key:", key, "- value:", student[key]);
}



// Q1
for(let i=0; i<=100; i++){
    if(i%2 === 0){
        console.log("even numbers:", i);
    } 
}

// Q2
let gameNum = 25;
let userNum = prompt("Guess the game number");

while(userNum != gameNum) {
    userNum = prompt("wrong number, try again");
}
console.log("! you entered the right number");