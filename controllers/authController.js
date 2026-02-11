import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ message: "El email ya existe" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      nombre,
      email,
      password: hash
    });

    res.json({ message: "Usuario registrado", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el registro" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Credenciales inválidas" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login correcto", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el login" });
  }
};