// forEach Loop - only for array

// callBack function
function f1() {
    console.log('Hello');
}

function f2(f1) {
    return f1;
}

// forEach Loop 

let arr = ["a", "b", "c", "d", "f"];

arr.forEach(function printVal(val) {
    console.log(val);
});

arr.forEach((val) => {
    console.log(val.toUpperCase());
});

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

let nums = [1, 2, 3, 4];

nums.forEach((val) => {
    console.log(val**2);
});


let calcSquare = (val) => {
    console.log(val * val);
};

nums.forEach(calcSquare);


// Some more Array Methods

// Map
let Arr = [1, 2, 3, 4, 5, 6];

nums.map((val) => {
    console.log(val);
})


let newMapArr = Arr.map((val) => {
    return val*4;
})

console.log(newMapArr)

// Fliter
let newFliterArr = Arr.filter((val) => {
    return val%2 === 0;
})

console.log(newFliterArr);

// Reduce

const sum = Arr.reduce((res, curr) => {
    return res + curr;
});

console.log(sum);


const largestNum = Arr.reduce((res, curr) => {
    return res > curr ? res : curr;
});

console.log(largestNum);

// Q1
let marks = [96, 88, 79, 94, 62, 91];

let topper = marks.filter((val) => {
    return val > 90;
});

console.log(topper);

// Q2
let n = prompt("enter a number");

let nNums = [];
// a
for(let i=1; i<=n; i++) {
    nNums[i-1] = i;
}

console.log(nNums);
// b
let sumOfMarks = nNums.reduce((res, curr) => {
    return res + curr;
});

console.log("Sum: " + sumOfMarks);
// c

let fact = nNums.reduce((res, curr) => {
    return res*curr;
});

console.log("Factorial:" + fact);