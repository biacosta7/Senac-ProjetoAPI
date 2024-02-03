import express from "express";
import {
    listaDeLivros,
    criarLivro,
    livroPorId,
    atualizarLivro,
    apagarLivro
} from "../controllers/livroController.js";

const livroRouter = express.Router();

livroRouter.route("/").get(listaDeLivros).post(criarLivro);
livroRouter.route("/:id").get(livroPorId).put(atualizarLivro).delete(apagarLivro);

export default livroRouter;