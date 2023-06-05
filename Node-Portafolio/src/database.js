const mongoose = require("mongoose")

//0.0.0.0 rn lugar de local host
const MONGODB_URI = "mongodb://0.0.0.0:27017/portafolio"

connection = async()=>{
    try{
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)

    }
}


module.exports = connection
