const {Schema, model} = require("mongoose")
const bcrypt = require("bcryptjs")
const { use } = require("passport")


const userSchema = new Schema(

    {
        name:{
            type:String,
            require: true
        },
        email:{
            type:String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        token:{
            type: String,
            default: null
        },
        confirmEmail: {
            type: Boolean,
            default: false
        }
    },
    {
        
        timestamps: true
        
    }

) 

//cifrar el password del usuario
userSchema.methods.encrypPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password, salt)
    return passwordEncryp
}

//verificar si el password ingresado es el de la bd
userSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password, this.password)
    return response
}


userSchema.methods.crearToken= function(){
    return token = this.token = Math.random().toString(36).slice(2)
}

//                      NOMBRE DE LA COLECCIÓN EN LA BD, ESQUEMA RELACIONADO
module.exports = model("user",userSchema)

