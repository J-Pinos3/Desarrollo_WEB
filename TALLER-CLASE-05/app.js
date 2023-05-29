// SIN npm init --y
//se puede importar a un objeto 
let {base, tienda, hola} = require('./module');

base();

base = () => {
  console.log("Funcion base Actualizada");
};
console.log(hola);
hola();
tienda();

// CON npm init --y

import base2 from './module.js';

base2();

import { tienda2 } from './module.js';

tienda2();

import { hola2 } from './module.js';

hola2();