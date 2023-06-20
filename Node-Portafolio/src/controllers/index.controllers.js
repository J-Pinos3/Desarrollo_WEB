const renderIndex = (request, response)=>{
    response.render("index")
}

const renderLogin = (request, response)=>{
    response.render("login")
}

module.exports={
    renderIndex,
    renderLogin
}