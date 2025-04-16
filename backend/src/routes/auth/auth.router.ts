import { Request, Response, Router } from "express";
import { loginSchema, registerSchema } from "./auth.schema";
import { db } from "../../db";
import { comparePassword, generateToken, verifyToken } from "../../auth/auth";
const authRouter = Router();

authRouter.post("/register", async (req, res) => {
    const safeParsed = registerSchema.safeParse(req.body);
    if (!safeParsed.success) {
        console.log(safeParsed.error.errors);
         res.status(400).json({ message: "Invalid request body", errors: safeParsed.error.errors });
    }else {
        const { email, password } = safeParsed.data;
        const isEmailInUse = await db.user.findUnique({
            where: { email }
        });
        if (isEmailInUse) {
            res.status(400).json({ message: "Email already in use" });
        }
        const user = await db.user.create({
            data: { email, password }
        });
        const token = await generateToken(user.id);

    
        res.status(201).json({ message: "User created successfully", access_token: token });
    }
    
});

authRouter.post("/login", async (req, res) => {
    const safeParsed = loginSchema.safeParse(req.body);
    if (!safeParsed.success) {
        res.status(400).json({ message: "Invalid request body", errors: safeParsed.error.errors });
    }else{
        const { email, password } = safeParsed.data;
        const user = await db.user.findUnique({
            where: { email }
        });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
        }else{
            const isPasswordValid = await comparePassword(password, user.password);
            if (!isPasswordValid) {
                res.status(400).json({ message: "Invalid credentials" });
            }
            const token = await generateToken(user.id);
            res.status(200).json({ message: "Login successful", access_token: token });
        }
    }
   
   
});

export default authRouter;
