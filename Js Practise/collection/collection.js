

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
let nums3 = [5, 6, 7, 8]

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