const cars = ["nissan","mazda","mazzerati","bmw","porsche"];


let text = ""
cars.forEach(i => {
    console.log(i)
});
console.log("\n\n")

for(k in cars){
    text += cars[k] + " "
}
console.log(text)
console.log(text.split(" "),"\n\n\n")

const carros = cars.map((i) => {
    //console.log(`${i}`)
    //console.log(i)
    //return i
    i.toLowerCase() 
    //deuvelve el valor i para el nuevo arrelgo
});


const carrito = cars.map((i) =>
    //console.log(`${i}`)
    //console.log(i)
    //return i
    i.toLowerCase() 
    //deuvelve el valor i para el nuevo arrelgo
);

console.log(carros)
console.log(carrito)