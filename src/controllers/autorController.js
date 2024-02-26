import Autor from "../models/autorModel.js"

//Listar todos os autores
async function listarAutores(req, res) {
    try {
        const Autores = await Autor.find();
        res.status(200).json(Autores);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

////Buscar autor pelo ID
async function buscarAutorPorId(req, res) {
    try {
        const autorId = req.params.id;
        const autor = await Autor.findById(autorId);
        if (!autor) {
            return res.status(404).json({message: "Autor não encontrado"});
        } else {
            res.status(200).json(autor);
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


//Criar autor
async function criarAutor(req, res) {
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
async function atualizarAutor(req, res) {
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
async function deletarAutor(req, res) {
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


export {
    listarAutores,
    buscarAutorPorId,
    criarAutor,
    atualizarAutor,
    deletarAutor
};
