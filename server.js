import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import conductoresRoutes from "./routes/conductoresRoutes.js";
import registrosRoutes from "./routes/registrosRoutes.js";
import solicitudesRoutes from "./routes/solicitudesRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ ENDPOINT PARA PING (muy ligero)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/conductores", conductoresRoutes);
app.use("/registros", registrosRoutes);
app.use("/solicitudes", solicitudesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});