import express from "express";
import { login, signup, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        console.log("Login API called with body:", req.body);
        await login(req, res);
    } catch (error) {
        console.error("Error in login route:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/signup", async (req, res) => {
    try {
        console.log("Signup API called with body:", req.body);
        await signup(req, res);
    } catch (error) {
        console.error("Error in signup route:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/logout", async (req, res) => {
    try {
        console.log("Logout API called");
        await logout(req, res);
    } catch (error) {
        console.error("Error in logout route:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
