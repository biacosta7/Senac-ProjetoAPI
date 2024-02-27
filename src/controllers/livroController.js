import Livro from "../models/livroModel.js"


class LivroController{

    //Listar todos os livros
    static async listarLivros(req, res) {
        try {
            const livros = await Livro.find();
            res.status(200).json(livros);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    ////Buscar livro pelo ID
    static async buscarLivroPorId(req, res) {
        try {
            const livroId = req.params.id;
            const livro = await Livro.findById(livroId);
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
            const livro = new Livro({
                isbn: req.body.isbn,
                titulo: req.body.titulo,
                autor: req.body.autor,
                ano: req.body.ano,
                genero: req.body.genero
            });

            const novoLivro = await livro.save();

            res.status(201).json(novoLivro)

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
                genero: req.body.genero
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
