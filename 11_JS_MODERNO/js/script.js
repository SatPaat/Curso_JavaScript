// 1 - var, let e const
x = 10
y = 15

if(y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

let a = 10
let b = 15

if (b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

function logName(){
    const name = "Pedro";
    console.log(name);
}

const name = "Patrick";

logName();

console.log(name);

// 2 - arrow function
const sum = function(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b;
console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if(name){
        return `Hello ${name}!`
    }else{
        return `Hello!`
    }
}

console.log(greeting("Patrick"));
console.log(greeting());

const user = {
    name: "Theo",
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    }
}

// user.sayUserName();
// user.sayUserNameArrow();


// 3 - filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
});

console.log(highNumbers);


const users = [
    {name: "Patrick", available: true},
    {name: "Maria", available: false},
    {name: "Pedro", available: true},
    {name: "Marcos", available: false},
    {name: "Jonathan", available: true},
]

const availableUsers = users.filter((user)=>user.available)

console.log(availableUsers);

// 4 - Map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupa"}
    {name: "Celular", price: 1.500, category: "Smartphone"}
    {name: "Chapinha", price: 39.90, category: "eletro"}
    {name: "Ventilador", price: 120.00, category: "eletro"}
    {name: "Calça", price: 40.49, category: "Roupa"}
]

products.map((product) =>{
    if(product.category === "Roupa"){
        product.onSale = true
    }
})

console.log(products);


// 5 - Template Literals
const userName = "Patrick"
const age = 23

console.log(`O nome do usuário é ${userName} e sua idade é ${age} anos`); 


// 6 - destructuring
const fruits = ["Abacaxi", "melão", "laranja", "manga"]

const [f1, f2, f3, f4] = fruits

console.log(f1, f4);



const productDetails ={
    name: "Mouse",
    price: 15,
    category: "periferico",
    color: "preto"
}

const {name: productName, price, category, color} = productDetails;

console.log(`O nome do produto é ${productName}, ele custa R$ ${price} e é da cor ${color}`);


// 7 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a3, 7];
console.log(a4);


const carName = {name: "gol"};
const carBrand = {brand: "vw"};
const otherInfos = {km: 100000, price: 49999};

const car = {...name, ...carBrand, ...otherInfos};
console.log(car);

// 8 - classes
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount ) / 100)
    }
}

const shirt = new Product("camisa gola V", 20)

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - Herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        })
    }
}

const hat = new ProductWithAttributes ("Chapéu", 25, ["vermelho", "amarelo", "verde"])
console.log(hat)

console.log(hat.name);

hat.showColors();
