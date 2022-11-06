/*const somar = ()=>{
    console.log("Arrow");
}

somar();
*/

let dia = "segunda";
let resultado = dia == "domingo"?"Vou a praia":"Fico em casa";
console.log(resultado);

switch(dia){
    case "segunda":
        console.log("boa segunda-feira!");
        break;
    default:
        console.log("outra mensagem aqui");
}