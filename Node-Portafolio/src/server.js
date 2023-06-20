const express = require("express")
const path = require("path")
const {engine} = require("express-handlebars")
const methodOverride = require('method-override');

const passport = require("passport")
const session = require("express-session")

const fileupload = require("express-fileupload")

require("./config/passport")

//la app se ejecuta con la siguient elínea
const app = express()

//configuraciones
app.set("port", process.env.port || 3000);
app.set("views", path.join(__dirname,"views"));
app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    extname: ".hbs"
}))
app.set("view engine",".hbs")


app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "../uploads"
}))

//middlewares
app.use(express.urlencoded({extended : false}))

app.use(methodOverride('_method'))

app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

//variables globales

app.use((req, res, next)=>{
    res.locals.user = req.user?.name || null
    next()
})



//rutas
app.use(require("./routes/index.routes"))
app.use(require("./routes/portafolio.routes"))
app.use(require("./routes/user.routes"))
/*
PUEDO CREAR OTRA RUTA CON GET
Y EN EL RESPONSE.RENDER(OTRO HBS)
*/


//archivos estáticos
app.use(express.static(path.join(__dirname,"public")))


module.exports = app

//cloudainary
//Josepinoscloudinary1*