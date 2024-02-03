
// Lista de todos os autores
// Rota /autor
// Método GET
const listaDeAutores = async(req, res) => {
    res.send(`<h1>Página com todos os autores </h1>`)
};

// Registrar novos autores
// Rota /autor
// Método POST
const registrarAutor = async(req, res) => {
    res.json({menssagem: "Autor registrado com sucesso"})
};

// Informação do autor por id
// Rota /autor/:id
// Método GET
const autorPorId = async(req, res) => {
    res.json({menssagem: "Informações do autor de id ..."})
};

// Atualizar autor por id
// Rota /autor/:id
// Método PUT
const atualizarAutor = async(req, res) => {
    res.json({menssagem: "Autor atualizado com sucesso"})
};

// Deletar autor por id
// Rota /autor/:id
// Método Delete
const apagarAutor = async(req, res) => {
    res.json({menssagem: "Autor de id ... foi deletado"})
};

export {
    listaDeAutores,
    registrarAutor,
    autorPorId,
    atualizarAutor,
    apagarAutor
}