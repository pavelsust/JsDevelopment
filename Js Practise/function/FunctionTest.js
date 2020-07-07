

let parm1 = true
let parm2 = false

/**
 *  here parm1 and parm2 is Parameters
 *  and true , false value is argument
 *
 */

show(parm1 , parm2)
function show (parm1 , parm2){
    console.log(parm1 +','+ parm2)
}


// don't call Arrow Functions during Object Method
// and Callback functions with dynamic context
/**
 * If you need your context to be dynamic, arrow functions are not the right choice.
 * Take a look at this event handler below:
 *
 * @type {{count: obj.count, id: number}}
 */


/**
 *
 *
 *  We can use Arrow Function when
 *  Arrow functions shine best with anything that requires this to be bound to the context
 *  and not the function itself.
 *
 *
 */
let obj = {
    id: 42,
    count() {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};

obj.count()

let feedTheCat = (cat) => {
    if (cat === 'hungry') {
        return 'Feed the cat';
    } else {
        return 'Do not feed the cat';
    }
}

console.log(feedTheCat('pavel'))

//function expression
let sayHello = () => {
    console.log("Hello from Flatiron School")
}
sayHello()

function isValid(){
    return false
}

console.log(isValid())

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let result = array.filter(args => args%3==0)
console.log(result)

// Factory Function
/**
 *
 * A factory function is any function which is not a class or constructor that returns
 * a (presumably new) object. In JavaScript, any function can return an object.
 * When it does so without the new keyword, it's a factory function.
 *
 */
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('in the function '+this.radius)
            return this.radius
        }
    }
}

/**
 *
 * The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number.
 * The NaN property is the same as the Number.
 *
 */

let circle1 = createCircle(2)
console.log(circle1.draw())



// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree


/**
 * In JavaScript, the thing called this is the object that "owns" the code. The value of this ,
 * when used in an object, is the object itself. In a constructor function this does not have a value.
 * It is a substitute for the new object.
 */
// Constructor Function

function Circle(radius){
    this.radius = radius
    this.draw = function (){
        console.log('draw')
        return 'draw'
    }
}

let circle = new Circle(1)
console.log(circle.radius)


