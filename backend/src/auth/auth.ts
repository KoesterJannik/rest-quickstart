import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, config.BCRYPT_SALT_ROUNDS);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

export async function generateToken(userId: string) {
  return jwt.sign(
    {
      data: {
        userId,
      },
    },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRES_IN_MS },
  );
}

type DecodedToken = {
  data: {
    userId: string;
  };
};

export async function verifyToken(token: string) {
  const decoded = jwt.verify(token, config.JWT_SECRET) as DecodedToken;
  return decoded.data;
}
