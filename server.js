//import http from "http" 
import app from "./src/app.js"


const PORT = 8000 


/* const rotas = { 

    "/": "Projeto api-livros", //apenas o "/" significa a pagina inicial 

    "/livros": "Livros" 

} 
 

const server = http.createServer((req, res) => { 

    res.writeHead(200, {"content-type": "text/plan"}); 

    res.end(rotas[req.url]); 

})  */
 

app.listen(PORT, () => { 

    console.log(`Rodando na port ${PORT}`) 

  }) 

