//ejemplo 1

const alimentos = ['🍔','🍉','🍕','🧁','🍛','🥑']

alimentos.forEach((elemento)=>{
    if(elemento == '🍔' || elemento == '🍕' || elemento == '🧁' ){
        console.log(elemento + " no es saludable, consúmelo rara vez")
    }else{
        console.log(elemento + " es nutritivo, consúmelo un poco más seguido")
    }
})

console.log("\n\n\n")

//ejemplo2 asincronismo
function imprimir(){
    console.log("Función imprimir")
}

const test = ()=>{
    console.log("Función test")
}

setTimeout(imprimir, 3000)
test();