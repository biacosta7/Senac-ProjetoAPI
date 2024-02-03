import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
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
    }
},{
    versionKey: false
},{
    timestamps: true
});

const user = mongoose.model("User", userSchema);

export default user;