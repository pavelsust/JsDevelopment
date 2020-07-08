

let circle = {
    radius: 1,
    location: {
        x: 1,
        y:2
    },
    draw() {
        console.log('draw')
    }
}

circle.draw()


function show(value){
    console.log(value)
}

function show(){
    console.log('pavel')
}

show()
show('robin')