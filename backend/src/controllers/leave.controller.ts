import asyncHandler from "../helpers/asyncHandler.js";
import ApiResponse from "../helpers/apiResponse.js";
import getLeaveRequests from "../helpers/apiHelpers/leaveRequests/getLeaveRequests.js";
import { readJSONFile, writeToJSONFile } from "../helpers/jsonHelpers.js";
import addLeaveRequests, {
  AddRequestBodyType,
} from "../helpers/apiHelpers/leaveRequests/addLeaveRequest.js";
import editLeaveRequests, {
  EditRequestBodyType,
} from "../helpers/apiHelpers/leaveRequests/editLeaveRequest.js";
import deleteLeaveRequests from "../helpers/apiHelpers/leaveRequests/deleteLeaveRequest.js";

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
  const id = req.params.id;
  let zohoAccessToken = await readJSONFile("./zohoToken.json");

  const bodyData: EditRequestBodyType = {
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
  const resp = await editLeaveRequests(zohoAccessToken.token, id, bodyData);
  return res
    .status(200)
    .json(new ApiResponse(200, resp, "Leave Application Edited successfully"));
});
const removeLeaveApplication = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let zohoAccessToken = await readJSONFile("./zohoToken.json");
  const resp = await deleteLeaveRequests(zohoAccessToken.token, id);
  return res
    .status(200)
    .json(new ApiResponse(200, resp, "Leave Applications found successfully"));
});

export {
  refreshLeaveApplications,
  getLeaveApplications,
  addNewLeaveApplication,
  editLeaveApplication,
  removeLeaveApplication,
};
