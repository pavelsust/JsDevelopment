

const EventEmitter = require('events')

class Logger extends EventEmitter{

    log(){
        this.emit('message' , {
            id: 1,
            'user':'pavel',
            'age': 27
        })
    }
}

module.exports = Logger