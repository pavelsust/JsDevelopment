


/// pop => removes the last element
/// push => add the element in the last
/// find => find the array element in the array
/// Splice => remove a element from a index
///


let selectedColors = ['red' , 'blue']
let array = [10, 20, 30, 40, 50];
let arrayResult = array.find(args => args>30)
console.log(arrayResult)

let selectedResult = selectedColors.find(args => args=='yellow')
console.log(selectedResult)

let courses= [{id: 2 , 'name': 'first course'} , {id: 3 , 'name': 'second course'}]

let result = courses.find(args=> args.id == 2)
console.log(result)

console.log(courses)


let myarray = new Array(2)
myarray[0] = 'pavel'
myarray[1] = 'robin'
myarray[2] = 'lia'

let myArrayResult = myarray.find(args => args == 'la')
console.log(`array result ${myArrayResult}`)

console.log(`array size ${myarray.length}`)

for (let i = 0 ; i<myarray.length;i++){
    console.log(`show from array ${myarray[i]}`)
}

let array1 = [1 ,2 , 3]
let array2 = [1,2 , 3]

if (JSON.stringify(array1) == JSON.stringify(array2)){
    console.log('true')
}else {
    console.log('false')
}

for( let index in myarray){
    console.log(`index is ${myarray[index]}`)
}


// marge two array

let nums1 = [1, 2, 3, 4]
let nums2 = [3, 4, 5, 6]
let nums3 = [ 6, 5 ,  7, 8]


let index = nums1.indexOf(2)
if (index>=1){
    nums1.splice(index , 1)
}

console.log(`after splice ${nums1}`)

let resultConcate  = nums1.concat(nums2 , nums3)
console.log(resultConcate)

resultConcate.forEach(args => {
    console.log(args)
})


function mergeNoDuplicates(...arrays) {
    let mergedArray = [];

    arrays.forEach(array => {
        mergedArray = [...mergedArray, ...array]
    });

    return [...new Set([...mergedArray])];
}

console.log(mergeNoDuplicates(nums1, nums2, nums3));


let myObject = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
myObject.job = 'job'
myObject.salary = '10'
myObject.gf = 'null'


myObject.job = 'job 2'
myObject.salary = '20'
myObject.gf = 'null'


let forPop = [{'name': 'name' , id: 1 } , {'name': 'name 2', id:2}]
let popResult = forPop.pop(args => {
    return args.id===1;
})
console.log(popResult.name)

console.log(`convert to String ${nums1.toString()}`)

console.log(`sort number3 array ${nums3.sort()}`)
console.log(`sort number3 array ${nums3.reverse()}`)

var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {return a - b});

console.log(points)

points.sort((a , b )=> b-a)
console.log(points)



/// find a bug number from the array
let bigNum = [1, 2, 3, 4 , 10 , 4 ,3 ,2, 50 , 1 , 40 , 100 , 400 ,100]
let bigResult = bigNum[0];
// for (let i =0 ; i<bigNum.length-1 ; i++){
//     if (bigNum[i] > bigNum[i+1]){
//         bigResult = bigNum[i]
//     }else {
//         bigResult = bigNum[i+1]
//     }
// }
// console.log(bigResult)

for (let i =0 ; i<bigNum.length ; i++){
    if (bigResult<bigNum[i]){
        bigResult = bigNum[i]
    }
}

console.log(bigResult)

let smallResult = bigNum[13];
for (let i =0 ; i<bigNum.length ; i++){
  if (bigNum[i]< smallResult){
      smallResult = bigNum[i]
  }
}
console.log(smallResult)



//// for..in returns a list of keys on the object being iterated
//// for..of returns a list of values of the numeric properties of the object being iterated.

let newArray = new Array()
newArray.push({'name': 'name' , id : 1} , {'name': 'name 2' , id: 2})

for (let item of newArray){
    console.log(`item ${item.name}`)
}

for (let i =0 ; i <newArray.length ; i++){
    console.log(`i ${newArray[i]}`)
}

newArray.forEach((a , b)=> {
    console.log(`name is ${a.name} ` + ` id is ${b}`)
})


// filter in array

let filterArray = [1 , 3, -1 , 4, 5]
let filterResult = filterArray.filter(args =>{
    return args >0
})

console.log(filterResult)


/**
 *  1. The map() method creates a new array with the results of calling a function for every array element.
 *  2. The map() method calls the provided function once for each element in an array, in order.
 *
 */

let numbers = [65, 44, 12, 4];

function myFunction(numbers){
    return numbers *10
}

let mapResult = numbers.map(myFunction)
console.log(mapResult)

let persons = [{firstName : 'pavel' , lastName: 'robin'} , {firstName : 'pavel' , lastName: 'robin'} ,
    {firstName : 'pavel' , lastName: 'robin'}]

function myFunction(value){
    return value.firstName + ' '+value.lastName
}

let personResult = persons.map(myFunction)
console.log(personResult)


let map = new Map()
map.set('1', 'string')
map.set(1 , 'number')
map.set(true , 'boolean')
map.set(2 , 4)

console.log(map.get(2))

for (let index of map.keys()){
    console.log(index)
}

for(let index of map.values()){
    console.log(index)
}

for (let index of map){
    console.log(index)
}

map.forEach((value , key , map)=>{
    console.log(`key is ${key}`+ ` value is ${value}`)
})

//copy a object into the map

let obj = {
    name: 'pavel',
    roll: '42',
    age: 26
}

let objMap = new Map(Object.entries(obj))
console.log(objMap.get('name'))

let mapPrice = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]]
);

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);


let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices.banana)


/**
 *
 *  1. A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
 *  2.
 */

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr))
}

console.log(unique(values))

let set = new Set(["oranges", "apples", "bananas"]);
set.delete('oranges')

set.forEach((value )=>{
    console.log(value)
})

for (let item of set){
    show(item)
}

function show(value){
    console.log(value)
}

let testSet = new Set(['name' , 'pavel'])

testSet.forEach(value => {
    show(value)
})

let reduceArray = [1 , 4, 5, -1]
let resultReduce = reduceArray.reduce((accumulator , currentValue) =>{
    return accumulator+currentValue
})

console.log(resultReduce)