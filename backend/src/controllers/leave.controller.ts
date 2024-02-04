import asyncHandler from "../helpers/asyncHandler.js";
import ApiError from "../helpers/apiError.js";
import ApiResponse from "../helpers/apiResponse.js";
import getLeaveRequests from "../helpers/apiHelpers/leaveRequests/getLeaveRequests.js";
import { readJSONFile, writeToJSONFile } from "../helpers/jsonHelpers.js";

const refreshLeaveApplications = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  let zohoAccessToken = await readJSONFile("./zohoToken.json");
  const data = await getLeaveRequests(zohoAccessToken.token);

  await writeToJSONFile(data, "./data.json");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        undefined,
        "Leave Applications Refreshed successfully"
      )
    );
});
const getLeaveApplications = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Leave Applications found successfully"));
});
const addNewLeaveApplication = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Leave Applications found successfully"));
});
const editLeaveApplication = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Leave Applications found successfully"));
});
const removeLeaveApplication = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Leave Applications found successfully"));
});

export {
  refreshLeaveApplications,
  getLeaveApplications,
  addNewLeaveApplication,
  editLeaveApplication,
  removeLeaveApplication,
};
