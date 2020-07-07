/**
 * The object that is executing the current function
 *
 **/

// if the function is part of an object we call the function a method -> object
// this references the object it self


// if the function is a regular function that means -> global (global in note)


let video = {
    title: 'a',
    play() {
        console.log(this)
    }
}


// function extension
video.stop = function () {
    console.log(this)
}

video.stop()
video.play()


/// regular function

function Video(title) {
    this.title = title
    console.log(this)
}

let videoObject = new Video('title')
console.log()

function createCircle(radius) {
    return {
        radius,
        item: [1, 2, 4],
        draw() {
            console.log('in the function ' + this.radius)
            return this.radius
        },
        showItem() {
            this.item.forEach(args => {
                console.log(`show item ${args} and the radius is ${this.radius}`)
            })
        },
        showDraw() {
            return this.draw()
        }
    }
}



function Dog(name) {
    this.name = name
    this.isEat = this
    this.legCount = function () {
        console.log(this.name)
    }
}


let dog = new Dog('dog')
console.log(dog)

let circleResult = createCircle(20)
//console.log(`radius show ${circleResult.draw()}`)
circleResult.showDraw()

circleResult.showItem()

// getters => access properties
// setters => change (mutate) them

let person = {
    firstName : '',
    lastName:'',
   get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        let parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

person.fullName = 'pavel robin'
console.log(person.fullName)

let number = 10

function increase(number){
    number++
}

increase(number)
console.log(number)


let obj = {value: 10}

function increase(obj){
    obj.value++
}

increase(obj)
console.log(obj)


/**
 *  const is a signal that identifier won't be redefined
 *  let is s signal that identifier can re re-defined
 * @type {string}
 */

const show = 'pavel'
console.log(show)

let pavel = 'name'
console.log(pavel)
pavel = 'lia'
console.log(pavel)


/**
 *
 *  Copy a object to an another object
 *  and access it from there
 *
 */
let anotherCircleObject = Object.assign({
    color: 'yellow'
}, createCircle(10))

let anotherWay = {...createCircle(10)}
console.log(anotherCircleObject)
console.log(anotherWay)