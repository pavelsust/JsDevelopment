

/**
 * The object that is executing the current function
 *
 **/

// if the function is part of an object we call the function a method -> object
// this references the object it self


// if the function is a regular function that means -> global (global in note)


let video = {
    title: 'a',
    play(){
        console.log(this.title)
    }
}

video.play()