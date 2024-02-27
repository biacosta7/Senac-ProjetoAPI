import mongoose from "mongoose";

const { Schema } = mongoose;


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
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Autor",
        required: true,
    },

    ano:{
        type: Date,
        required: true, 
    },
    genero:{
        type: String,
        required: true,
    },
    resumo: {
        type: String,
        required: true,
    }

}, {versionKey: false}, {timestamps: true}); // salva a data de criacao e atualizacao do registro que pode ser usada por exemplo para ordernacao de registro

const Livro = mongoose.model("Livro", livroSchema); //Criando o model propriamente dito

export default Livro;