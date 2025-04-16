import { Request, Response, NextFunction } from "express";

export function errorHandler (err: Error, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
      return next(err)
    }
    // log the error
    console.error(err);
    console.log(`Error: ${err.message}`);
    res.status(500).json({ message: "Something went wrong" });
  }
  


