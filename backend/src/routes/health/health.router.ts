import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
    res.send("OK");
});

export default healthRouter;
