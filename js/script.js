var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function () {
    return 2020 - this.yearOfBirth;
}
// Person.prototype.lastName = "Smith";
// // var john = new Person("John", 1990, "Teacher");
// var john = Object.create(Person.prototype, {
//     // name: {value}
// });
var john = new Person('John', 1993, "teacher");
john.sayHi = function (mode, time) {
    if (mode == 'friendly') {
        console.log(`Good ${time}, how you doing?`);
    }
    else if (mode == 'formal') {
        console.log(`Good ${time}, how do you do?`);
    }
}

var jane = new Person('jane', 1994, 'secratary');
jane.sayHi = john.sayHi.bind(jane, 'friendly');
// console.log(john);