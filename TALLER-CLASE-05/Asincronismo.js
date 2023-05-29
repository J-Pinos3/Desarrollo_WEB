//Aparatos electronicos
console.log("Computadora");

console.log("Celular");

setTimeout(function timeout() {
    console.log("Impresora");
}, 5000);

console.log("Laptop");

// SINCRONO
function solicitar(fruta) {

    for (let index = 0; index < 10000000; index++) 
    {
    }
    return `¡Hola, ya regrese con su  ${fruta}!`
}
console.log("Comenzar a listar las frutas")
console.log("No hay Manzanas verdes")
console.log("Solicitar ayuda")
const respuesta = solicitar("Manza verde")
console.log(respuesta)
console.log("Continuar listando las frutas");

// ASINCRONO

function solicitar(fruta2) {
    console.log(`¡Hola, ya regrese con su  ${fruta2}!`)
}

console.log("Comenzar a listar las frutas")
console.log("No hay Manzanas verdes")
console.log("Solicitar ayuda")
const data = setTimeout(()=>solicitar("No hay Manzanas verdes"),5000)
console.log("Continuar escribiendo en la pizarra")

// PROMESAS
const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión exitosa") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))


    obtenerProductos
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[0].name))
    .catch(error=>console.log(error))

//Async Await
const conexionBDDExterna2 = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtener = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');


async function conexion(){
    try {
        console.log(await conexionBDDExterna2(true))
    } catch (error) {
        console.log(error)
    }
}

async function conectarAPI(){
    try {
        const peticion = await obtener
        const respuesta = await peticion.json()
        console.log(respuesta[0].name)
    } catch (error) {
        console.log(error)
    }
}
conexion()
conectarAPI()