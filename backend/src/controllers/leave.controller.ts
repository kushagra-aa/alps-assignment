import asyncHandler from "../helpers/asyncHandler.js";
import ApiError from "../helpers/apiError.js";
import ApiResponse from "../helpers/apiResponse.js";

const getLeaveApplications = asyncHandler(async (req, res) => {
  // if(error) {  throw new ApiError(400, "Something Went Wrong?")}
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Leave Applications found successfully"));
});

export { getLeaveApplications };
