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