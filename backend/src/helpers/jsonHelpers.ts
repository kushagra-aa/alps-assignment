import { promises as fs } from "fs";
import ApiError from "./apiError.js";

const writeToJSONFile = async (data, filename = "./data.json") => {
  try {
    const formattedData = JSON.stringify(data, null, 2);
    await fs.writeFile(filename, formattedData); // Use fs.promises.writeFile
  } catch (error) {
    console.log("error :>> ", error);
    throw new ApiError(500, error?.message || "Something Went Wrong");
  }
};

const readJSONFile = async (filename = "./data.json") => {
  try {
    const fileData = await fs.readFile(filename); // Use fs.promises.readFile
    const data = JSON.parse(fileData.toString()); // Parse the JSON data
    return data;
  } catch (error) {
    throw new ApiError(500, error?.message || "Something Went Wrong");
  }
};
export { writeToJSONFile, readJSONFile };
