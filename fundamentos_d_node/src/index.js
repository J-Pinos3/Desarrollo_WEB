//npm init --y
//con node puedo crear un servidor http
/*
const http = require("http")
const server = http.createServer((request, response)=>{
    user={
        user:"Jose",
        edad:21,
        email:"jose.pinos@epn.edu.ec"
    }
    //response.setHeader("Content-Type","text/html")
    //response.write("<h1>Hola node.js server http</h1>")
    response.setHeader("Content-Type","application/json")
    response.write(JSON.stringify(user))
    response.end()
})


server.listen(3000) puerto 3000

console.log("Servidor Ok")
*/












const express = require("express")
const app = express()

/*
app.get('/',(request, response)=>{
    response.status(202).send("hola mundo")

    
})

app.get('/rutas',(request, response)=>{
    response.send("<h1>Rutas</h1>")

    
})

app.get('/info',(request, response)=>{
    response.send("<h1>Información</h1>")

    
})


app.get('/products',(request, response)=>{
    response.send("<h1>Lista de Productos</h1>")

    
})



app.get('/contact',(request, response)=>{
    const user={
        nombre:"José",
        apellido:"Pinos",
    }
   response.send("Contactos")
    response.send(user)

})


//middleward, si está al principipo, no deja ingresar a los otros endpoints
app.use((request, response)=>{
    response.status(404).send("ESA PÁGINA NO EXISTE")

})
*/

/*
//los navegadores solo procesan gets
//usando thunder cliente (CLIENTE REST), pruebo los endpoints
app.get("/",(request, response)=>{

    //response.send(user)
    
    response.sendFile("./pics/images.png",{
       root:__dirname//devuelve el path actual de trabajo
    })



    
})

app.get("/user",(request, response)=>{


    let alumno = {
        nombre: "juan",
        edad:22,
        carrera: "quimica"
    }

    response.send(`<h1 style="color:green; font-size:100px">ALUMNOS</h1> Hola ${JSON.stringify(alumno)}`)


})


console.log("ruta",__dirname)


app.post("/",(request, response)=>{
    response.send("Enviar recursos al servidor")
})

app.put("/",(request, response)=>{
    response.send("Actualiza los recursos del servidor")
})

app.patch("/",(request, response)=>{
    response.send("Actualiza una parte recursos")
})

app.delete("/",(request, response)=>{
    response.send("Elimina algún recurso del servidor")
})
*/


//HANDLEBARS ES UN MOTOR DE PLANTILLAS


const { engine } = require("express-handlebars")
app.engine(".hbs", engine({
    extname:"hbs"
}))


app.set("view engine",".hbs")
app.set("views","./views")

app.get("/", (response, request)=>{
    request.render("home")
})


app.listen(3000)
console.log("server ok")





