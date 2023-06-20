const passport = require("passport")
const User = require("../models/User")

const LocalStrategy = require("passport-local").Strategy

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",

}, async(email, password, done)=>{
    //trae el usuario segpun el emauil
    const userBDD = await User.findOne({email})
    //valida el usuario
    if(!userBDD){
        return done("No está registrado", false)
    }

    //valida contraseñas
    const passwordUser = await userBDD.matchPassword(password)
    //cheka que el password sea el mismo de la base de datos
    if(!passwordUser){
        return done("Las contraseñas no coinciden", false)
    }
    //retorna al usuario
    return done(null, userBDD)
}))


passport.serializeUser((user, done)=>{
    done(null, user.id)
})


passport.deserializeUser(async(id, done)=>{
    const userDataBase = await User.findById(id).exec()
    return done(null, userDataBase)
})