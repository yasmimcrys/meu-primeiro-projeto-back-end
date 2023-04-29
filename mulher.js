const express = require  ("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: "yasmim cristina",
    imagem: "https://www.instagram.com/p/ChLM-4WJEr8MQ-8VLI2YoUiV8CeSBThDgh8vdk0/?next=%2F",
    minibio: "desnvolvedora e instrutora"
})
}

function mostraPorta() { 
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)