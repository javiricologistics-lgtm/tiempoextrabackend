import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Rutas
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";

dotenv.config();

// Conexión a MongoDB
connectDB();

const app = express();

// Para leer JSON del body
app.use(express.json());

// Registrar rutas
app.use("/auth", authRoutes);
app.use("/test", testRoutes);
app.use("/protected", protectedRoutes);

// Arrancar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});