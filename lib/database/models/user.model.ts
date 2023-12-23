// creating user model - defining a MongoDB schema using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js
import { Schema, model, models } from "mongoose";


// This schema defines the structure of a user document in your MongoDB collection
const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true }, 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
})

// using this schema to create a model
const User = models.User || model('User', UserSchema);

export default User;