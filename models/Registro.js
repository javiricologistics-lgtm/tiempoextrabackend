import mongoose from "mongoose";

const RegistroSchema = new mongoose.Schema({
  conductor: String,
  minutos_usados: Number,
  estado: String
});

export default mongoose.model("Registro", RegistroSchema);