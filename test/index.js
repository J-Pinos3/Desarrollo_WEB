
const banda = fetch(`https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB`);


async function conectarAPI(){
    try {
        //si uso el await es porque el código devuelve una promesa
        const peticion = await banda
        const respuesta = await peticion.json()
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

conectarAPI()