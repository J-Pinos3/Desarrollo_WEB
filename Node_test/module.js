

const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export default login
//module.exports.LIKES = 654654
//export default 
//module.exports = login
//export en grupo
//module.exports ={login, LIKES}