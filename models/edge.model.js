import mongoose from "mongoose";

const EdgeSchema = new mongoose.Schema({
    id: String,
    source: String,
    target: String,
  });
  
  export default mongoose.model('Edge', EdgeSchema);