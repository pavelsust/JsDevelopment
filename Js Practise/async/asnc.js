//
// console.log('Before')
// //getUser(1 , getRepositoriesOfUser)
//
//
// getUser(3)
//     .then(args => getRepositoriesOfUser(args))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//
// console.log('After')
//
// function getRepositoriesOfUser(user){
//     getRepositories(user.gitUserName , getCommits())
// }
//
// function getCommits(repos){
//    return new Promise((resolve , reject)=>{
//        setTimeout(()=>{
//            console.log('Calling Github API ....')
//            resolve(['commit'])
//        } , 2000)
//    })
// }
//
//
// function displayCommits(commits){
//     console.log(commits)
// }
//
// // callback function
// function getUser(id){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log('Reading a user from a database')
//             resolve({id: id , gitUserName: 'mosh'})
//         } , 200)
//     })
// }
//
// function getRepositories(username){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log('Calling Github API... ')
//             resolve(['repo1' , 'repo2', 'repo3'])
//         })
//     })
// }


console.log('Before')

getUser(4)
    .then(user => getUserRepoList(user))
    .then(repo => getUserComment(repo))
    .then(commits => console.log(commits))
    .catch(error => console.log(error))

console.log('After')


function getUser(id){
    return new Promise((resolved, reject )=>{
        setTimeout(()=>{
            console.log('Calling github database for user')
            resolved({id: id , name : "pavel"})
        } , 2000)
    })
}

function getUserRepoList(user){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(user.name)
            console.log('Calling github database for user repo')
            resolve(['repo1' , "repo2", 'repo3'])
        } , 2000)
    })
}

function getUserComment(repo){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(repo)
            console.log('Calling github database for repo comment')
            resolve(['comment 1 ' , "comment 2 ", 'comment 3'])
        } , 2000)
    })
}


