"use strict";
/*
const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //              petición resuelta                   peteiciín rechazada
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)//se demora 3 segundos
    })
}

console.log("Usuario Inicia Sesión")
console.log(conexionBDDExterna(true) )
conexionBDDExterna(false)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))
console.log("Usuario ingresa")
*/


const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');



obtenerProductos
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[11]))
    .catch(error=>console.log(error))


