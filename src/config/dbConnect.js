import mongoose from "mongoose";
import "dotenv/config";

async function dbConnect(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection
}
//mongodb+srv://biacosta:<password>@cluster0.kmm6nfn.mongodb.net/?retryWrites=true&w=majority

export default dbConnect;