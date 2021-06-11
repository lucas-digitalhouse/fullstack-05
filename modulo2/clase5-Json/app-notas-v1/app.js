let funcionesDeTareas = require ("./funcionesDeTareas.js") // importo el objeto literal funcionesDeTareas para usar el metodo que guarde adentro. 

let argumento = process.argv[2]

switch (argumento) {
  case 'listar':
    let tareas = funcionesDeTareas.obtenerTareas()//obtengo esta funcion del objeto literal que se encuentra en el archivo funcionesDeTareas.JS.
      for (let i = 0; i < tareas.length; i++){
        console.log("la tarea " + tareas[i].titulo + " se encuentra " + tareas[i].estado)//aca estoy llamando al JSON tareas.JSON
      } 
    break;

  case undefined:
    console.log('Tienes que escribir una acción');
    break;
    
  default:
    console.log('No entiendo que quieres hacer');
    break;
}