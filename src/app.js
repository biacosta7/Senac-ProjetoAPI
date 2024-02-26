import express from "express";
import dbConnect from "./config/dbConnect.js";
import userRouter from "./routes/userRoute.js";
import livroRouter from "./routes/livroRoute.js";
import autorRouter from "./routes/autorRoute.js";

// Conexão com com o bando de dados
// 
const connect = await dbConnect();

connect.on("error", (erro) =>{
    console.error("Erro na conexão!", erro);
});
connect.once("open", () =>{
    console.log("Sucesso na conexão com o banco de dados");
});

// Inicialização do Express
const app = express();

// Passar o corpo para a requisição
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rotas
app.use("/user", userRouter);
app.use("/livro", livroRouter);
app.use("/autor", autorRouter);

export default app;