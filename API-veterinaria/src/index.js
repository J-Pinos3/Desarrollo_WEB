import app from './server.js'
import connection from './database.js'

connection()

app.listen(app.get("port"),()=>{
    console.log(`Servidor ok en http://localhost:${app.get("port")}`)
})




































/*
https://stackoverflow.com/questions/56202427/mongooseerror-the-uri-parameter-to-openuri-must-be-a-string
.env file gotta be at the root of the project

JSON Viewe chrome

nodemailer
josepinosNodemailer
*/