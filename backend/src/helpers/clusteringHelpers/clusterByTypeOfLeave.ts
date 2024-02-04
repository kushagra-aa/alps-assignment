import { LeaveRequestType } from "../../types/LeaveRequest.js";

export default function clusterByTypeOfLeave(data: LeaveRequestType[]): {
  [key: string]: LeaveRequestType[];
} {
  return data.reduce((acc, request) => {
    const typeOfLeave = request.Type_of_Leave;
    acc[typeOfLeave] = acc[typeOfLeave] || [];
    acc[typeOfLeave].push(request);
    return acc;
  }, {});
}
