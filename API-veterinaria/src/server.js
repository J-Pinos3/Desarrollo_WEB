import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerVeterinarios from './routers/veterinario_routes.js'


                            //INICIALIZACIONES
const app = express()
dotenv.config()



                            //CONFIGURACIONES
app.set("port", process.env.port || 3000)
app.use(cors())



                            //MIDDLEWARE
app.use(express.json())




                            //RUTAS 
//app.get('/',(req, res)=>{       res.send("Server state: on")        })
// todas las rutas empezarán por /api
app.use("/api", routerVeterinarios)

app.use((req, res)=>{
    res.status(404).send("Ruta no encontrada - 404 :(")
})

export default app;