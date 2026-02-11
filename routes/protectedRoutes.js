import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/perfil", authMiddleware, (req, res) => {
  res.json({
    message: "Ruta protegida OK",
    usuario: req.user
  });
});

export default router;