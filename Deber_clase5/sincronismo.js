const cargarDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    const datos = await res.json();
    console.log(datos);
  };

  cargarDatos();
  console.log("Evitar callback hell")