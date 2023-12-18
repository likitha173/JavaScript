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


class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child();
console.log(obj);
console.log(obj.hello());



class Person {
    constructor() {
        this.species = "homo sapiens"
    }

    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super();
        this.branch = branch;
    }
    works() {
        console.log("solve problem, build something");
    }
}

let likitha = new Engineer("comouter engineer");
console.log(likitha);
console.log(likitha.eat());


// Q1
let data = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data: ", data);
    }
}

let student1 = new User("likitha", "likitha@gmail.com");
let student2 = new User("nikitha", "nikitha@gmail.com");

console.log(student1);
console.log(student1.viewData());


// Q2
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "data is edited"
    }
}

let admin1 = new Admin("admin", "admin@gmail.com");

console.log(admin1);
console.log(data);
console.log(admin1.editData());
console.log(data);

let a = 5;
let b = 10;

console.log("a: ", a);
console.log("b: ", b);
console.log("a + b: ", a + b);
console.log("a + b: ", a + b);
console.log("a + b: ", a + b);
try {
    console.log("a + b: ", a + c);
} catch(err) {
    console.log(err);
}
console.log("a + b: ", a + b);
console.log("a + b: ", a + b);
console.log("a + b: ", a + b);