import { LeaveRequestType } from "../types/LeaveRequest.js";

const fillMissingFields = (
  leaveRequests: LeaveRequestType[]
): LeaveRequestType[] => {
  return leaveRequests.map((request) => {
    // Get all fields from the type using keyof
    const fields = Object.keys(request) as (keyof LeaveRequestType)[];

    return fields.reduce((acc, field) => {
      acc[field] =
        request[field] || request[field] !== "" ? request[field] : "Not found"; // Use nullish coalescing operator
      return acc;
    }, {} as LeaveRequestType);
  });
};

export default fillMissingFields;
