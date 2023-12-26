function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

console.log(calculator(1, 2, sum));

const hello = () => {
    console.log("hello");
}

// setTimeout(hello, 3000);

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    });
}

getData(1, () => {
    getData(2, () => {
        getData(3)
    });
});

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve(225);
})

console.log(promise)


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a Promise");
        resolve("success");
    });
}

let promisee = getPromise();
promisee.then((res) => {
    console.log("promise fulfilled", res);
});

promisee.catch((err) => {
    console.log("rejected", err);
});



function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 10000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 10000);
    });
}

console.log("fatching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fatching data2....");
    let p2 = asyncFunc2();
    p2.then((res) => {
    });
});