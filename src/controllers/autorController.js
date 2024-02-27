import Autor from "../models/autorModel.js"
import Livro from "../models/livroModel.js"

class AutorController {
    //Listar todos os autores
    static async listarAutores(req, res) {
        try {
            const Autores = await Autor.find();
            res.status(200).json(Autores);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    ////Buscar autor pelo ID
    static async buscarAutorPorId(req, res) {
        try {
            const autorId = req.params.id;
            const autor = await Autor.findById(autorId);
            const livrosDoAutor = await Livro.find({autor: autorId}, "titulo ano genero resumo");
            if (!autor) {
                return res.status(404).json({message: "Autor não encontrado"});
            } else {
                res.status(200).json({
                    autor: autor,
                    livrosDoAutor: livrosDoAutor,
                });
            }
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }


    //Criar autor
    static async criarAutor(req, res) {
        try {
            const autor = new Autor({
                nome: req.body.nome,
                nascimento: req.body.nascimento,
                falecimento: req.body.falecimento,
            });

            const novoAutor = await autor.save();

            res.status(201).json(novoAutor)

        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    //Atualizar autor
    static async atualizarAutor(req, res) {
        try {
            const autorId = req.params.id;
            const novosDados = {
                nome: req.body.nome,
                nascimento: req.body.nascimento,
                falecimento: req.body.falecimento,
            };

            const autorAtualizado = await Autor.findByIdAndUpdate(autorId, novosDados, {new: true});

            if (!autorAtualizado){
                return res.status(404).json({ message: "Autor não encontrado"});
            } else {
                res.status(200).json(autorAtualizado);
            }

        } catch (err){
            return res.status(500).json({message: err.message});
        }
    }


    //Deletar autor
    static async deletarAutor(req, res) {
        try {
            const autorId = req.params.id;
            console.log("ID do autor a ser deletado:", autorId); 

            const autorDeletado = await Autor.findByIdAndDelete(autorId);
            console.log("Resultado da exclusão:", autorDeletado); 

            if (!autorDeletado) {
                return res.status(404).json({message: "Autor não encontrado"})
            } else {
                res.status(200).json({message: "Autor deletado com sucesso"});
            }

        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}



export default AutorController;
