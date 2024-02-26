import Autor from "../models/autorModel.js"
import Livro from "../models/livroModel.js"

// Lista de todos os autores
// Rota /autor
// Método GET
const listaDeAutores = async(req, res) => {
    const listaAutores = await Autor.find({});
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
    const autor = new Autor({
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        falecimento: req.body.falecimento
    });
    if(Array.isArray(req.body)){
        const autoresCriados = await Autor.create(req.body);
        return res.status(201).json(autoresCriados)
    }
    if(!autor.nome){
        return res.status(400).json({menssagem: "Insira o nome do autor"});
    } else {
        const novoAutor = await autor.save();
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
    const findAutor = await Autor.findById(id);
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
    const updateAutor = req.body;
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"});
    }
    if(!updateAutor.nome && !updateAutor.nascimento && !updateAutor.falecimento){
        return res.status(400).json({menssagem: "Você precisa inserir informoções para atualizar"});
    } else {
        const autorAtualizado = await Autor.findByIdAndUpdate(id, updateAutor, {new: true});
        if(autorAtualizado){
            return res.status(200).json(autorAtualizado);
        } else if(autorAtualizado === null){
            return res.status(404).json({menssagem: `Não foi encontrado nenhum ator com id ${id}`});
        }
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
    } else {
        const livrosDoAutor = await Livro.find({autor: id}, "titulo");
        if(livrosDoAutor){
            return res.status(400).json({
                menssagem: "Precisa excluir todos os livros desse autor antes de exclui-lo",
                livros: livrosDoAutor
            });
        } else if(livrosDoAutor === null){
            const deleteAutor = await Autor.findByIdAndDelete(id);
            if(deleteAutor){
                return res.status(200).json({menssagem: `Autor de id ${id} foi deletado`});
            } else if(deleteAutor === null){
                return res.status(404).json({menssagem: `Não foi encontrado nenhum ator com id ${id}`})
            }
        } 
    }
};

export {
    listaDeAutores,
    registrarAutor,
    autorPorId,
    atualizarAutor,
    apagarAutor
}