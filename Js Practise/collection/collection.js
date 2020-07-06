


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