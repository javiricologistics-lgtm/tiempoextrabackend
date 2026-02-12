import mongoose from "mongoose";

const SolicitudSchema = new mongoose.Schema({
  conductor: String,
  estado: String
});

export default mongoose.model("Solicitud", SolicitudSchema);