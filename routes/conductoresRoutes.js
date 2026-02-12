import express from "express";
import Conductor from "../models/Conductor.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Conductor.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const nuevo = await Conductor.create(req.body);
  res.json(nuevo);
});

export default router;