console.log("Hello");
console.log(window);
window.console.log("hello2")

console.dir(window);
console.dir(window.document);
console.dir(document);
console.dir(document.body);

document.body.style.background = "green";
// document.body.childNodes[3].innerText = "Changed using JS";

let heading = document.getElementById("heading");
console.dir(heading);

let heading4 = document.getElementsByClassName("heading4");
console.dir(heading4);

let paragraphs = document.getElementsByTagName("p");
console.dir(paragraphs);

let element = document.querySelector("p");
console.dir(element)

let elements = document.querySelectorAll("p");
console.dir(elements)

let classElements = document.querySelectorAll(".heading4");
console.dir(classElements)

let idElements = document.querySelector("#heading");
console.dir(idElements)


console.log(heading.tagName);
console.log(heading.innerHTML);

console.log(document.querySelector("div").children)

let div = document.querySelector("div");
console.log(div.innerHTML);
console.log(div.innerText);
console.log(div.textContent);

// Q1
let h1 = document.querySelector("h1");
console.log(h1.innerText);
h1.innerText = h1.innerText + " from Apna Collage Student";
console.log(h1.innerText);

let boxs = document.querySelectorAll(".box");
console.log(boxs[0].innerText = "this is 1st box")
console.log(boxs[1].innerText = "this is 2nd box")
console.log(boxs[2].innerText = "this is 3rd box")

let idx = 1;
for(div of boxs) {
    console.log(div.innerText = "new unique value of " + idx + " box")
}

let btn = document.createElement("button");
btn.innerText = "click me";
console.log(btn);
h1.append(btn);

heading.remove()

// Q1
let newBtn = document.createElement('button');
newBtn.innerText = "Click me";
newBtn.style.color = "while";
newBtn.style.background = "blue";
document.querySelector("body").prepend(newBtn);

// Q2
let addingClass = document.querySelector('p');
addingClass.classList.add("otherClass");