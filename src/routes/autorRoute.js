import express from "express";
import AutorControllers from "../controllers/autorController.js";

const autorRouter = express.Router();

autorRouter.route("/").get(AutorControllers.listaDeAutores).post(AutorControllers.registrarAutor);
autorRouter.route("/:id").get(AutorControllers.autorPorId).put(AutorControllers.atualizarAutor).delete(AutorControllers.apagarAutor);

export default autorRouter;