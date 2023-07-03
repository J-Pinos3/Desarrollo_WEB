import sendMailToUser from "../config/nodemailer.js"
import Veterinario from "../models/Veterinario.js"

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
    
    //desestructu la información del usuario
    const {nombre,apellido,direccion,telefono,_id} = veterinarioBDD

    //mostrar los datos
    res.status(200).json({
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
    res.status(200).json({res:'perfil del veterinario'})
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
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un eterinario registrado'})
}
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
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