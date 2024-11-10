import mongoose from "mongoose";

const NodeSchema = new mongoose.Schema({
  id: String,
  label: String,
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 50
  },
  position: {
    x: Number,
    y: Number,
  },
});

export default mongoose.model("Node", NodeSchema);
