const {Router} = require("express")
const router = Router()
//en este archivo van todas las rutas

router.get("/", (request, response)=>{
    response.render("index")
})


router.get("/login", (request, response)=>{
    response.render("login")
})

/*
router.get("/portafolios", (request, response)=>{
    response.render("login")
})
*/

const {renderIndex, renderLogin} = require("../controllers/index.controllers");
router.get("/", renderIndex)
router.get("/login",renderLogin)

module.exports = router