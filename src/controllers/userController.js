import User from "../models/userModel.js"


//Listar todos os users
async function listarUsers(req, res) {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

////Buscar user pelo ID
async function buscarUserPorId(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "User não encontrado"});
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


//Criar user
async function criarUser(req, res) {
    try {
        const user = new User({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });

        const novoUser = await user.save();

        res.status(201).json(novoUser)

    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

//Atualizar user
async function atualizarUser(req, res) {
    try {
        const userId = req.params.id;
        const novosDados = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        };

        const userAtualizado = await User.findByIdAndUpdate(userId, novosDados, {new: true});

        if (!userAtualizado){
            return res.status(404).json({ message: "User não encontrado"});
        } else {
            res.status(200).json(userAtualizado);
        }

    } catch (err){
        return res.status(500).json({message: err.message});
    }
}


//Deletar user
async function deletarUser(req, res) {
    try {
        const userId = req.params.id;
        console.log("ID do user a ser deletado:", userId);

        const userDeletado = await Autor.findByIdAndDelete(userId);
        console.log("Resultado da exclusão:", userDeletado);

        if (!userDeletado) {
            return res.status(404).json({message: "User não encontrado"})
        } else {
            res.status(200).json({message: "User deletado com sucesso"});
        }

    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}


export {
    listarUsers,
    buscarUserPorId,
    criarUser,
    atualizarUser,
    deletarUser
};
