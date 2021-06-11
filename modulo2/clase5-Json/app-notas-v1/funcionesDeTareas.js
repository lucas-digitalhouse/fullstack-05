//'fs' es un modulo nativo de Node. Lo utilizamos para leer un archivo, el modulo FileSistem nos permite leer contenido de un JSON
// me permite leer un archivo readFileSync( rutaAlArchivoQueQuieroLeer, decodificacionQueEstoyHaciendo)
// JSON.parse me traduce un JSON a objetos literales de Node.js
// recorre todo el array y trae la primer propiedad del obejeto literal.

let fs = require ('fs'); 

let funcionesDeTareas = {
  obtenerTareas : function (){
    let tareasJSON = fs.readFileSync('tareas.json','utf-8');
    let tareas = JSON.parse(tareasJSON);
    return tareas;
  }
}

module.exports = funcionesDeTareas; 
