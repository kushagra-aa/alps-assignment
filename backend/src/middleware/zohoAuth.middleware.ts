import { NextFunction } from "express";
import getAccessToken from "../helpers/apiHelpers/getAccessToken.js";
import ApiError from "../helpers/apiError.js";
import { readJSONFile, writeToJSONFile } from "../helpers/jsonHelpers.js";

const zohoAuthMiddleware = async (_, __, next: NextFunction) => {
  try {
    let zohoAccessToken = await readJSONFile("./zohoToken.json");
    console.log("zohoAccessToken :>> ", zohoAccessToken);
    // Check for token expiration
    const now = new Date();
    const then = new Date(zohoAccessToken.createdAt);
    const tokenAge = now.getTime() - then.getTime();
    console.log("tokenAge :>> ", tokenAge);
    if (tokenAge >= 3600000) {
      // Token is expired (older than 3600 seconds)
      const newToken = await getAccessToken(); // Assuming you have a function to fetch a new token
      console.log("newToken :>> ", newToken);
      zohoAccessToken = {
        token: newToken,
        createdAt: now.toLocaleString(),
      };
      await writeToJSONFile(zohoAccessToken, "./zohoToken.json");
    }
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid zoho access token");
  }

  next();
};

export default zohoAuthMiddleware;
