const express = require  ("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "yasmim cristina",
        imagem: "https://www.instagram.com/p/CrW1cyvpDG9TG5YAu7R7wYAAWYn1wCfFt8sXCY0/?next=%2F",
        minibio: "desenvolvedora e instrutora"
    },
    {
        nome: "simara conceição",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.linkedin.com%2Fin%2Fsimaraconceicao&psig=AOvVaw3ZVwMMP58nUekXN7z8mGeL&ust=1682730977894000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCa1cSzy_4CFQAAAAAdAAAAABAE",
        minibio: " desenvolvedora e instrutora"
    },
    {
        nome: "Iana Chan",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fiana&psig=AOvVaw3Yi482DV-U--uKJvp_Pg0j&ust=1682730905411000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLj_66Gzy_4CFQAAAAAdAAAAABAE",
        minibio: "fundadora da prograMaria"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() { 
    console.log("servidor criado e rodando na porta ", porta)
}
app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)