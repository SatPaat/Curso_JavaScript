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
