import { Request, Response, Router } from "express";

import {
  isAuthenticated,
  RequestWithUser,
} from "../../middleware/is-authenticated";
import { db } from "../../db";
const usersRouter = Router();

usersRouter.get(
  "/me",
  isAuthenticated as any,
  async (req: RequestWithUser, res) => {
    const user = await db.user.findUnique({
      where: {
        id: req.user?.id,
      },
    });

    res.status(200).json({
      user: user,
    });
  },
);

export default usersRouter;
