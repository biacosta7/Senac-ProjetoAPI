import mongoose from "mongoose";

const autorSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date
    },
    falecimento: {
        type: Date
    }
},{
    versionKey: false
});

const Autor = mongoose.model("Autor", autorSchema);

export default Autor;