"use strict";
//https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/
//función declarada
function saludo(){
    console.log("Introducción a funciones.");
}
saludo()

//función expresada
const expresada = function(){
    console.log("Dentro de una función expresada")
}
expresada()


//función anonima
console.log(function(){
    return "Soy una función anónima"
}());


(function(){
    console.log("Función autoejecutable usa ()")
})()


//************************************************************************** */
//... = rest
const pFinalItems = function(a,b,...args){
    let suma = 0
    var total = suma + a + b
    if( args.length>0 ) args.forEach(e=>total+=e)

    return total
}
console.log(pFinalItems(10,20,30,40,50))

function giveObject(){
    return{ //esta llave debe estar a lado del return
        nombre: "José",
        edad: 21
    }
}

console.log(giveObject())