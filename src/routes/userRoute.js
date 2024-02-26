import express from "express";
import {
    listarUsers,
    buscarUserPorId,
    criarUser,
    atualizarUser,
    deletarUser
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", listarUsers);
userRouter.get("/:id", buscarUserPorId);
userRouter.post("/", criarUser);
userRouter.patch("/:id", atualizarUser);
userRouter.delete("/:id", deletarUser)

export default userRouter;