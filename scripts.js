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