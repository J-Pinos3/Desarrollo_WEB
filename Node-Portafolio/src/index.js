require("dotenv").config()
const app = require("./server.js")
const connection = require("./database.js")


connection()
//https://blog.appsignal.com/2022/08/17/build-a-crud-app-with-nodejs-and-mongodb.html HOW TO CRUD

app.listen(app.get("port"), ()=>{
    console.log(`Servidor en puerto ${app.get("port")}`)
})