import express from "express";
import Registro from "../models/Registro.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Registro.find();
  res.json(data);
});

router.get("/:email", async (req, res) => {
  const data = await Registro.find({ conductor: req.params.email });
  res.json(data);
});

router.post("/", async (req, res) => {
  const nuevo = await Registro.create(req.body);
  res.json(nuevo);
});

router.put("/:id", async (req, res) => {
  const actualizado = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
});

export default router;