// 1 - Instalação
console.log(axios);

// 2 - Primeiro request
const getData = async() =>{
    try {
        
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users", 
        // 4 - Definindo headers
           {
            headers: {
                "Content-Type": "application/json", 
                custom: "header",
            }
            }
        );

        console.log(response);

        return response.data;

    } catch (error) {
        console.log(error)
    }
}

getData();

// 3 - Imprimindo dados da API
const container = document.querySelector("#user-container")

const printData = async() => {
    const data = await getData()

    console.log(data)

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("h3");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);

        container.appendChild(div);

    })
}

printData();

// 5 - Requisição de POST
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        body: {title: titleInput.value, body: bodyInput.value, userID: 1},
    })
})
