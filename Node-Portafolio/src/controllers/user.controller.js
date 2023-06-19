
const User = require("../models/User")//importamos el modelo
const passport = require("passport")


const renderRegisterForm =(req,res)=>{
    res.render('user/registerForm')
}


const registerNewUser = async(req,res)=>{
    const{name, email, password, confirmpassword} = req.body
    if(Object.values(req.body).includes("")){
        return res.send("Debe llenar todos los campos")
    }

    if(password != confirmpassword){
        return res.send("DLas contraseñas no coinciden")
    }

    const userBDD = await User.findOne({email})
    if(userBDD){
        return res.send("El correo electónico ya está registrado")
    }

    const newUser = await new User({name, email, password, confirmpassword})
    newUser.password = await newUser.encrypPassword(password)
    newUser.save()
    res.redirect("/user/login")

}



const renderLoginForm =(req,res)=>{
    res.render('user/loginForm')
}

/*forma 1
const loginUser =(req,res)=>{
    res.send('login user')
}
*/

const loginUser = passport.authenticate("local",{
    failureRedirect: "/user/login",
    successRedirect: "/portafolios"

})



const logoutUser =(req,res)=>{
    //res.send('logout user')

    req.logout((err)=>{
        if(err){
            return res.send("Algo salió muy mal :(")
        }
        res.redirect("/")
    })
}

module.exports={
    renderRegisterForm,
    registerNewUser,
    renderLoginForm,
    loginUser,
    logoutUser
}