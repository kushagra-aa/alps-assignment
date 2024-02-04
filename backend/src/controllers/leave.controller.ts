import asyncHandler from "../helpers/asyncHandler.js";
import ApiError from "../helpers/apiError.js";
import ApiResponse from "../helpers/apiResponse.js";

const refreshLeaveApplications = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  return res
    .status(200)
    .json(
      new ApiResponse(200, [], "Leave Applications Refreshed successfully")
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
