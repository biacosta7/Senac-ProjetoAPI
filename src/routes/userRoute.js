import express from "express";
import UserController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", UserController.listarUsers);
userRouter.get("/:id", UserController.buscarUserPorId);
userRouter.post("/", UserController.criarUser);
userRouter.patch("/:id", UserController.atualizarUser);
userRouter.delete("/:id", UserController.deletarUser)

export default userRouter;