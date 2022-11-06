let frutas = ["maça","banana","uva"];

let frutasDois = ["laranja", "abacate","goiaba"];

let listaCompleta = [...frutas,...frutasDois];

console.log(listaCompleta);

let pessoa = {
    nome:"André",
    idade:22
}
let infoPessoal = {

    tel:"123456",
    rg: 111111,
    ...pessoa
}
console.log(infoPessoal);