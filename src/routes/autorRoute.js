import express from "express";

import AutorController from "../controllers/autorController.js";

const autorRouter = express.Router();

autorRouter.get("/", AutorController.listarAutores);
autorRouter.get("/:id", AutorController.buscarAutorPorId);
autorRouter.post("/", AutorController.criarAutor);
autorRouter.patch("/:id", AutorController.atualizarAutor);
autorRouter.delete("/:id", AutorController.deletarAutor)

export default autorRouter;