import Autor from "../models/autorModel.js"
import Livro from "../models/livroModel.js"
// Infromações de todos os livro
// Rota /livro
// Método GET
const listaDeLivros = async(req, res) => {
    const listaLivros = await Livro.find({});
    if(listaLivros === null){
        res.send(`<h1>Página dos livros</h1>`)
    } else if(listaLivros){
        return res.status(200).json(listaLivros)
    }
    
};

// Adicionar novo livro
// Rota /livro
// Método POST
const registrarLivro = async(req, res) => {
    const livro = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        isbn: req.body.isbn,
        ano: req.body.ano,
        genero: req.body.genero,
    }
    if(!livro.titulo|| !livro.isbn ||!livro.autor ||!livro.ano){
        return res.status(400).json({menssagem: "Por favor insira um título, autor, ano, isbn"})
    }
    const findAutor = await Autor.findById(livro.autor)
    if(findAutor === null){
        return res.status(404).json({menssagem: "Esse autor não foi cadastrado"});
    }
    const novoLivro = await Livro.create(livro);
    if(novoLivro){
        return res.status(201).json(novoLivro)
    } 


};

// Infromação do livro por id 
// Rota /livro/:id
// Método GET
const livroPorId = async(req, res) => {
    const id = req.params.id
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"});
    }
    const findLivro = await Livro.findById(id);
    if(findLivro === null){
        return res.status(404).json({menssagem: "Não foi encontrado nenhum livro com esse id"});
    } else if(findLivro){
        return res.status(200).json(findLivro);
    }
};

// Atualizar livro por id
// Rota /livro/:id
// Método PUT
const atualizarLivro = async(req, res) => {
    const id = req.params.id
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"});
    }
    const updtLivro = req.body;
    if(!updtLivro.titulo && !updtLivro.autor && !updtLivro.ano && !updtLivro.idbn && !updtLivro.genero){
        return res.status(400).json({menssagem: "Nenhuma informação foi passada para atualizar"})
    }
    const livroAtualizado = await Livro.findByIdAndUpdate(id, updtLivro, {new: true});
    if(livroAtualizado === null){
        return res.status(404).json({menssagem: `Não foi possível autalizar. Nenhum livro com esse id: ${id} foi encontrado`})
    } else if(livroAtualizado){
        return res.status(200).json(livroAtualizado)
    }
};

// Excluir livro por id
// Rota /livro/:id
// Método DELETE
const apagarLivro = async(req, res) => {
    const id = req.params.id
    if(!id){
        return res.status(400).json({menssagem: "Nenhum id foi passado"});
    }
    const livroApagado = await Livro.findByIdAndDelete(id);
    if(livroApagado === null){
        return res.status(404).json({menssagem: `Não foi encontrado nenhum livro com esse id: ${id}`})
    } else if(livroApagado){
        return res.status(200).json({menssagem: `Livro de id: ${id} foi deletado com sucesso`})
    }
};

export {
    listaDeLivros,
    registrarLivro,
    livroPorId,
    atualizarLivro,
    apagarLivro
};