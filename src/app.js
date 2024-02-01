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

//Consultar o cliente pelo id
app.get("/clientes/:id", (req, res) => {
    const index = buscarCliente(req.params.id); // (req.params.id) traz o parametro id na requisicao
    res.status(200).json(clientes[index]) // clientes é array, index recebeu o retorno da busca
})

//Cadastrar novo cliente
app.post("/clientes", (req, res) => {
    clientes.push(req.body);  //adiciona na ultima posicao
    res.status(201).send("Cliente cadastrado com sucesso!") //status 201 indica confirmacao que foi criado com sucesso
})

//Atualizar o cadastro de um cliente
app.put("/clientes/:id", (req,res) => {
    const index = buscarCliente(req.params.id);
    clientes[index].nome = req.body.nome; //acessar o nome na requisacao na parte "body"
    res.status(200).json(clientes) //exibe todos clientes

})
//nome atualizar, no PUT > body (json) > {"nome": "novo nome"}


//Excluir um cliente
app.delete("/clientes/:id", (req,res) => {
    const index = buscarCliente(req.params.id);
    clientes.splice(index, 1); //excluir posicao e quantas casas
    res.status(200).send("Cadastro removido com sucesso!") 

})

function buscarCliente(id){
    var index = clientes.findIndex(cliente => cliente.id === Number(id)) //number(id) converte o id em número
    return index
}

// function buscarCliente(id){
//     clientes.findIndex(parametro => {cliente.id === i}}) faz o loop no id do cliente ate o id do cliente for igual ao id desejado 
// } 
//find = retorna valor e findIndex = retorna a posicão



export default app;