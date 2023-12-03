console.log("Hello");
console.log(window);
window.console.log("hello2")

console.dir(window);
console.dir(window.document);
console.dir(document);
console.dir(document.body);

document.body.style.background = "green";
document.body.childNodes[3].innerText = "Changed using JS";

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