
// Infromações do usuário logado
// Rota /user
// Método GET
const usuarioLogado = async(req, res) =>{
    res.send(`<h1>Tela do usuario</h1>`)
}

// Registro de novo usuário
// Rota /user/registrar
// Método POST
const registrarUsuario = async(req, res) => {
    res.json({menssagem: "Registrar novo usuario"})
}

// Login do usuário
// Rota /user/login
// Método POST
const usuarioLogin = async(req, res) => {
    res.json({menssagem: "Login do usuário"})
}

export{
    usuarioLogado,
    registrarUsuario,
    usuarioLogin
}