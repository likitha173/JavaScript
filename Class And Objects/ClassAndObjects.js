const student = {
    fullName : "Likitha Khatri",
    marks: 7.9,
    printMarks: function() {
        console.log("marks = ", this.marks);
    }
}

console.log(student);
console.log(student.fullName);
console.log(student.printMarks());

const employee = {
    calTex() {
        console.log("tax rate is 10%");
    }
}

const liki = {
    salary: 1000000
}

liki.__proto__ = employee;
console.log(liki);
console.log(liki.calTex());


class ToyotaCar {
    constructor(brand, mailage) {
        console.log("creating an object");
        this.brand = brand;
        this.mailage = mailage;
    }
    start() {
        console.log("start")
    }

    stop() {
        console.log("stop")
    }
}

console.log(ToyotaCar);

let fortuner = new ToyotaCar("frotuner", 10);
console.log(fortuner)
console.log(fortuner.start())

let lexus = new ToyotaCar("lexus", 12);
console.log(lexus)
console.log(lexus.start())