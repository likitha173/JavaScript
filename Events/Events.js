let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log("btn1 was clicked");
}

let div = document.querySelectorAll('div');
div.onmouseover = () => {
    console.log('your on div')
}

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

btn1.addEventListener("click", () => {
    console.log("button1 was clicked")
})

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - 2")
})

btn1.addEventListener("click", (evt) => {
    console.log(evt)
    console.log(evt.type)
})
btn1.removeEventListener("click", () => {
    console.log("button1 was clicked")
})

let modeBtn = document.querySelector("#mode");
let currMode = "Light";
modeBtn.addEventListener("click", () => {
    if(currMode === "Light") {
        currMode = "Dark";
        document.querySelector('body').style.background = "black";
    } else {
        currMode = "Light";
        document.querySelector('body').style.background = "white";
    }
    console.log(currMode)
})