const {Router} = require("express")
const router = Router()

router.get("/", (request,response)=>{
    response.render("index")
})


router.get("/login", (request,response)=>{
    response.render("login")
})


module.exports = router