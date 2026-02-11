import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/test-user", async (req, res) => {
  try {
    const user = await User.create({
      nombre: "Prueba",
      email: `prueba${Date.now()}@test.com`,
      password: "123456"
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creando usuario" });
  }
});

export default router;