import {sendMailToUser, sendMailToRecoveryPassword} from "../config/nodemailer.js"
import generarJWT from "../helpers/crearJWT.js"
import Veterinario from "../models/Veterinario.js"
import mongoose from "mongoose"

const login = async(req,res)=>{
    //res.status(200).json({res:'login del veterinario'})

    //obtener los datos del request
    const {email,password} = req.body

    //validar campos vacíos
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    
    //obtenemso el usuario en base el email                                         descarta el token, updated y created
    const veterinarioBDD = await Veterinario.findOne({email}).select("-status -__v -token -updatedAt -createdAt")

    //validar la cuenta de email
    if(veterinarioBDD?.confirmEmail===false) return res.status(403).json({msg:"Lo sentimos, debe verificar su cuenta"})

    //validar si existe el usuario
    if(!veterinarioBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})

    //verificar si el password del req.body es el mismo de la base de datos
    const verificarPassword = await veterinarioBDD.matchPassword(password)

    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, el password no es el correcto"})
    
    const token = generarJWT(veterinarioBDD._id)

    //desestructu la información del usuario
    const {nombre,apellido,direccion,telefono,_id} = veterinarioBDD

    //mostrar los datos
    res.status(200).json({
        token,
        nombre,
        apellido,
        direccion,
        telefono,
        _id,
        email:veterinarioBDD.email
    })

}
//FIN DE LOGIN



const perfil=(req,res)=>{
    
    delete req.veterinarioBDD.token
    delete req.veterinarioBDD.confirmEmail
    delete req.veterinarioBDD.createdAt
    delete req.veterinarioBDD.updatedAt
    delete req.veterinarioBDD.__v

    res.status(200).json(req.veterinarioBDD)
}



const registro = async(req,res)=>{

    //traer los datos del body de la petición    
    const {email,password} = req.body

    //validar si los campos estan vacíos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})

    //verifica si el correo existe
    const verificarEmailBDD = await Veterinario.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})

    //crear instancia del modeilo
    const nuevoVeterinario = new Veterinario(req.body)
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    const token = nuevoVeterinario.crearToken()
    await sendMailToUser(email,token)

    //guardar en la BD
    await nuevoVeterinario.save()


    res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})


}
//FIN DE REGISTRO


const confirmEmail = async (req,res)=>{
    //validamos el token del correo
    if(!(req.params.token)) return res.status(400).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    
    //verificar si en base al token, existe un usuario
    const veterinarioBDD = await Veterinario.findOne({token:req.params.token})

    //verificar si el token es null
    if(!veterinarioBDD?.token) return res.status(404).json({msg:"La cuenta ya ha sido confirmada"})

    veterinarioBDD.token = null
    veterinarioBDD.confirmEmail=true

    await veterinarioBDD.save()

    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 
}
//FIN DE CONFIRM EMAIL






const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}




const detalleVeterinario = async(req,res)=>{
    
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:"El id no es válido"}) 

    const veterinarioBDD = await Veterinario.findById(id).select("-password")

    if( !veterinarioBDD ) return res.status(404).json({msg:`Error, no existe el usuario ${id}`})
    res.status(200).json({msg:veterinarioBDD})

}




const actualizarPerfil = async(req,res)=>{
    
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`});
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const veterinarioBDD = await Veterinario.findById(id)
    if(!veterinarioBDD) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`})
    if (veterinarioBDD.email !=  req.body.email)
    {
        const veterinarioBDDMail = await Veterinario.findOne({email:req.body.email})
        if (veterinarioBDDMail)
        {
            return res.status(404).json({msg:`Lo sentimos, el existe ya se encuentra registrado`})  
        }
    }
		veterinarioBDD.nombre = req.body.nombre || veterinarioBDD?.nombre
    veterinarioBDD.apellido = req.body.apellido  || veterinarioBDD?.apellido
    veterinarioBDD.direccion = req.body.direccion ||  veterinarioBDD?.direccion
    veterinarioBDD.telefono = req.body.telefono || veterinarioBDD?.telefono
    veterinarioBDD.email = req.body.email || veterinarioBDD?.email
    await veterinarioBDD.save()
    res.status(200).json({msg:"Perfil actualizado correctamente"})



}





const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}





const recuperarPassword= async (req,res)=>{
    //res.status(200).json({res:'enviar mail recuperación'})

    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const veterinarioBDD = await Veterinario.findOne({email})
    if(!veterinarioBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    const token = veterinarioBDD.crearToken()
    veterinarioBDD.token=token
    await sendMailToRecoveryPassword(email,token)
    await veterinarioBDD.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para reestablecer tu cuenta"})

}



const comprobarTokenPasword= async(req,res)=>{
    
        if(!(req.params.token)) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
        const veterinarioBDD = await Veterinario.findOne({token:req.params.token})
        if(veterinarioBDD?.token !== req.params.token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
        await veterinarioBDD.save()
        res.status(200).json({msg:"Token confirmado, ya puedes crear tu nuevo password"}) 
    
}



const nuevoPassword= async(req,res)=>{
    
    const{password,confirmpassword} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if(password != confirmpassword) return res.status(404).json({msg:"Lo sentimos, los passwords no coinciden"})
    const veterinarioBDD = await Veterinario.findOne({token:req.params.token})
    if(veterinarioBDD?.token !== req.params.token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    veterinarioBDD.token = null
    veterinarioBDD.password = await veterinarioBDD.encrypPassword(password)
    await veterinarioBDD.save()
    res.status(200).json({msg:"Felicitaciones, ya puedes iniciar sesión con tu nuevo password"}) 

}




export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}