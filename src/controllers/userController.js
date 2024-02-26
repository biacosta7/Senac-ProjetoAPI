import User from "../models/userModel.js"

// Infromações do usuário logado
// Rota /user
// Método GET
const usuarioLogado = async(req, res) =>{
    const listaUser = await User.find({});
    if(listaUser){
        return res.status(200).json(listaUser)
    } else if(listaUser === null){
        return res.send(`<h1>Tela do usuario</h1>`)
    }
    
}

// Registro de novo usuário
// Rota /user/registrar
// Método POST
const registrarUsuario = async(req, res) => {
    const user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };
    if(!user.nome || !user.email || !user.senha){
        return res.status(400).json({menssagem: "Por favor insira um nome, email, senha"})
    } else {
        const findEmail = await User.findOne({email: user.email});
        if(findEmail){
            return res.status(400).json({menssagem: "E-mail já utilizado"});
        } else if(findEmail === null){
            const novoUser = await User.create(user);
            return res.status(201).json(novoUser)
        }    
    } 
}

// Login do usuário
// Rota /user/login
// Método POST
const usuarioLogin = async(req, res) => {
    const { email, senha} = req.body;
    if(!email || !senha){
        return res.status(400).json({menssagem: "Por favor insira seu email e senha"})
    }
    const findEmail = await User.findOne({email: email});
    if(findEmail === null){
        return res.status(404).json({menssagem: `Não existe nenhum usuário cadastrado com esse email`})
    }
    const findUser = await User.findOne({email: email, senha: senha});
    if(findUser === null){
        return res.status(404).json({menssagem: "Senha incorreta"})
    } else if(findUser){
        return res.status(200).json(findUser)
    }
}

export{
    usuarioLogado,
    registrarUsuario,
    usuarioLogin
}