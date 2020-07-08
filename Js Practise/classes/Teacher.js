import {Person} from "./Person";

export class Teacher extends Person{
    constructor(name , age) {
        super(name)
        this.age = age
    }

    showAge(){
        console.log(this.age)
    }
}