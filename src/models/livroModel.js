import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Autor",
        required: true
    },
    isbn: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 13,
    },
    ano: {
        type: Date,
        required: true,
        default: Date.now()
    },
    genero: {
        type: String,
        minLength: 3,
        maxLength: 50,
    },
    resumo: {
        type: String,
        required: true
    }
},{
    versionKey: false
},{
    timestamps: true
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;