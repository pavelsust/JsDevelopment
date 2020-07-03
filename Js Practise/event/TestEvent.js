const HelloWorld = require('./../HelloWorld')
let world = new HelloWorld()

world.on('message', (args)=>{
    console.log(args)
})

world.log('message')