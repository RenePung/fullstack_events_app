// MongoDB connection file - setup for database
// 1. install 2 packages : mongoose and mongodb ( npm install mongoose mongodb )
import mongoose from "mongoose";

// defining mongodb url which we want to connect to, create new database in mongodb and add enviroment variable to env file.
const MONGODB_URI = process.env.MONGODB_URI; 

let cached = (global as any).mongoose || { conn: null, promise: null }; // initializing cached variable

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn // if cached connection exists - exit out of the function and return cached connection

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing'); // if we are not connected throw this error.

    // if we have cached connection - connecting to already existing connection OR creating and connecting to a new one
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}

// creating user and event models in a models folder in database folder