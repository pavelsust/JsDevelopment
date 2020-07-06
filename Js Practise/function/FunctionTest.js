

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
 *  , and not the function itself.
 *
 *
 */
let obj = {
    id: 42,
    count: function count() {
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