import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const options = {

    definition:{
        openapi: "3.0.0",
        info: {title: "Proyecto Veterinaria", version: "2.0.0"}
    },
    apis:["../routers/paciente_routes.js", "../routers/veterinario_routes.js", "../database.js"]
}

//Documentación en JSON 
const swaggerSpec = swaggerJSDoc(options)

//Función para congfigurar la documentación en un server
export const swaggerDocs = (app, port)=>{
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec) )
    app.get("/api/v1/docs.json", (req, res)=>{
        res.setHeader("Content-Type", "application/json")
        res.send(swaggerSpec)
    })

    console.log(
        `Versión 1 disponible en: http://localhost:${port}/api/v1/docs`
    )
}

//module.exports = {swaggerDocs}