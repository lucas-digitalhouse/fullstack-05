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
  
      // Escribir el caso en que se utilice "crear"
        // Dentro del caso crear tenemos que armar un objeto literal con las propiedades "titulo" y "estado" donde titulo será lo que se escribe en la terminal y el estado será SIEMPRE "pendiente"
        // Una vez que tengo el objeto literal de la nueva tarea, utilizo la funcion correspondiente del archivo tareas.js para guardarla
        case 'crear':
          let tarea = {
              titulo: process.argv[3],
              estado: "pendiente"
          }
          funcionesDeTareas.guardarTarea(tarea)
          console.log("se agrego el objeto " + process.argv[3] + " al archivo tareas.json");
          break;
  
      // Escribir el caso en que se utilice "filtrar"
          // Recuperar cual es el estado que se necesita filtrar usando "process.argv[]"
          // Utilizar el metodo correspondiente para filtrar una tarea por estado
          // Una vez filtradas, recorrer la nueva colección y mostrar por consola las tareas
  
      case 'filtrar':
          let filtro = process.argv[3];
          tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtro);
          tareasFiltradas.forEach(function(tareas){
              console.log(tareas); 
          });
          break;
    
  default:
    console.log('No entiendo que quieres hacer');
    break;
}