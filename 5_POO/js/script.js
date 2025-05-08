// 1 - métodos
const animal = {
    nome: "Bob",
    latir:function(){
        console.log("au au")
    }
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {

    nome:"Patrick",
    
    getNome: function(){
        return this.nome
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }

}

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Lucas");

console.log(pessoa.getNome());

// 3 - prototype
const text = "asd"

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool));

const arr = []
console.log(arr.length)

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre prototype
const myObject = {
    a: "b"
};

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao)
console.log(pastorAlemao.patas);

const pitbull = Object.create(cachorro);

pitbull.raca = "Pitbull"

console.log(pitbull.raca);
console.log(pitbull.patas);

// 6 - função como classe
function criarCachorro(nome, raca){

    const cachorro = Object.create({})
    
    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Husky")

console.log(bob);

const sparrow = criarCachorro("Sparrow", "Border Collie")

console.log(sparrow);

console.log(Object.getPrototypeOf(sparrow));

// 7 - funções como classe
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const golden = new Cachorro("Ozzy", "Golden")

console.log(golden);

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuuuu!");
}

console.log(Cachorro.prototype);

golden.uivar();

// 9 - Classes ES6
class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobr classes
