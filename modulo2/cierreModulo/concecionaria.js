let autos = require ("./autos.js")

const concesionaria = {
    // es posible crear la funcionalidad buscarAuto que reciba por parámetro 
    //la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.
   buscarAutos: function(patente){
       let autos = this.autos
       let autoBuscado = autos.filter(function(todosLosAutos){
        return todosLosAutos.patente == patente ;
       }), 
       return autoBuscado
    },
   venderAutos: function (){},
   autos: autos,
};

cosole.log(consecionaria.buscarAutos(JJK116))