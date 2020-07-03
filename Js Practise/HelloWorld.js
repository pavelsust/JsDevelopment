
const Event = require('events')
class HelloWorld extends Event{
    log(message){
        this.emit('message', {id : 1 , url: 'https:www.google.com'})
    }
}
module.exports = HelloWorld