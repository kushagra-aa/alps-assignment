import { LeaveRequestType } from "../../types/LeaveRequest.js";

export default function clusterByInsuranceCompany(data: LeaveRequestType[]): {
  [key: string]: LeaveRequestType[];
} {
  return data.reduce((acc, request) => {
    const insuranceCompany = request.Insurance_Company;
    acc[insuranceCompany] = acc[insuranceCompany] || [];
    acc[insuranceCompany].push(request);
    return acc;
  }, {});
}
