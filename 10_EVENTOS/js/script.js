// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou aqui!")
});

// 2 - removendo evento
const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Evento 2")
})

// 5 - removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()

    console.log("Não alterou a página")
})

// 6 - evento de tecla
document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`apertou a tecla ${e.key}`)
})

// 7 - Eventos de mouse 
const mouseEvents =document.querySelector("mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão do mouse");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão do mouse");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});

// 8 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    //console.log(`No eixo X: ${e.x}`)
    //console.log(`No eixo Y: ${e.y}`)
})

// 9 - Evento de scroll
window.addEventListener("scroll", (e) => {
    if(pageYOffset > 200){
        console.log("Passamos de 200px");
    }
})

// 10 - Evento de foco
const input = document.querySelector("my-input")

input.addEventListener("focus", (event) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (event) => {
    console.log("Saiu no input");
});

// 11 - Debounce
const debounce = (f, delay) => {
    
    let timeout

    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    };
};

    window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
    }, 400)
);