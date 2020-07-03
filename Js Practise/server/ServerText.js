
const http = require('http')
const hello = require('./../HelloWorld')

const server = http.createServer((request , response)=>{
    console.log(request)
    if (request.url==='/'){
        response.write('Hello World')
    } else if (request.url ==='/api/courses'){
        response.write(JSON.stringify([1 , 2 ,3]))
    }
    response.end()
})

server.on('connection' , (args)=>{
    console.log('New connection ....')
})

server.listen(3000)
console.log('Listening on port 3000')