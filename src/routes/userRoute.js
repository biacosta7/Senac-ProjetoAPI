import express from "express";
import {
    usuarioLogado,
    registrarUsuario,
    usuarioLogin
} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.get("/", usuarioLogado);
userRouter.post("/registrar", registrarUsuario);
userRouter.post("/login", usuarioLogin);

export default userRouter;