import Livro from "../models/livroModel.js"
import Autor from "../models/autorModel.js"
import {ObjectId} from "mongodb"

class LivroController{

    //Listar todos os livros
    static async listarLivros(req, res) {
        try {
            const livros = await Livro.find()
                .populate("autor", "nome")
                .sort({titulo: 1});
            res.status(200).json(livros);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    ////Buscar livro pelo ID
    static async buscarLivroPorId(req, res) {
        try {
            const livroId = req.params.id;
            const livro = await Livro.findById(livroId).populate("autor", "nome");
            if (!livro) {
                return res.status(404).json({message: "Livro não encontrado"});
            } else {
                res.status(200).json(livro);
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }


    //Criar livro
    static async criarLivro(req, res) {
        try {
            if(Array.isArray(req.body)){
                const listaDeLivros = await Livro.create(req.body)
                return res.status(201).json(listaDeLivros)
            }
            const livro = new Livro({
                _id: req.body._id ? new ObjectId(req.body._id) : new ObjectId(),
                isbn: req.body.isbn,
                titulo: req.body.titulo,
                autor: req.body.autor,
                ano: req.body.ano,
                genero: req.body.genero,
                resumo: req.body.resumo
            });

            const autorExiste = await Autor.findById(livro.autor);
            
            if(autorExiste){
                const novoLivro = await livro.save();
                res.status(201).json(novoLivro)
            } else {
                res.status(400).json({menssagem: "Autor nao foi cadastrado"})
            }    
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    //Atualizar livro
    static async atualizarLivro(req, res) {
        try {
            const livroId = req.params.id;
            const novosDados = {
                isbn: req.body.isbn,
                titulo: req.body.titulo,
                autor: req.body.autor,
                ano: req.body.ano,
                genero: req.body.genero,
                resumo: req.body.resumo,
            };

            const livroAtualizado = await Livro.findByIdAndUpdate(livroId, novosDados, {new: true});

            if (!livroAtualizado){
                return res.status(404).json({ message: "Livro não encontrado"});
            } else {
                res.status(200).json(livroAtualizado);
            }

        } catch (err){
            return res.status(500).json({message: err.message});
        }
    }


    //Deletar livro
    static async deletarLivro(req, res) {
        try {
            const livroId = req.params.id;
            console.log("ID do livro a ser deletado:", livroId);

            const livroDeletado = await Livro.findByIdAndDelete(livroId);
            console.log("Resultado da exclusão:", livroDeletado);

            if (!livroDeletado) {
                return res.status(404).json({message: "Livro não encontrado"})
            } else {
                res.status(200).json({message: "Livro deletado com sucesso"});
            }

        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}



export default LivroController;
