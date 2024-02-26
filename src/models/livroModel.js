import mongoose from "mongoose";
import { autorSchema, Autor } from "./autorModel.js";

const { Schema } = mongoose; //esqueleto do model

// o model de fato para poder get post
const livroSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    isbn:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 13,
    }, 
    titulo: {
        type: String,
        required: true,
    },
    autor:{
        type: [autorSchema],
    },
    // preço:{
    //     type: Number,
    //     required: true,
    // },
    ano:{
        type: Number,
        required: true, 
    },
    genero:{
        type: String,
        required: true,
    },

}, {versionKey: false}, {timestamps: true}); // salva a data de criacao e atualizacao do registro que pode ser usada por exemplo para ordernacao de registro

//o isbn poderia ser o id
//o livro não tem preço?

const Livro = mongoose.model("Livro", livroSchema); //Criando o model propriamente dito

export default Livro;