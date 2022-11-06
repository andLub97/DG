let pares = [0, 2, 4, 6];
pares.map(function(valor){
    console.log(valor*2);
})

let x = pares.filter(function(v){
    return v > 4
})
console.log(x);

pares.forEach(function(valor, indice){
    console.log("O índice "+indice+"tem o valor: "+valor);
})