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
   venderAuto: function(patente){
    let autoEncontrado = this.buscarAuto(patente)
       if (patente == autoEncontrado.patente){
        autoEncontrado.vendido = true;
         return autoEncontrado;
        }
    },
    autosParaLaVenta: function(){
        let autosVendibles = this.autos
        let autosOk = autosVendibles.filter(function(cadaAuto){
            return cadaAuto.vendido == false
        });
        return autosOk
    },
    autosNuevos: function(){
        let autosVendibles = this.autosParaLaVenta()
        let autos0km = autosVendibles.filter(function(auto){
             return auto.km < 100
         });
         console.log(autos0km)
         return autos0km
    },
    listaDeVentas: function(){
        let autosOk = this.autos
        let autosVendidos = autosOk.filter(function(cadaAuto){
            return cadaAuto.vendido == true
        });
        let lista = []
        autosVendidos.forEach(function(auto){
            lista.push(auto.precio)
        });
        console.log(lista)
        return lista
    },

   autos: autos,
};


concesionaria.venderAuto("JJK116")
//console.log(autos)
//concesionaria.autosParaLaVenta()

concesionaria.listaDeVentas()
