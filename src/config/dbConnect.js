import mongoose from "mongoose";
import "dotenv/config";


//mongodb+srv://biacosta:B12345678@cluster0.3t2w8nq.mongodb.net/Api-clientes?retryWrites=true&w=majority

async function dbConnect(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection
}

export default dbConnect;