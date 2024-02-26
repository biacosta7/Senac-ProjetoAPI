import mongoose from "mongoose";
const { Schema } = mongoose; //esqueleto do model

//const { livroSchema } = require("./livroModel");
// o model de fato para poder get post
const autorSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    nome:{
        type: String,
        required: true,
    },
    nascimento: {
        type: Date,
    },
    falecimento: {
        type: Date,
    },

}, {versionKey: false}, {timestamps: true}); // salva a data de criacao e atualizacao do registro que pode ser usada por exemplo para ordernacao de registro

const Autor = mongoose.model("Autor", autorSchema); //Criando o model propriamente dito

export { autorSchema, Autor };


export default Autor;
