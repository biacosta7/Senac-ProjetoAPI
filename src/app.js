import express from "express"

const app = express();

app.use(express.json()) //transforma p json antes de mostrar a res


const clientes = [
    { id: 1, nome: "João"},
    { id: 2, nome: "Erick"}
]


//Rota Principal
app.get("/", (req, res) => {
    res.status(200).send("Api-Livros");
})

//Consultar todos os clientes
app.get("/clientes", (req, res) => {
    res.status(200).json(clientes);
})

//Cadastrar novo cliente
app.post("/clientes", (req, res) => {
    clientes.push(req.body);  //adiciona na ultima posicao
    res.status(201).send("Cliente cadastrado com sucesso!") //status 201 indica confirmacao que foi criado com sucesso
})


export default app;