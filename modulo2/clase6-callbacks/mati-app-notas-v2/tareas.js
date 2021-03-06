let fs = require('fs');

let funcionesDeTareas = {
    leerJSON: function () {
        let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    },

    // Aca va la funcion/metodo de escribirJSON
    escribirJSON: function (arrayTareas) {
        let arrayTareasJSON = JSON.stringify(arrayTareas); // Convertir el parametro en formato JSON
        fs.writeFileSync('tareas.json', arrayTareasJSON); // Guardar esto en tareas.json usando "writeFileSync"
    },

    guardarTarea: function (unaTarea) {
        let tareas = this.leerJSON(); // Recupero las tareas usando la funcion correspondiente
        tareas.push(unaTarea)// Agrego la nueva tarea recibida como parametro
        this.escribirJSON(tareas) // Escribo el archivo de tareas utilizando la funcion correspondiente
    },

    filtrarPorEstado: function (parametroEstado) {
        let arrayDeTareas = this.leerJSON(); // Recuperar las tareas usando la funcion corespondiente
        let tareasFiltradas = arrayDeTareas.filter(function(todasLasTareas){ // Utilizando el metodo de arrrays "filter" debo filtrar las tareas y retornar las tareas filtrada
            return todasLasTareas.estado == parametroEstado;
        })
        return tareasFiltradas ; 
    }
}

module.exports = funcionesDeTareas;