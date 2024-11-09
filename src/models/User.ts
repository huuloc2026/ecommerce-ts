const mongoose = require('mongoose');

const COLLECTION_NAME = 'User'

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
export default mongoose.model(COLLECTION_NAME, userSchema);