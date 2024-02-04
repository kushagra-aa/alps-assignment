import asyncHandler from "../helpers/asyncHandler.js";
import ApiError from "../helpers/apiError.js";
import ApiResponse from "../helpers/apiResponse.js";

const getLeaveApplications = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "working!",
  });
});

export { getLeaveApplications };
