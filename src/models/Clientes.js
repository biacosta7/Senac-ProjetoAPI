import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true}, // String = mongoose.Schema.Types.String
    email: {type: String}
}, {versionKey: false});

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;

