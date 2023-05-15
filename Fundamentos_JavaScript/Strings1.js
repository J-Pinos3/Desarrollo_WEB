"use strict";

let nombreJuego = "SMITE es un juego moba";
console.log(nombreJuego, " Es una variable de tipo: ",  typeof(nombreJuego), "\n");

console.log( nombreJuego.length ,"\n");
if(nombreJuego.includes("juego")){
    console.log("Smite es un juego\n");
}

console.log("A mayúsculas: ", nombreJuego.toUpperCase(),"\n");
console.log("A minúsculas: ", nombreJuego.toLowerCase(),"\n");
console.log(nombreJuego.replace("SMITE","LOL"),"\n");
console.log(nombreJuego.substring(0,7));
console.log(nombreJuego.charAt(2))
let empresa = "HiRez Studios";

let cad3 = nombreJuego.concat(" ", " y está desarrollado por: ", empresa)
console.log(cad3,"\n\n")
console.log(`${empresa}, desarrolló smite hace case 10 años`)