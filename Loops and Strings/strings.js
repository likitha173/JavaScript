// String - immutable in JS

let str = "JavaScript";
console.log(str, str.length);
console.log(str[0], str[3], str[7]);


// Template Literal
let specialString = `This is template literal`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item: "pen",
    price: 10
};

console.log("The cost of", obj.item, "is", obj.price, "rupees.");
let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);


// escape Characters 
console.log("Likitha\nKhatri");

let name = "Likitha\tKhatri";
console.log(name, name.length);

let fullName = "LikithaKhatri";
console.log(fullName, fullName.length);


// String Method 
let str2 = "JavaScript";
console.log(str2);
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

let str3 = "         JavaScript      js    ";
console.log(str3.trim());

let str4 = "Likitha";
console.log(str4.slice(1, 5));
console.log(str4.slice(1));

console.log(str4 + str2);
console.log(str4.concat(str2));

console.log(str4.replace("L", "N"));
console.log(str4.replace("i", "j"));
console.log(str4.replaceAll("i", "j"));

console.log(str4.charAt(2));
console.log(str4.charAt());

// Q1

let yourName = prompt("Enter your name to create UserName");
let userName = `@${yourName}${yourName.length}`;
console.log(userName);
