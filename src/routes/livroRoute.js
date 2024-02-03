import express from "express";
import {
    listaDeLivros,
    registrarLivro,
    livroPorId,
    atualizarLivro,
    apagarLivro
} from "../controllers/livroController.js";

const livroRouter = express.Router();

livroRouter.route("/").get(listaDeLivros).post(registrarLivro);
livroRouter.route("/:id").get(livroPorId).put(atualizarLivro).delete(apagarLivro);

export default livroRouter;