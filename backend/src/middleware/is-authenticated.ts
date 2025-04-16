import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../auth/auth";

export type RequestWithUser = Request & {
  user?: {
    id?: string;
  };
};

export const isAuthenticated = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = await verifyToken(token);
    req.user = {
      id: decoded.userId,
    };
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
};
