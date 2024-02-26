import express from "express"
import {
    listarLivros,
    buscarLivroPorId,
    criarLivro,
    atualizarLivro,
    deletarLivro
} from "../controllers/livroController.js";

const livroRouter = express.Router();

livroRouter.get("/", listarLivros);
livroRouter.get("/:id", buscarLivroPorId);
livroRouter.post("/", criarLivro);
livroRouter.patch("/:id", atualizarLivro);
livroRouter.delete("/:id", deletarLivro)

// GET /: Listar todos os livros.
// GET /nome/:nome: Buscar livro pelo nome.
// GET /:id: Buscar livro pelo ID.
// POST /: Criar livro.
// PUT /:id: Atualizar livro.
// DELETE /:id: Deletar livro.

export default livroRouter;