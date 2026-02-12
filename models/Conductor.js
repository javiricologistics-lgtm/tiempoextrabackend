import mongoose from "mongoose";

const ConductorSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

export default mongoose.model("Conductor", ConductorSchema);