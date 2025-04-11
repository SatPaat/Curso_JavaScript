// 1 - variáveis
let nome = "Patrick";
console.log(nome);

nome = "Patrick Corrêa";
console.log(nome);

const idade = 31;
console.log(idade);
//idade = 32 (Const tem um valor fixo)

// 2 - Mais sobre variáveis

//let 2teste = "inválido";
//let @teste = "inválido";

let a = 10, b = 20, c = 30
console.log(a, b, c);

const nomecompleto = "Patrick Corrêa"

const nomeCompleto = "Patrick Corrêa da Silva"

console.log(nomecompleto)
console.log(nomeCompleto)


let _teste = "ok";
let $teste = "OK";

console.log(_teste, $teste);

// 3.1 - Funçôes Js: prompt
//const age = prompt("Digite sua idade: ");

//console.log(`Você tem ${age} anos.`)

// 3.2 - Funçôes Js: alert
//alert("Testando");
//const z = 10;
//alert(`O número é ${z}`);

// 4 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 5 - Console
console.log("Teste!");

console.error("error!");

console.warn("aviso!");

// 6 - If
const m = 10;

if(m > 5){
    console.log("M é maior que 5");
}

const user = "João";

if(user === João){ 
    console.log("Olá João!");
}
 if(user === "Maria"){
    console.log("Olá Maria!");
 }

 // 7 - Else
 const loggedIn = false
 
 if(loggedIn){
    console.log("Está autenticado")
 }else{
    console.log("Não está autenticado");
 }

 const q = 10
 const w = 15

 if(q > 5 && w > 20){
    console.log("Números mais altos")
}else{
    console.log("Os números não são mais altos")
}

// 8 - Else if
if(1 > 2){
    console.log("teste");
}else if(2 > 3){
    console.log("teste");
}else if(5 > 1){
    console.log("Agora sim");
}

const username = "Patrick"
const userAge = 23

if (username === "José"){
    console.log("Bem vindo José!");
}else if(username === "Patrick" && userAge === 23){
    console.log("Olá Patrick, você tem 23 anos");
}else{
    console.log("Nenhuma condição aceita");
}

// 9 - While
let p = 0

while(p < 0){
    console.log(`Repetindo ${p}`)
    p = p + 1;
}

// 10 - Do While
let o = 10

do{
    console.log(`Valor de o: ${o}`)
    o--
}while(o > 1);

// 11 - For
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...");
}

let r = 0

for(r; r > 10; r = r - 1){
    console.log("O r está diminuindo");
}

// 12 - Identação
for (let u = 0; u < 10; u++){
    if(u * 2 > 10){
        console.log(`Maior que 10! ${u}`)
    } else{
        if(u / 2 === 0){
            console.log("Deu 0")
        }
    }    
}

// 13 - break
//for(let g = 20; g > 10; g--){
//    console.log(`Valor de g é ${g}`);
//
//    if( g === 12){
 //       console.log(`Valor de g é 12!`);
//       break;
//    }
//}

for(let y = 20; y < 20; y--){
    console.log(`O valor de y é ${y}`);

    if( y === 5){
        console.log("Y é 5 ")
        break;
    }
}

// 14 - continue
for(let s = 1; s < 10; s = s + 1){
    //operador de resto = %
    if(s % 2 === 0){
        console.log("Número par!");
        continue
    }
    console.log(s);
}

// 15 - Switch
let job = "Advogado"

switch(job){
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada");
}

// switch "errado"
const l = 100

switch(l){
    case 200:
        console.log("L é 200");
    case 100:
        console.log("L é 100");
        //break 
    case 10:
        console.log("L é 10");
    default:
        console.log("L não foi encontrado");
}

