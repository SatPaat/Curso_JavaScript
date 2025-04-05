// 1 - Number
console.log(typeof 2);
console.log(typeof 5.6);
console.log(typeof -7);

// 2 - Operadores aritméticos
console.log(2 + 5);
console.log(2 * 5);
console.log(2 - 5);
console.log(2 / 5);

console.log(5 + (4 * 2));

// 3  - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(5 * "patrick");
console.log(typeof NaN);

// 4 - Strings
console.log("Patrick");
console.log('Patrick');
console.log(`Patrick`);

// 5 - Caracteres especiais
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de Tab");

// 6 - Concatenação
console.log("Meu" + " Malvado" + " Favorito");

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`)

//console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);

// 8 - Booleanos
console.log(true);
console.log(typeof false);
console.log(5 > 20);
console.log(30 > 10);

// 9 - comparações
console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 2);
console.log(5 <= 2);
console.log(5 == 2);
console.log(5 === 2);
console.log(5 != 2);

// 10 - Valor idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Patrick" === 1);

console.log(5 > 2 || "Patrick" === 1);

console.log(5 < 2 || 2 > 10);

console.log(!true);

console.log(!5 > 2);

// 12 - empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Mudanças de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);
