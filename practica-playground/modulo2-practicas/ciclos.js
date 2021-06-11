function noParesDeContarImparesHasta(numero){
    let numeroImpar = 0  
    for (let i = 0; i <= numero; i++ ){
       let numeroImpar = i%2 != 0 ? numeroImpar = numeroImpar + 1 : "" ;  
       return numeroImpar
    }
}

console.log(noParesDeContarImparesHasta(4))


function noParesDeContarImparesHasta(numero){
    let numeroImpar = 0  
    for (let i = 0; i <= numero; i++ ){
       if (i%2 != 0){
        numroImpar = numeroImpar + 1 
       }  
    }
    return numeroImpar
}

console.log(noParesDeContarImparesHasta(4))