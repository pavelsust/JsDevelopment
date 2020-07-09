

const Person = require('./Person')

 class Teacher extends Person{
    constructor(name , age) {
        super(name)
        this.age = age
        this.getSummary =function (){

        }
    }

    Teacher.show = function show(){

     }
    showAge(){
        console.log(this.age)
    }
}

module.exports = Teacher