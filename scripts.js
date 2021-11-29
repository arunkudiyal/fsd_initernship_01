// console.log('ONE')
// console.log('TWO')
// console.lo('THREE')

// console.log('FOUR')

// PRINTING IN JS

// console.log('Hi... I am Arun')
// console.error('This is an Error message')
// console.warn('This is an WARNING message')

// alert('THIS IS AN ALERT!!')


// DATA-TYPES IN JS + SCOPES (ES6)

// myVariable = true 
// console.log(myVariable)

// SCOPES - let, var and const
// let - local / block-level scope - PRIVATE
// var - global / global-scope - PUBLIC

// for(var i=0; i < 20; i++) {
//     console.log('Hi')
// }

// console.log(i)

// const day = 'Tuesday'
// // Try changing it
// day = 'Wednesday'

// const day
// day = 'Tuesday'

// let myVar
// myVar = 10
// console.log(myVar)

// DATA TYPES - number, string, boolean, null, undefined, symbol

// const a = 10
// console.log(typeof a)

// const b = 'Full STack Development'
// console.log(typeof b)

// const c = true
// console.log(typeof c)

// // Diff b/w null & undefined

// let myVariable = null
// console.log(typeof myVariable)      // object

// console.log(typeof anyValue)


// JS as an OOPs pardigm

// ** In JS, anything or everything is an OBJECT **

// const variable = null
// console.log(typeof variable)


// Non-primate DT - Array, Object, ArrayOfObject, JSON

// ARRAYS - [ ] - A variable that contains Object
// const array1 = new Array(10, 'Arun', true, undefined, null)
// console.log(array1)

// const array2 = [10, 'Arun', true, 'Full Stack', 150]
// console.log(array2)

// // OBJECTS - { } - 1 dimension data
// const student = {
//     // keyName: value
//     roll_no: 1000123,
//     name: 'Arun Kudiyal',
//     age: 26,
//     // create an array inside an object
//     hobbies: ['Soccer', 'Badminton', 'Basketball'],
//     // create an another obejct within an object
//     address: {
//         streetNo: 'A-13',
//         city: 'Hyderbad',
//         state: 'Telangana'
//     }
// }

// // Acceessing part - Object - '.' | Array - [index]

// // i. Access the second hobby the student
// console.log(student.hobbies[1])

// // ii. access the state of the student
// console.log(student.address.state)

// Concatecation & String Literals in JS
// const name = 'Harry Potter'
// const age = 22

// console.log('Hi, my name is ' + name + ' and I am ' + age + ' years old')
// console.log(`Hi, my name is ${name} and I am ${age} years old!`)

// // Array of Objects - (AoO) - [{}, {}, {}]

// const employees = [
//     {emp_id: 101, emp_name: 'Employee - 1', age: 43, dept: 'IT'},
//     {emp_id: 102, emp_name: 'Employee - 2', age: 51, dept: 'HR'},
//     {emp_id: 103, emp_name: 'Employee - 3', age: 31, dept: 'Sales'},
//     {emp_id: 104, emp_name: 'Employee - 4', age: 29, dept: 'Training'}
// ]

// console.log(employees)

// // i. Age of the secnd employee
// console.log(`The age of second employee is ${employees[1].age}`)


// // JSON - JavaScript Object Notation

// // Convert AoO in JSON - stringify()
// const response = JSON.stringify(employees)
// console.log(response)

// // Convert a JSON into AoO - parse()
// const aoo = JSON.parse(response)
// console.log(aoo)


// const two_d_array = [10, [100, 200, 300], [1000, 2000, 3000]]
// console.log(two_d_array)


// Conditional Statements - if-else or Switches

// Voting System - >= 18

// gender - M/F -> M >= 21 || F >= 18

// const age = 15
// const gender = 'M'

// if(age >=  18) {
//     console.log('You CAN Vote')
// } else {
//     console.log('You CANNOT Vote')
// }

// if(gender === 'M') {
//     if(age >= 21) {
//         console.log('You CAN Vote!')
//     } else {
//         console.log('You CANNOT Vote')
//     }
// } else if(gender === 'F') {
//     if(age >= 18) {
//         console.log('You CAN Vote!')
//     } else {
//         console.log('You CANNOT Vote')
//     }
// }

// SHORTHAND -> condition ? trueStatement : falseStatemnet
// age >= 18 ? console.log('Yes') : console.log('No')


// LOOPS - for, while
// for(satrtPoint; endPoint; inc/dec) {
//     console.log('Hi')
// }

// for(let i=1; i <= 10; i++) {
//     console.log(i)
// }

// Print Table of 7
// for(let i=7; i <= 70; i += 7) {
//     console.log(`7 x ${i/7} = ${i}`);
// }

// while 

// startPoint
// while(condition) {
//     inc/dec
// }

// Print Table of 7
// let i = 7
// while(i <= 70) {
//     console.log(`7 x ${i/7} = ${i}`)
//     i += 7
// }

// Higher Order Array Methods - for-of, map(), filter(), ...

// const employees = [
//     {emp_id: 101, emp_name: 'Employee - 1', age: 43, dept: 'IT'},
//     {emp_id: 102, emp_name: 'Employee - 2', age: 51, dept: 'HR'},
//     {emp_id: 103, emp_name: 'Employee - 3', age: 31, dept: 'Sales'},
//     {emp_id: 104, emp_name: 'Employee - 4', age: 29, dept: 'Training'}
// ]

// for(let i=0; i < employees.length; i++) {
//     console.log(employees[i].dept)
// }

// for(let employee of employees) {
//     console.log(employee.dept)
// }


// FUNCTIONS

// Declare a function 
// Define a function
// Call a function

// function add(a, b) {
//     if(typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     } else {
//         return `Parameters are NOT numbers`
//     }
// }

// console.log(typeof add)

// const sum1 = add(10, 20)
// console.log(sum1)

// const sum2 = add(100, 200)
// console.log(sum2)

// const res = add('Hi', 'Bye')
// console.log(res)


// ES6 - A new way was introduced to create Functions --> Fat Arrow Functions
// const varName = (parameters sep by ,) => { ...Body }

// const division = (a, b) => {
//     if(typeof a === 'number' && typeof b === 'number' && b != 0) {
//         return a / b
//     } else {
//         return `Please check the parameters`
//     }
// }

// const res1 = division(10, 2)
// const res2 = division(100, 0)
// const res3 = division(10, 'String')

// console.log(res1, res2, res3)

// console.log(typeof division)


// DIFFERENCE B/W == and ===

// const string1 = 'My String'
// const string2 = 'My String'

// const number = 1
// const isTrue = 1

// string1 == string2 ? console.log('They are equal') : console.log('they are NOt equal')

// number === isTrue ? console.log('They are equal') : console.log('they are NOT equal')


// DATES - Date() --> Date(mm-dd-yyyy)

// const myDate = new Date('7-13-1999')
// console.log(myDate)

// console.log(myDate.getDate())
// console.log(myDate.getMonth() + 1)
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())        // returns number value



// OBJECT ORIENTED PROGRAMMING
// 2 ways - using constructor function AND using class

// Encapsulation
// 1. Constructor Function

// function Person_Class(firstName, lastName, dob) {
//     // initialize my properties
//     let first_name = firstName
//     let last_name = lastName
//     let date_of_birth = dob

//     // Methods
//     this.getFullName = () => {
//         return `${first_name} ${last_name}`
//     }

//     // GETTER - which return or let's you read the values
//     this.getFirstName = () => {
//         return first_name
//     }

//     this.getLasName = () => {
//         return last_name
//     }

//     this.getDOB = () => {
//         return date_of_birth
//     }

//     // SETTERS - which helps you set the new values, you can decide which value you can set
//     this.setFirstName = (new_name) => {
//         first_name = new_name
//         return first_name
//     }

//     this.setLastName = (new_last_name) => {
//         last_name = new_last_name
//         return last_name
//     }

//     this.setDOB = (new_dob) => {
//         date_of_birth = new_dob
//         return date_of_birth
//     }
// }

// // create the object
// const person1 = new Person_Class('Sujit', 'Kumar', '08-15-1997')
// console.log(person1)

// // console.log(person1.first_name, person1.last_name, person1.date_of_birth);

// // // This data can be voilated
// // person1.firstName = 'New Name'
// // console.log(person1)

// person1.setFirstName('John')
// person1.setLastName('Doe')
// person1.setDOB('09-18-1992')

// console.log(`${person1.getFirstName()} ${person1.getLasName()} ${person1.getDOB()}`)


// ES6 Class Notation

class Person {
    // Properties
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }

    // Methods 
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }
}

// create an object
const person1 = new Person('Ben', 'Jensen', new Date('07-18-1997'))
console.log(person1)

// Accessing the methods
console.log(person1.getFullName())

console.log(person1.getBirthYear())


// RESERACH WORK --> 1. Abstraction in JS OOPs | 2. Inheritance in JS OOPs | 
// 3. How can you perform Polymorphism in JS OOPS