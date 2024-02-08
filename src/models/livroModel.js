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
        type: Number,
        required: true,
        min: 0,
        max: 3000,
    },
    genero: {
        type: String,
        minLength: 3,
        maxLength: 50,
    }
},{
    versionKey: false
},{
    timestamps: true
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;