// SIN npm init --y
//  PRIMERA FORMA
const base = () => {
    console.log("Funcion base Original");
  };

  // exportar por separado
  module.exports = base;
  
// SEGUNDA FORMA
tienda = (manzanas,peras)=>{
    if(!manzanas && !peras) return console.log("No hay frutas actualmente")
    console.log(`Deseas ${manzanas}, ${peras}`)
}
let hola = "Buenos dias ";
//exportar como un solo objeto 
module.exports = {
    hola,
    tienda
}


// CON npm init --y
//PRIMERA FORMA
const base2 = () => {
    console.log("Funcion base secundaria Original");
  };

  // exportar por separado
  export default base2;

// SEGUNDA FORMA 
  tienda2 = (manzanas,peras)=>{
    if(!manzanas && !peras) return console.log("No hay frutas actualmente")
    console.log(`Deseas ${manzanas}, ${peras}`)
}

export{
    tienda2
}
// TERCERA FORMA
export let hola2 = "Buenas tardes ";
