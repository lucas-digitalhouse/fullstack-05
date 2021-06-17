let autos = require ("./autos.js")

const concesionaria = {
    // es posible crear la funcionalidad buscarAuto que reciba por parámetro 
    //la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.
   buscarAuto: function(patente){
       let autos = this.autos
       let autoBuscado = autos.find(function(todosLosAutos){
        return todosLosAutos.patente == patente ;
       })
       if (autoBuscado != undefined){
       return autoBuscado
       } else { return null

       }

    },
   venderAutos: function (){},
   autos: autos,
};

console.log(concesionaria.buscarAuto("JJK116"))