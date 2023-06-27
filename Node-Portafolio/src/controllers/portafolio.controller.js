const Portfolio = require('../models/portfolio')
const fs = require("fs-extra")
const {uploadImage, deleteImage} = require("../config/cloudinary")
const renderAllPortafolios = async(request, response)=>{
    //response.send("Listar todos los portafolios")
    const portfolios = await Portfolio.find({user:request.user._id}).lean()
    response.render("portafolio/allPortfolios",{portfolios})


}

const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
    
}

//PRESENTA EL FORMULARIO
const renderPortafolioForm = (req,res)=>{
    //res.send('Formulario para crear un portafolio')
    res.render('portafolio/newFormPortafolio')//renderiza una vista
}
//CAPTURAR DATOS DEL FORMULARIO PARA ALMACENARLOS EN LABS
const createNewPortafolio = async (req,res)=>{
    //res.send('Crear un nuevo portafolio')
    console.log(req.body);
    //res.send("Portafolio almacenado en la BDD")

    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    newPortfolio.user = req.user._id
    if(!(req.files?.image)) return res.send("Se requiere una imagen")

    const imageUpload = await uploadImage(req.files.image.tempFilePath)
    newPortfolio.image = {
        public_id:imageUpload.public_id,
        secure_url:imageUpload.secure_url
    }
    
    await fs.unlink(req.files.image.tempFilePath)

    await newPortfolio.save()
    //res.json({newPortfolio})//devuelve el resultado como un JSON
    res.redirect('/portafolios')//devuelve el resultado como una vista
    
}



const renderEditPortafolioForm = async(req,res)=>{
    //res.send('Formulario para editar un portafolio')
    const portfolio = await Portfolio.findById(req.params.id).lean()
    res.render('portafolio/editPortfolio',{portfolio})

}
const updatePortafolio = async (req,res)=>{
    //OBTIENE LOS DATOS DEL CONTROLADOR PARA ACTUALIZARLOS EN LA BD
    //res.send('Editar un portafolio')

    const portfolio = await Portfolio.findById(req.params.id).lean()
    if(portfolio.user.toString() != req.user._id.toString()){
        res.redirect("/portafolios")
    }


    if(req.files?.image){
        if(!(req.files?.image)){
            return res.send("Se requiere una imagen")
        }
        await deleteImage(portfolio.image.public_id)
        const imageUpload = await uploadImage(req.files.image.tempFilePath)
        const data={
            title: req.body.title || portfolio.name,
            category: req.body.category || portfolio.category,
            description: req.body.description || portfolio.description,
            image:{
                public_id: imageUpload.public_id,
                secure_url: imageUpload.secure_url
            }
        }

        await fs.unlink(req.files.image.tempFilePath)
        await Portfolio.findByIdAndUpdate(req.params.id, data)

    }else{
        const {title, category,description} = req.body
        await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    }
    res.redirect("/portafolios")
}
const deletePortafolio = async(req,res)=>{
    //res.send('Eliminar un nuevo portafolio')
    const portafolio = await Portfolio.findByIdAndDelete(req.params.id).lean()
    await deleteImage(portafolio.image.public_id)
    res.redirect("/portafolios")
}


module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}