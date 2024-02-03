import API from "../../../lib/api.js";
import { LeaveRequestType } from "../../../types/LeaveRequest.js";

type ReportsResponseType = {
  data: LeaveRequestType[];
};

export default async function getLeaveRequests(token: string) {
  try {
    let headersList = {
      accept: "application/json",
      Authorization: `Zoho-oauthtoken ${token}`,
    };

    let reqOptions = {
      url: `${process.env.ZOHO_CREATOR_BASE_URL}${process.env.ZOHO_ACCOUNT_OWNER_NAME}/${process.env.ZOHO_APP_LINK_NAME}/report/${process.env.ZOHO_RECORD_LINK_NAME}?field_config=detail_view`,
      headers: headersList,
    };

    const data = await API.get(reqOptions.url, reqOptions.headers);

    if (data.status === 200) {
      return (data.data as ReportsResponseType).data;
    } else {
      throw new Error(`Records API Error: ${data.statusText}`);
    }
  } catch (e) {
    console.log("Something Went Wrong :>> ", e);
  }
}
