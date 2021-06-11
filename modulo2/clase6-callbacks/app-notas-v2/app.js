let funcionesDeTareas = require ("./tareas.js") // importo el objeto literal funcionesDeTareas para usar el metodo que guarde adentro. 

let argumento = process.argv[2]

switch (argumento) {
  case 'listar':
    let tareas = funcionesDeTareas.leerJSON()//obtengo esta funcion del objeto literal que se encuentra en el archivo funcionesDeTareas.JS.
      tareas.forEach((unaTarea,indice) => {
        console.log(indice+1 + " la tarea " + unaTarea.titulo + " se encuentra " + unaTarea.estado)//aca estoy llamando al JSON tareas.JSON
      });
    break;

  case undefined:
    console.log('Tienes que escribir una acción');
    break;
  
  
    
  default:
    console.log('No entiendo que quieres hacer');
    break;
}