//var atticus = {
// //   name: 'Atticus',
// //   empNum: '2405',
// //   salary: 47000,
// //   rating: 3,
// // };

// var jem = {
//   name: 'Jem',
//   empNum: '62347',
//   salary: 63500,
//   rating: 4,
// };//

// var boo = {
//   name: 'Boo',
//   empNum: '11435',
//   salary: 54000,
//   rating: 3,
// };

// var scout = {
//   name: 'Scout',
//   empNum: '6243',
//   salary: 74750,
//   rating: 5,
// };

// Each employee array should become an instance of an object (probably called
// something like Person). I tried a constructor function first but then made
// individual object literals but couldn't get that to work so I then went back
// to the constructor which is below.

function Person(name, empNum, salary, rating) {
  this.name = name;
  this.empNum = empNum;
  this.salary = salary;
  this.rating = rating;
}

var atticus = new Person('Atticus', 2405, 47000, 3);
var jem = new Person('Jem', 62347, 63500, 4);
var boo = new Person('Boo', 11435, 54000, 3);
var scout = new Person('Scout', 6243, 74750, 5);

var employees = [atticus, jem, boo, scout];
console.log('Employees array:', employees);
// console.log('Employee salary:', employees[i].salary);

// The original employees array that was used to store each person does not need
// to be converted to an object. Meaning that you can put your new Person
// objects inside of an array.
//
// This will also mean that you need to adjust the rest of the logic to accept
// properties rather than array index. This is where I've been struggling and
// futzing with trying to access the employees array correctly.

function calculator() {
  for (var i = 0; i < employees.length; i++) {
    var rate = 0;
    switch (employees.rating) {
    case 5: rate = .1;
      break;
    case 4: rate = .06;
      break;
    case 3: rate = .04;
      break;
    default: rate = 0;
      break;
  }
    // console.log('this:', this);
    var empNum = employees[i].empNum.toString();
    console.log('empNum length:', empNum.length);
    if (empNum.length == 4) {
      rate += .05;
    }

    var salary = employees[i].salary;
    if (salary > 65000) {
      rate -= .01;
    }

    if (rate > .13) {
      rate = .13;
    }

    var empName = employees[i].name;
    var bonus = Math.round(rate * salary);
    var employeeBonus = [];
    employeeBonus[0] = empName;
    employeeBonus[1] = rate;
    employeeBonus[2] = salary + bonus;
    employeeBonus[3] = bonus;
    console.log('inside calculator function:', employeeBonus);
  }
}

calculator(employees);

//For this challenge, you need to upgrade the employee to be objects rather than
// just arrays of information. Specifically:
//
// var arrayAtticus = ["Atticus", "2405", "47000", 3];
// var arrayJem = ["Jem", "62347", "63500", 4];
// var arrayBoo = ["Boo", "11435", "54000", 3];
// var arrayScout = ["Scout", "6243", "74750", 5];
// Each employee array should become an instance of an object (probably called
// something like Person).
// This will also mean that you need to adjust the rest of the logic to accept
// properties rather than array index.
// The original employees array that was used to store each person does not need
// to be converted to an object. Meaning that you can put your new Person
// objects inside of an array.
// Once you are complete, post to GitHub and submit via this app.
