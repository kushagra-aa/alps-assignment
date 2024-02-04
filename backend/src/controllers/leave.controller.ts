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
import { formatDate } from "../helpers/dateTime.js";

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
    Car_Number: req.body.Car_Number,
    Department: req.body.Department,
    Employee_Id: req.body.Employee_Id,
    End_Date: formatDate(req.body.End_Date),
    Gross_Premium: req.body.Gross_Premium,
    Insurance_Company: req.body.Insurance_Company,
    Insurance_Type: req.body.Insurance_Type,
    PREMIUM: req.body.PREMIUM,
    Reason: req.body.Reason,
    Start_Date: formatDate(req.body.Start_Date),
    Type_of_Leave: req.body.Type_of_Leave,
  };
  console.log("bodyData :>> ", bodyData);
  const resp = await addLeaveRequests(zohoAccessToken.token, bodyData);
  return res
    .status(200)
    .json(new ApiResponse(200, resp, "Leave Application Added successfully"));
});
const editLeaveApplication = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let zohoAccessToken = await readJSONFile("./zohoToken.json");

  const bodyData: EditRequestBodyType = {
    Car_Number: req.body.Car_Number,
    Department: req.body.Department,
    Employee_Id: req.body.Employee_Id,
    End_Date: formatDate(req.body.End_Date),
    Gross_Premium: req.body.Gross_Premium,
    Insurance_Company: req.body.Insurance_Company,
    Insurance_Type: req.body.Insurance_Type,
    PREMIUM: req.body.PREMIUM,
    Reason: req.body.Reason,
    Start_Date: formatDate(req.body.Start_Date),
    Type_of_Leave: req.body.Type_of_Leave,
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
    .json(new ApiResponse(200, resp, "Leave Application Removed successfully"));
});

export {
  refreshLeaveApplications,
  getLeaveApplications,
  addNewLeaveApplication,
  editLeaveApplication,
  removeLeaveApplication,
};
