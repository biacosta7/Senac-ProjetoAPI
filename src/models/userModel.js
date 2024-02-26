import mongoose from "mongoose";

const { Schema } = mongoose; //esqueleto do model

// o model de fato para poder get post
const userSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },

}, {versionKey: false}, {timestamps: true}); // salva a data de criacao e atualizacao do registro que pode ser usada por exemplo para ordernacao de registro

//o cpf poderia ser o id

const User = mongoose.model("User", userSchema); //Criando o model propriamente dito

export default User;