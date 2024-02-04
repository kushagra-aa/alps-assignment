import { NextFunction } from "express";
import getAccessToken from "../helpers/apiHelpers/getAccessToken.js";
import ApiError from "../helpers/apiError.js";

const zohoAuthMiddleware = async (_, __, next: NextFunction) => {
  // Check for token expiration
  const now = new Date();
  const tokenAge = now.getTime() - zohoAccessToken.createdAt.getTime();
  if (tokenAge >= 3600000) {
    // Token is expired (older than 3600 seconds)
    try {
      const newToken = await getAccessToken(); // Assuming you have a function to fetch a new token
      zohoAccessToken = {
        token: newToken,
        createdAt: now,
      };
    } catch (error) {
      throw new ApiError(401, error?.message || "Invalid access token");
    }
  }

  next();
};

export default zohoAuthMiddleware;
