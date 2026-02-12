import express from "express";
import Solicitud from "../models/Solicitud.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Solicitud.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const nueva = await Solicitud.create(req.body);
  res.json(nueva);
});

router.put("/:id", async (req, res) => {
  const actualizada = await Solicitud.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizada);
});

export default router;