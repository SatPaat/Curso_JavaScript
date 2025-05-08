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

// 10 - Mais sobre classes
class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelho")

console.log(scania);

scania.descreverCaminhao();


Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - override
class Humano {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const patrick = new Humano("Patrick", 23)

console.log(patrick);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definido"

console.log(patrick.idade);

console.log(Humano.prototype.idade);

// 12 - Symbol com classes
class Aviao{
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10)

console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    
    get exibirTitulo(){
        return `Você está lendo ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "Post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js"

console.log(myPost)

// 14 - Herança
class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

// 15 - instanceOf
console.log(shark instanceof Lobo); //true
console.log(Lobo instanceof Mamifero); // false - verificação das classes

console.log(new Lobo(4, "teste") instanceof Mamifero); //true - verificação de Objeto 

console.log(new Post("a", "b") instanceof Lobo); //false
