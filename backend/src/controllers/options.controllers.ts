import {
  Department,
  Insurance_Company,
  Insurance_Type,
  Type_of_Leave,
} from "../constants/OptionsEum.js";
import ApiResponse from "../helpers/apiResponse.js";
import asyncHandler from "../helpers/asyncHandler.js";

const getOptions = asyncHandler(async (req, res) => {
  let data = {
    insuranceType: Insurance_Type,
    department: Department,
    typeOfLeave: Type_of_Leave,
    insuranceCompany: Insurance_Company,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Options found successfully"));
});

export { getOptions };
