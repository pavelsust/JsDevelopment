//
//
// /**
//  * The object that is executing the current function
//  *
//  **/
//
// // if the function is part of an object we call the function a method -> object
// // this references the object it self
//
//
// // if the function is a regular function that means -> global (global in note)
//
//
// let video = {
//     title: 'a',
//     play(){
//         console.log(this)
//     }
// }
//
//
// // function extension
// video.stop = function (){
//     console.log(this)
// }
//
// video.stop()
// video.play()
//
//
// /// regular function
//
// function Video(title){
//     this.title = title
//     console.log(this)
// }
//
// let videoObject = new Video('title')
// console.log()

function createCircle(radius){
    return {
        radius,
        item: [1 , 2 , 4],
        draw: function draw(){
            console.log('in the function '+this.radius)
            return this.radius
        },
        showItem(){
            this.item.forEach(args => {
                console.log(`show item ${args}`)
            })
        }
    }
}

let circleResult = createCircle(20)
console.log(`radius show ${circleResult.draw()}`)

circleResult.showItem()