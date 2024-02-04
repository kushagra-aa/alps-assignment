import asyncHandler from "../helpers/asyncHandler.js";
import ApiError from "../helpers/apiError.js";
import ApiResponse from "../helpers/apiResponse.js";
import getLeaveRequests from "../helpers/apiHelpers/leaveRequests/getLeaveRequests.js";
import { readJSONFile, writeToJSONFile } from "../helpers/jsonHelpers.js";
import addLeaveRequests, {
  AddRequestBodyType,
} from "../helpers/apiHelpers/leaveRequests/addLeaveRequest.js";

const refreshLeaveApplications = asyncHandler(async (req, res) => {
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
  let data = await readJSONFile("./data.json");

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Leave Applications found successfully"));
});
const addNewLeaveApplication = asyncHandler(async (req, res) => {
  let zohoAccessToken = await readJSONFile("./zohoToken.json");

  const bodyData: AddRequestBodyType = {
    Car_Number: req.body.carNumber,
    Department: req.body.department,
    Employee_Id: req.body.employeeId,
    End_Date: req.body.endDate,
    Gross_Premium: req.body.grossPremium,
    Insurance_Company: req.body.insuranceCompany,
    Insurance_Type: req.body.insuranceType,
    PREMIUM: req.body.premium,
    Reason: req.body.reason,
    Start_Date: req.body.startDate,
    Type_of_Leave: req.body.typeOfLeave,
  };
  const resp = await addLeaveRequests(zohoAccessToken.token, bodyData);
  return res
    .status(200)
    .json(new ApiResponse(200, resp, "Leave Application Added successfully"));
});
const editLeaveApplication = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, [], "Leave Applications found successfully"));
});
const removeLeaveApplication = asyncHandler(async (req, res) => {
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
