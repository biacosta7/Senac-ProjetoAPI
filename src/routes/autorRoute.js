import express from "express";

import {
    listarAutores,
    buscarAutorPorId,
    criarAutor,
    atualizarAutor,
    deletarAutor
} from "../controllers/autorController.js";

const autorRouter = express.Router();

autorRouter.get("/", listarAutores);
autorRouter.get("/:id", buscarAutorPorId);
autorRouter.post("/", criarAutor);
autorRouter.patch("/:id", atualizarAutor);
autorRouter.delete("/:id", deletarAutor)

export default autorRouter;