import { LeaveRequestType } from "../../types/LeaveRequest.js";

export default function clusterByInsuranceType(data: LeaveRequestType[]): {
  [key: string]: LeaveRequestType[];
} {
  return data.reduce((acc, request) => {
    const insuranceType = request.Insurance_Type;
    acc[insuranceType] = acc[insuranceType] || [];
    acc[insuranceType].push(request);
    return acc;
  }, {});
}
