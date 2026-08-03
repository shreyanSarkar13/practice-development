import express from "express";
import { register, login } from "../controllers/authController.js";
import validateRegister from "../middleware/validateRegister.js";

const router = express.Router();

router.post("/register",validateRegister, register);
router.post("/login", login);
//router.post("/refresh-token", refreshToken);

export default router;
