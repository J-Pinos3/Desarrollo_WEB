"use strict";

//const { log } = require('console');
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))



const obtenerData = async (nombrePokemon)=>{
    try{
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
        const response = await peticion.json()//toma el json como string y lo pasa a objetp
        //console.log(response.name , response.sprites.front_default);
        console.log(response.name , response.abilities[1] ?? "HABILIDAD DESCONOCIDA");
    }catch(error){
        console.log("Fallo en la matrix")
    }

        
}
obtenerData('charmander')
*/





//LOCAL STORAGE
/*
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())//convierte el json a aobjeto
.then(json => {
    
        let usuario ={
            name:json.name,
            username:json.username,
            email:json.email
        }
        console.log(usuario)
        guardarLocalStorage(usuario)
    
})


const guardarLocalStorage = (data)=>{
localStorage.setItem('user',JSON.stringify(data))//local storage es una api del navegador, stringify convierte el objeto jsvascript a un string json
}
*/



/*
const obtenerLocalStorage = ()=>{
    const respuesta = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): "No existe el usuario"
    console.log(respuesta)
}
*/

//const login = require('./module')   login("xD","xD") EXPORT POR DEFAULT 


/*
const {login, LIKES} = require('./module')

login("Julie","ds")
console.log(LIKES)
*/

import login from "./module.js"
login("Julio","2")
