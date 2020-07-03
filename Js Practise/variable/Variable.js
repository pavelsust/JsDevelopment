const path = require('path')

const world = require('./../HelloWorld')

let event = new EventEmitter()

event.on('message', function (){
    console.log('Listener works')
});

event.emit('message')

let pathObjct = path.parse(__filename)
console.log(pathObjct)

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
