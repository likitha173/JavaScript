// Arrays in js

let names = ["Likitha", "Liki", "Likitha Khatri"];
console.log(names);

let unknow = ["js", 10, 21.11];
console.log(unknow);

let marks = [95, 56, 88, 79];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);

// Looping on Array 

for(let idx = 0; idx < marks.length; idx++) {
    console.log(marks[idx]);
}

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// using - for of 
for(let val of names) {
    console.log(val);
    console.log(val.toUpperCase());
}

// Q1
let mark = [98, 88, 84, 76, 89];
let sum = 0;

for(let i = 0; i < mark.length; i++){
    sum += mark[i];
}
console.log("Avg marks of class:", sum/mark.length);

// Q1
let items = [250,645,300,900,50];
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    console.log("offer of 10% -", items[i], "-", items[i] - offer);
}

// Array Methods

let foodItems = ['potato', 'apple', 'litchi', 'tomato', 'chips'];
console.log(foodItems);

foodItems.push('rice');
foodItems.push('burger', 'tofu');
console.log("push" , foodItems);

foodItems.pop();
console.log(foodItems.pop());
console.log("pop", foodItems);

console.log("toString", foodItems.toString());
console.log(foodItems);
console.log(mark.toString());


let nums1 = [1, 3, 5, 7, 9];
let nums2 = [2, 4, 6, 8];

let numbers = nums1.concat(nums2);
console.log("concat" , numbers);

console.log(numbers.shift());
console.log("shift", numbers);

numbers.unshift(0);
console.log("unshift", numbers);


foodItems = ['potato', 'apple', 'litchi', 'tomato', 'chips'];
console.log("slice", foodItems.slice(1, 3));
console.log("slice", foodItems.slice(3));

console.log(foodItems);
console.log("splice", foodItems.splice(2, 0, "jam", "cake"));
console.log(foodItems);
console.log("splice", foodItems.splice(4, 1));
console.log(foodItems);


// Q1
let companies = ['Bloomberg', "Microsoft", "Uber", "Google", "IBM", "Netfix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);