/*USANDO ASYNC & AWAIT */

/*
const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

async function conectarAPI(){
    try {
        //si uso el await es porque el código devuelve una promesa
        const peticion = await obtenerProductos
        const respuesta = await peticion.json()
        console.log(respuesta[0])
    } catch (error) {
        console.log(error)
    }
}

conectarAPI()
*/



const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

async function conexion(){
    try {
        console.log(await conexionBDDExterna(false))
    } catch (error) {
        console.log(error)
    }
}

console.log("Usuario quiere ingresar")
conexion()
console.log("Usuario ingresado")
