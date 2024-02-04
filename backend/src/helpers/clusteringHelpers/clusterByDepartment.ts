import { LeaveRequestType } from "../../types/LeaveRequest.js";

export default function clusterByDepartment(data: LeaveRequestType[]): {
  [key: string]: LeaveRequestType[];
} {
  return data.reduce((acc, request) => {
    const department = request.Department;
    acc[department] = acc[department] || []; // Create an empty array if the department doesn't exist
    acc[department].push(request);
    return acc;
  }, {});
}
