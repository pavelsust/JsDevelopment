
console.log('Before')
getUser(1 , (args)=>{
    console.log(args.id)
    getRepositories('mosh', (args)=>{
        console.log(args)
    })
})
console.log('After')


// callback function
function getUser(id , callback ){
    setTimeout(()=>{
        console.log('Reading a user from a database')
        callback({id: id , gitUserName: 'mosh'})
    } , 200)
}

function getRepositories(username, callback){
    callback(['repo1' , 'repo2', 'repo3'])
}
