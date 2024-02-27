import express from "express"
import LivroController from "../controllers/livroController.js";

const livroRouter = express.Router();

livroRouter.get("/", LivroController.listarLivros);
livroRouter.get("/:id", LivroController.buscarLivroPorId);
livroRouter.post("/", LivroController.criarLivro);
livroRouter.patch("/:id", LivroController.atualizarLivro);
livroRouter.delete("/:id", LivroController.deletarLivro)

// GET /: Listar todos os livros.
// GET /nome/:nome: Buscar livro pelo nome.
// GET /:id: Buscar livro pelo ID.
// POST /: Criar livro.
// PUT /:id: Atualizar livro.
// DELETE /:id: Deletar livro.

export default livroRouter;