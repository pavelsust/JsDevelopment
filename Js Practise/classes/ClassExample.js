/**
 *  class example
 *
 */

const Teacher  = require('./Teacher')

let teacher = new Teacher('pavel' , 20)
teacher.showAge()
teacher.walk()


// class Person{
//     constructor(name) {
//     this.name = name
//     }
//     walk(){
//         console.log(this.name)
//     }
// }
//
// class Teacher extends Person{
//     constructor(name , age) {
//         super(name)
//         this.age = age
//     }
//
//     showAge(){
//         console.log(this.age)
//     }
// }
//
// let person = new Person('pavel')
// person.walk()
//
// let teacher = new Teacher('robin' ,20)
// teacher.walk()
// teacher.showAge()
//
