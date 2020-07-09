

const Logger = require('./logger')
const logger = new Logger()


logger.on('message' , (args)=>{
    console.log('extra '+args.id)
})

logger.log()
