/* 
    EL SIGUIENTE CÓDIGO DEBE SER EJECUTADO 
    EN LA CONSOLA DE UN NAVEGADOR WEB
*/


//TODO EL CÓDIGO SE REALIZA EN LA SIGUIENTE PÁGINA https://developer.mozilla.org/es/docs/Web/JavaScript


//1) cambiar el texto de un link en la página https://developer.mozilla.org/es/docs/Web/JavaScript
//y linkear la página de mozilla a una blank page

let links = document.links
console.log(links[5])
//editar en elemento HTML 'a', los atributos href y el texto
//<a href="https://blank.page/" class="pong-note" data-pong="pong->about" target="_blank" rel="noreferrer">Sin anuncios por el momento</a>





//2) añadir un botón en el banner superior y cambiar el logo en el banner

const banerSuperior = document.getElementsByClassName('pong-box')
console.log(banerSuperior[0])
//en la opción  banerSuperior[0], a su primer hijo cambiaremos los atributos de la etiqueta a
banerSuperior[0].firstChild 
//dentro del elemento 'a' buscamos el elemento html y ponemos otra imágen en el atributo src

/* 
<a class="pong" data-pong="pong->click"
href="/pong/click?code=aHR0cHM6Ly9lLTEwMjUwLmFkemVyay5uZXQvcj9lPWV5SjJJam9pTVM0eE1TSXNJbUYySWpveU1qZzBPVFl3TENKaGRDSTZOVGcxTENKaWRDSTZNQ3dpWTIwaU9qRTBORFV5TmpJMU1Dd2lZMmdpT2pNMk9EUTRMQ0pqYXlJNmUzMHNJbU55SWpveU1ERXpNemd3TnpZc0ltUnBJam9pWlRsbVptVm1ZbVJoTkRJMU5EY3dZbUZsTkRBME1tWmtaalV3TkdSak5qZ2lMQ0prYWlJNk1Dd2lhV2tpT2lJd09XWTNPV013TXpNNVpXUTBNR0V5WVdJeE16STFZbVkxTXpKaE1tUTVNeUlzSW1SdElqb3pMQ0ptWXlJNk16Z3hNemcwTnpVNUxDSm1iQ0k2TXpjeE56TTVOamsxTENKcGNDSTZJak0xTGpJd015NHlOVEl1TWpNMklpd2lhM2NpT2lKbFl5SXNJbTFySWpvaVpXTWlMQ0p1ZHlJNk1UQXlOVEFzSW5Caklqb3pMalVzSW05d0lqb3pMalVzSW1Waklqb3dMQ0puYlNJNk1Dd2laWEFpT201MWJHd3NJbkJ5SWpveE5EYzFNVGdzSW5KMElqb3lMQ0p5Y3lJNk5UQXdMQ0p6WVNJNklqTTBJaXdpYzJJaU9pSnBMVEF4WW1GbE1UTTFaR00wTkRabFptVTVJaXdpYzNBaU9qWTBNVFkyTUN3aWMzUWlPakV5TkRNd05USXNJblZySWpvaWRXVXhMV1EwWVRjek9XRTRNamd4TWpRMk1EQTRZelk1TldRMk5tWTBORGd4TjJOaUlpd2lkSE1pT2pFMk9EVXhOVFUyTURrNE9EUXNJbkJ1SWpvaWRHOXdJaXdpWjJNaU9uUnlkV1VzSW1kRElqcDBjblZsTENKbmN5STZJbTV2Ym1VaUxDSmtZeUk2TVN3aWRIb2lPaUpCYldWeWFXTmhMMDVsZDE5WmIzSnJJaXdpZFhJaU9pSm9kSFJ3Y3pvdkwzZDNkeTVpWlhsdmJtUnBaR1Z1ZEdsMGVTNWpiMjB2WkdWMlpXeHZjR1Z5Y3k5emFXZHVkWEFfZFhSdFgzTnZkWEpqWlQxaWRYbHpaV3hzWVdSelRVUk9KblYwYlY5dFpXUnBkVzA5UVdSMlpYSjBhWE5sYldWdWRDWjFkRzFmWTJGdGNHRnBaMjQ5WW5WNWMyVnNiR0ZrYzE5UVRFY3pKbUpwWDNOdmRYSmpaVDFpZFhselpXeHNZV1J6VFVST0ptSnBYMjFsWkdsMWJUMUJaSFpsY25ScGMyVnRaVzUwSm1KcFgyTmhiWEJoYVdkdVBXSjFlWE5sYkd4aFpITmZVRXhIVkc5d1FtRnlNeUo5JnM9QVBDemdieXIzQ1lvNkJtdl9WVy1RdVIyRTdJ.Hl8kKhZe5sJgb7PdBYyhd%2F4eJ8ZZrnZ1TC25gJgh4C0%3D"
target="_blank"
rel="noreferrer">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
aria-hidden="true" alt="" height="50"><span>Take your app passwordless. Beyond Identity APIs and SDKs make auth easy. Try for free!</span>
</a>
*/





//3) añadir botón al menú principal
//seleccionamos la clase en la que queremos añadir el botón
const menuSuperior = document.querySelector(".main-menu")
console.log(menuSuperior)


//creamos el botón
const botoncito = document.createElement("button")
botoncito.innerText="Ponte a programar CRRRRRRRACK!!"
botoncito.style.backgroundColor="lightgreen"
botoncito.style.color="black"

menuSuperior.appendChild(botoncito)


//4) eliminamos la barra de navegación lateral de la página
//1 buscamos el elemento a eliminar y luego usamos remove
const barraLateral = document.getElementsByClassName("sidebar-container")
console.log(barraLateral[0])
barraLateral[0].remove()


//5) añadir un borde a un dt que contiene un enlace
const opcion1 = document.querySelector("#primeros_pasos_en_javascript")
opcion1.addEventListener("mouseenter",()=>{
    opcion1.style.border="10 pxyellow solid"
})

opcion1.addEventListener("mouseout",()=>{
    opcion1.style.border=""
})