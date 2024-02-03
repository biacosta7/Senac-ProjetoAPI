import express from "express";
import {
    listaDeAutores,
    registrarAutor,
    autorPorId,
    atualizarAutor,
    apagarAutor
} from "../controllers/autorController.js";

const autorRouter = express.Router();

autorRouter.route("/").get(listaDeAutores).post(registrarAutor);
autorRouter.route("/:id").get(autorPorId).put(atualizarAutor).delete(apagarAutor);

export default autorRouter;