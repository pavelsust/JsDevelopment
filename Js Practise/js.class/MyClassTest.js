

let  hero = require('Hero')
 hero = new Hero('pavel' , '1')
console.log(hero.greet())



class Hero{
    constructor(name , level) {
    this.name = name
    this.level = level
    }

    greet(){
        return `${name}`
    }
}