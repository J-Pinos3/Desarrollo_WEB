const express = require("express")
const path = require("path")
const {engine} = require("express-handlebars")
const methodOverride = require('method-override');


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


//middlewares
app.use(express.urlencoded({extended : false}))

app.use(methodOverride('_method'))
//variables globales


//rutas
app.use(require("./routes/index.routes"))
app.use(require("./routes/portafolio.routes"))

/*
PUEDO CREAR OTRA RUTA CON GET
Y EN EL RESPONSE.RENDER(OTRO HBS)
*/


//archivos estáticos
app.use(express.static(path.join(__dirname,"public")))


module.exports = app