
let a = 10;
/**
 *  var is a function scoping variable
 *  like if you declare var it will be abailabe through full class
 *
 *   and let is block variable
 *   like if you declare varible it will be available only those function
 **/


console.log(a)
console.log(a)

let b = 10
console.log(b)


/**
 *  object variable
 *
 * @type {{firstName: string, lastName: string}}
 */
let x = {firstName: 'pavel', lastName: 'rahman'}
console.log(x.firstName)
console.log(x.lastName)

b = 'pavel'
console.log(b)


/**
 * When adding a number and a string, JavaScript will treat the number as a string.
 * @type {string}
 */

let y = 16 + 'pavel'
console.log(y)

/**
 * JavaScript evaluates expressions from left to right. Different sequences can produce different results:
 **/

let z = 16 + 4 + 'volvo'
console.log(z)

let isShow = false
console.log(isShow)

// object data type

let person = {"name": "pavel" , "job": 2 }
console.log(person.name)

// global and local variable

let globalVariable = 'global variable'
console.log(globalVariable)

fun()
function fun(){
    console.log(globalVariable)
}

let myObject = {1: 3 , 2: 3}
console.log(myObject["1"])
