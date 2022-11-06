let pessoa = {
    nome: "André",
    idade: 25
}

let json = JSON.stringify(pessoa);
console.log(json);

let voltando = JSON.parse(json);
console.log(voltando);