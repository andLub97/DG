let carro = {
    nome: "Fox",
    ano: 2012,
    ligar: function(){
        console.log("vruum, o carro " + this.nome+" foi ligado!");
    }
}

console.log(carro.nome + " , seu ano é: " + carro.ano);
carro.ligar();

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("Civic", 2019);
let gol = new Carro("Gol", 2015);
console.log(civic);
console.log(gol);


const data = new Date();

console.log(data.getDay());
// dia 6 da semana
console.log(data.getMonth()+1);
console.log(data.getFullYear());


const {nome, ano} = carro;
console.log(nome);
console.log(ano);