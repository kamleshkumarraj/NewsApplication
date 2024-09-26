import mongoose from 'mongoose';

export const dbConnection = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Database connected successfully on port : ${connect.connection.port} and host : ${connect.connection.host}`)
    }
    catch(err){
        console.log(`Database connection failed due to error: ${err}`)
    }
}