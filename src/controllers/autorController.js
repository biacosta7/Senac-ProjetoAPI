import autor from "../models/autorModel.js"


// Lista de todos os autores
// Rota /autor
// Método GET
const listaDeAutores = async(req, res) => {
    const listaAutores = await autor.find({});
    if(listaAutores){
        res.status(200).json(listaAutores);
    } else if(listaAutores === null){
        res.status(404).json({menssagem: "Nenhum autor foi encontrado"});
    }
};

// Registrar novos autores
// Rota /autor
// Método POST
const registrarAutor = async(req, res) => {
    if(!req.body.nome){
        return res.status(400).json({menssagem: "Insira o nome do autor"});
    }
    const novoAutor = await autor.create(req.body);
    if(novoAutor){
        return res.status(201).json(novoAutor);
    }
};

// Informação do autor por id
// Rota /autor/:id
// Método GET
const autorPorId = async(req, res) => {
    let id = req.params.id
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"})
    }
    const findAutor = await autor.findById(id);
    if(findAutor){
        return res.status(200).json(findAutor);
    } else if(findAutor === null){
        return res.status(404).json({menssagem: `Não foi encontrado nenhum ator com id ${id}`});
    }
};

// Atualizar autor por id
// Rota /autor/:id
// Método PUT
const atualizarAutor = async(req, res) => {
    let id = req.params.id;
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"});
    }
    const updateAutor = req.body;
    if(!updateAutor.nome && !updateAutor.nascimento && !updateAutor.falecimento){
        return res.status(400).json({menssagem: "Você precisa inserir informoções para atualizar"});
    }
    const autorAtualizado = await autor.findByIdAndUpdate(id, updateAutor, {new: true});
    if(autorAtualizado){
        return res.status(200).json(autorAtualizado);
    } else if(autorAtualizado === null){
        return res.status(404).json({menssagem: `Não foi encontrado nenhum ator com id ${id}`});
    }
};

// Deletar autor por id
// Rota /autor/:id
// Método Delete   
/*OBS: PRECISA REMOVER TODOS OS LIVROS DO AUTOR*/
const apagarAutor = async(req, res) => {
    let id = req.params.id
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"})
    }
    const deleteAutor = await autor.findByIdAndDelete(id);
    if(deleteAutor){
        return res.status(200).json({menssagem: `Autor de id ${id} foi deletado`});
    } else if(deleteAutor === null){
        return res.status(404).json({menssagem: `Não foi encontrado nenhum ator com id ${id}`})
    }
    
};

export {
    listaDeAutores,
    registrarAutor,
    autorPorId,
    atualizarAutor,
    apagarAutor
}