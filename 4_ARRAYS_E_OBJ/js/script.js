// 1 - Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista);

const itens = ["Patrick", true, 2, 4.12, []]

console.log(itens);

// 2 = Mais sobre arrays
const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0]); //a
console.log(arr[2]); //c
console.log(arr[4]); //e
console.log(arr[50]); // undefined

// 3 - Propriedades
const number = [5, 4, 3]

console.log(number.length);
console.log(number["length"]);

const myName = "Patrick"

console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1, 2, 3]
const allNumbers = number.concat(otherNumbers)

console.log(allNumbers)

const text = "Algum texto"

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos (Objects literals)
const person = {
    name: "Patrick",
    age: 23,
    job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(typeof person);

// 6 - Criando e deletando propriedades
const car = {
    enginer: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - Mais sobre objetos
const obj = {
    a:"teste",
    b:"true"
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);

// 8 - Conhecendo melhor objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "Patrick"
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 23;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loop em array
const users = ["Patrick", "Matheus", "João", "Pedro"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - Métodos de arrays: push e pop (Adiciona itens no final e remove elementos do final do array)
const array = ["a", "b", "c"]

array.push("d")

console.log(array);

array.pop()

console.log(array);

const itemRemovido = array.pop()

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y")

console.log(array);

// 12 - Métodos de arrays: shift e unshift (Remove o primeiro elemento e adiciona itens no inicio do array)
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r")
letters.unshift("s")

console.log(letters)

// 13 - IndexOf e lastIndexOf
const myElements = ["Morango", "Manga", "Abacaxi", "Banana", "Manga"]

console.log(myElements.indexOf("Morango"));
console.log(myElements.indexOf("Manga"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Manga")]);

console.log(myElements.lastIndexOf("Manga"));

console.log(myElements.lastIndexOf("Amora")); //Varios métodos que não encontram o resultado retornam -1

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2 , 4)

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2 , 4 + 1)

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - foreach
const num = [1, 2, 3, 4, 5]

num.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JAVA"},
    {title: "Terceiro post", category: "PYTHON"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
})

// 16 - Includes
const brand = ["BMW", "FIAT", "VW"]

console.log(brand.includes("FIAT")); //true
console.log(brand.includes("KIA")); //false

if(brand.includes("BMW")){
    console.log("Há carros desta marca!");
}

// 17 - Reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest);

// 18 - Trim
const trimTeste = "  testando /n  "

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);

console.log(trimTeste.trim().length);

// 19 - Padstart
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0")

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ")

console.log(fraseDeNovo);

const itensParaCompra = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaCompra.join(", ")}.`

console.log(fraseDeCompra);

// 22 - Repeat
const palavra = "testando ";

console.log(palavra.repeat(6));

// 23 - Rest operator
const somaInfinita = (...args) => {
    
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    } 

    return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 50, 450, 654, 100, 8781, 6540, 1420, 68542));

// 24 - for of
const somaInfinita2 = (...args) => {
    let total = 0

    for(let num of args){
        total += num;
    }

    return total;
};

console.log(somaInfinita2(2 , 5, 4));
console.log(somaInfinita2(1, 50, 450, 654, 100, 8781, 6540, 1420, 68542));

// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Patrick",
    lastName: "Correa",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job);

// renomear as variáveis
const{ firstName: primeiroNome } = userDetails;

console.log(firstName)

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]
 
const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = '{"name": "Patrick", "age": 23, "skills": ["JavaScript", "Python", "PHP"]}'; 

console.log(myJson);

console.log(typeof myJson);

// 28 - Conversão JSON
const myObject = JSON.parse(myJson)

console.log(myObject);

// Json inválido
        // const badJson = '{"name": Patrick, "age": 23}'
        //const myBadObject = JSON.parse(badJson); 

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson);

console.log(typeof myNewJson);