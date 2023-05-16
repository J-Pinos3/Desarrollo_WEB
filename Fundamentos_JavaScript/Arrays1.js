const friendsUser = ["Linus","John","Mark","Lucy","Anne"]
const namePets = ["Lila","Mordelon","Bender"]

const completeArr = [...friendsUser, ...namePets]

function giveElement(e){
    console.log(e)
}

console.log(friendsUser.length)
console.log(namePets.length)
console.log(completeArr.length,"\n\n")

for(let i = 0; i < friendsUser.length; i++){
    console.log(friendsUser[i])
}
console.log("---------------------------------------------")
completeArr.forEach(giveElement)
console.log("---------------------------------------------")
const newFriends = friendsUser.map(e => `Hola ${e}`)//map no muta el array original
console.log(friendsUser)
const unAmigo = friendsUser.find(e => e==="John")
console.log("Un amigo: ", unAmigo)
const Amigos = friendsUser.filter(e => e==="John"|| e==="Linus")
console.log("amigos: ", Amigos)
const IndiceAmigo = friendsUser.findIndex(e => e==="Anne")
console.log("índice Amigos: ", IndiceAmigo)
console.log(newFriends,"\n\n\n")







const profileUser = ["José","Pinos",21,true,"C++"]
const addres = {ciudad: "Quito"}
const nickName = "zUrEthPi"
profileUser.push(addres)

profileUser.push("xDd")
console.log(profileUser)
profileUser.unshift(nickName)
console.log(profileUser)

profileUser.pop(profileUser)
console.log(profileUser)

profileUser.shift(profileUser)
console.log(profileUser)

console.log(profileUser.includes( profileUser.find(e => e == "C++") ))


/*MÉTODO EVERY*/
const carritoCompras = [

    {
        product: "Phone",
        qty : 4,
        price : 540
    },
    {
        product: "Tv",
        qty : 5,
        price : 2143
    }

]

console.log("\n*-*-*-*-*-*-*-*")
const result = carritoCompras.every(e => e.price >= 1234)
console.log(result,"\n\n\n")


const carCompra  = 
    {
     product: "TV",
     qty: 4,
     price: 2132.6
    }

//const friendsUser = ["Linus","John","Mark","Lucy","Anne"]
const {product, qty, precio = carCompra.price} = carCompra
console.log(product, qty, precio)

const [p1,p2,p3,p4,p5] = friendsUser
console.log(p1,p2,p3,p4,p5)


let lFruticas = ["🍏","🍎","🍐","🍊","🍋"]
console.log(lFruticas)

const a = [f1,f2,...rest] = lFruticas
for(let x of a){
    console.log(x,"-")
}

