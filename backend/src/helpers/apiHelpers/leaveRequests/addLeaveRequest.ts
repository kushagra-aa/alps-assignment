import API from "../../../lib/api.js";
import { LeaveRequestType } from "../../../types/LeaveRequest.js";
import { OmitAType } from "../../../types/utilityTypes.js";

export type AddRequestBodyType = OmitAType<LeaveRequestType, "ID">;

type AddResponseType = {
  data: {
    ID: string;
  };
};

export default async function addLeaveRequests(
  token: string,
  body: AddRequestBodyType
) {
  try {
    let headersList = {
      accept: "application/json",
      Authorization: `Zoho-oauthtoken ${token}`,
    };

    let reqOptions = {
      url: `${process.env.ZOHO_CREATOR_BASE_URL}${process.env.ZOHO_ACCOUNT_OWNER_NAME}/${process.env.ZOHO_APP_LINK_NAME}/form/${process.env.ZOHO_FORM_LINK_NAME}`,
      headers: headersList,
    };

    const data = await API.post(
      reqOptions.url,
      { data: body },
      reqOptions.headers
    );

    if (data.status === 200) {
      return (data.data as AddResponseType).data;
    } else {
      throw new Error(`Records API Error: ${data.statusText}`);
    }
  } catch (e) {
    console.log("Something Went Wrong :>> ", e);
  }
}
