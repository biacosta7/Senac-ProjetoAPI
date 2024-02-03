
// Infromações de todos os livro
// Rota /livro
// Método GET
const listaDeLivros = async(req, res) => {
    res.send(`<h1>Página dos livros</h1>`)
};

// Adicionar novo livro
// Rota /livro
// Método POST
const registrarLivro = async(req, res) => {
    res.json({menssagem: "Livro adicionado"})
};

// Infromação do livro por id 
// Rota /livro/:id
// Método GET
const livroPorId = async(req, res) => {
    res.json({menssagem: "Informaçõe do Livro de id"})
};

// Atualizar livro por id
// Rota /livro/:id
// Método PUT
const atualizarLivro = async(req, res) => {
    res.json({menssagem: "Livro atualizado"})
};

// Excluir livro por id
// Rota /livro/:id
// Método DELETE
const apagarLivro = async(req, res) => {
    res.json({menssagem: "Livro deletado"})
};

export {
    listaDeLivros,
    registrarLivro,
    livroPorId,
    atualizarLivro,
    apagarLivro
};