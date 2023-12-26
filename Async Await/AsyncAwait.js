async function hello() {
    console.log("Hello")
}

console.log(hello());

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200)
        }, 2000)
    })
}

async function getWeather() {
    await api();
    await api();
}

console.log(getWeather())


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 5000)
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

console.log(getAllData())