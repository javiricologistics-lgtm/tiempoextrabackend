import express from "express";
import { register, login } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Registro
router.post("/register", register);

// Login
router.post("/login", login);

// Obtener usuario autenticado
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Usuario autenticado",
    usuario: req.user
  });
});

export default router;