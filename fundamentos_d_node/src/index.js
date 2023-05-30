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

//app.use(express.json())//el servidor trabaja con datos json

/*
app.get("/cancion/:dato1/:dato2",(request, response)=>{
    //:data debe ser igual a params.data
    const {dato1, dato2} = request.params
    response.send(`Banda ${dato1} canción ${dato2}`)
})


app.get("/calcu/:dato1/:dato2",(request, response)=>{
    //:data debe ser igual a params.data
    const {dato1, dato2} = request.params
    //response.send(`La suma es:  ${parseInt(dato1) + parseInt(dato2)}`)
    //response.send(`La resta es:  ${parseInt(dato1) - parseInt(dato2)}`)
    response.send(`El producto es:  ${parseInt(dato1) * parseInt(dato2)}`)
    //response.send(`La suma es:  ${Number(dato1) + parseInt(dato2)}`)
})
*/

/*
app.get("/user/:profile/photo", (request, response )=>{
    if(request.params.profile === "C++"){
        response.sendFile("./pics/images.png",{
            root:__dirname
        })
    }else{
        response.send("Usuario no encontrado")
    }
})
*/

/*
app.get("/user/:nombre/edad/:edad", (request, response )=>{

    response.send(`El nombre es ${request.params.nombre} y tiene ${request.params.edad}`)
})
*/

//SPOTIFY API https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids
/*
app.get("/search", (request, response )=>{
    console.log(request.query)
    
    if(request.query.data === "js"){
        response.send("libros de js")
    }else{
        response.send("libros de jar")
    }

})
*/

//middleware
app.use((request, response, next)=>{
    console.log(`Ruta invocada ${request.path} - método ${request.method}`)
    next()
})

app.get("/profile",(request, response)=>{
    response.send("Perfil del usuario")
})


app.listen(3000)
console.log("server ok")


