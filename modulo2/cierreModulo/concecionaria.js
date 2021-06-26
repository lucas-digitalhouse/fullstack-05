let autos = require ("./autos.js")
let persona = require ("./persona.js")

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
        return lista
    },
    totalDeVentas: function(){
        let Ventas = this.listaDeVentas()
        if (Ventas.length>0){
        let totalVentas = Ventas.reduce(function(acum,num){
            return acum + num ;
        })
        return totalVentas
      } else {  return 0
    }
    },
    puedeComprar: function(autos,persona){
        if (persona.capacidadDePagoTotal > autos.precio && persona.capacidadDePagoEnCuotas > (autos.precio/autos.cuotas)){
            // console.log("true")
            return true
        } else {
            // console.log("false") 
            return false
        };
    },
    autosQuePuedeComprar: function(persona){
    //      1.Obtener los autos para la venta
        let autos = this.autos
    //      2.Probar cada auto. ¿puede comprarlo?   
         let autosAccesibles = autos.filter( cadaAuto => {
             return this.puedeComprar(cadaAuto,persona) === true;
         });
         console.log(autosAccesibles)
         return autosAccesibles
    //      3.Devolver los que pueda comprar.
   // Cuando utilizo el this.puedeComprar dentro del callback, lo tengo que hacer usando una array function, porque si lo uso de la otra manera, 
   // no puedo acceder con el this. a una propiedad del objeto, fuera del callback. Si no quiero usar array function, tengo que llamarla
   // con concecionaria.puedeComprar 

    },
   autos: autos,
   persona: persona,
};


//concesionaria.venderAuto("JJK116")

//console.log(autos)

//concesionaria.autosParaLaVenta()

// concesionaria.puedeComprar(autos[1],persona[0])

concesionaria.autosQuePuedeComprar(persona[0])