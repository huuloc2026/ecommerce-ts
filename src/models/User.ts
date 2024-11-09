const mongoose = require("mongoose");

const COLLECTION_NAME = "User";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email_verify: {
    type: Boolean,
    required: true,
    default: false,
  },
  token_verify: {
    type: Boolean,
    required: true,
  },
  time_token_verify: {
    type: Boolean,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  create_at: { type: Date, required: true, default: new Date() },
  updated_at: { type: Date, required: true, default: new Date() },
});

//Export the model
export default mongoose.model(COLLECTION_NAME, userSchema);
