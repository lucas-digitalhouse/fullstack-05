function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,agregarHttp){
    let newArray=[]
     for (let i=0; i<array.length ; i++){
         newArray.push(agregarHttp(array[i]))
         }
    return newArray;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))
