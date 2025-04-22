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

console.log(obj instanceof object);

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