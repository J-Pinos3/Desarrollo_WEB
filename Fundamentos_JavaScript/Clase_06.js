/*
"use strict";

function solicitar(tipo) {

    for (let index = 0; index < 1000; index++) 
    {
    }
    return `¡Hola, ya regresé con el ${tipo}!`
}


console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name = 'Ralph'
const respuestaEstudiante = solicitar("Marcador-azul")
console.log(respuestaEstudiante)
console.log("Continuar escribiendo en la pizarra");
*/

"use strict";

function solicitar(tipo) {
    console.log(`¡Hola, ya regresé con el ${tipo}!`)
}

console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name = 'Ralph'
const data = setTimeout(()=>solicitar("Marcador-azul"),5000)
console.log("Continuar escribiendo en la pizarra")