const p1 = {

    nombre : "José",
    apellido: "Pinos",
    edad : 21,
    color_de_ojos: "verdes",
    direccion:{
        ciudad : "Quito",
        calle: "Calle C"
    },
    sendMail(){
        return "Enviando mensaje"
    },

    sendNotification: function(){
        return "Enviando notificacion"
    }
}


console.log(p1)
console.log(p1["edad"])
console.log(p1.sendMail())
console.log(p1.sendNotification(),"\n\n\n")
/*
p1.complete = p1.nombre + p1.apellido
console.log(p1.complete)
delete p1.complete
*/
delete p1.sendMail()
delete p1.sendNotification()
console.log("----------------------------------\n")
for (k in p1){
    console.log(p1[k], " ")
}


const {nombre, apellido, edad, color_de_ojos, direccion} = p1
console.log(nombre, apellido, edad, color_de_ojos, direccion)


console.log("\n\n----------------------------------\n\n")

Object.freeze(p1)
console.log(Object.isFrozen(p1))
p1.k = 11
console.log(p1.k)



/*




,
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
        Para que funcione debería ser user.<>
        no funciona this xq es una función flecha
    }
}

console.log(user.sendMail());
// Va a provocar un error cuando se trabaje con arrow functions
// console.log(user.sendNotification())

*/