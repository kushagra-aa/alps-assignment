import { Request, NextFunction } from "express";
import ApiError from "../helpers/apiError.js";

const clientAuthMiddleware = (req: Request, _, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const requiredClientToken = `myAuth ${process.env.MY_ACCESS_TOKEN}`;

    if (!authHeader || authHeader !== requiredClientToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
};

export default clientAuthMiddleware;
