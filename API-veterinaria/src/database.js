import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
//strictQuery: solo los campos que están en el schema, van a la BD
const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}

export default  connection