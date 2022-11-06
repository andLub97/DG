var nomeDeUsuario = "André";

console.log(nomeDeUsuario);

//let pertence a um determinado bloco
//não posso declarar a mesma variável
//com let, mas posso alterá-la (sem o let)

let nome = "André";
nome = "João";
console.log(nome);

const pi = 3.14;
console.log(pi);

let v = true;
console.log(v);

let naoNumerico = NaN;
console.log(naoNumerico);
let x = null;
console.log(x);
let y = undefined;
console.log(y);
y = 1;
console.log(y);

let moto = {
    marca: "Honda",
    ano: 2021
}
console.log(moto.ano);

let series = ["x","y"];
console.log(series[1]);