//Practicando el if ternario

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB ;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );


// Ejercicio - Tengo clases

let dia = "lunes"
function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
		    console.log("tenés clases");
			break;
		case "miércoles":
		    console.log("tenés clases");
			break;
		case "viernes":
		    console.log("tenés clases");
			break;
	    default: 
		    console.log("no tenés clases");
		    break;
	}
}

console.log(tengoClases(dia))

