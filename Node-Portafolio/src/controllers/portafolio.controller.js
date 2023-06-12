const Portfolio = require('../models/portfolio')
const renderAllPortafolios = async(request, response)=>{
    //response.send("Listar todos los portafolios")
        const portfolios = await Portfolio.find().lean()
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
    await newPortfolio.save()
    //res.json({newPortfolio})
    res.redirect('/portafolios')
    
}



const renderEditPortafolioForm = async(req,res)=>{
    //res.send('Formulario para editar un portafolio')
    const portfolio = await Portfolio.findById(req.params.id).lean()
    res.render('portafolio/editPortfolio',{portfolio})

}
const updatePortafolio = async (req,res)=>{
    //OBTIENE LOS DATOS DEL CONTROLADOR PARA ACTUALIZARLOS EN LA BD
    //res.send('Editar un portafolio')
    const {title, category,description} = req.body
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    res.redirect("/portafolios")
}
const deletePortafolio = async(req,res)=>{
    //res.send('Eliminar un nuevo portafolio')
    await Portfolio.findByIdAndDelete(req.params.id).lean()
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