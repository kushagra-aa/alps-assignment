import API from "../../../lib/api.js";
import { LeaveRequestType } from "../../../types/LeaveRequest.js";
import { MakePartial } from "../../../types/utilityTypes.js";

export type EditRequestBodyType = MakePartial<LeaveRequestType>;

type EditResponseType = {
  data: {
    ID: string;
  };
};

export default async function editLeaveRequests(
  token: string,
  id: string,
  body: EditRequestBodyType
) {
  try {
    let headersList = {
      accept: "application/json",
      Authorization: `Zoho-oauthtoken ${token}`,
    };

    let reqOptions = {
      url: `${process.env.ZOHO_CREATOR_BASE_URL}${process.env.ZOHO_ACCOUNT_OWNER_NAME}/${process.env.ZOHO_APP_LINK_NAME}/report/${process.env.ZOHO_RECORD_LINK_NAME}/${id}`,
      headers: headersList,
    };

    const data = await API.patch(
      reqOptions.url,
      { data: body },
      reqOptions.headers
    );

    if (data.status === 200) {
      return (data.data as EditResponseType).data;
    } else {
      throw new Error(`Records API Error: ${data.statusText}`);
    }
  } catch (e) {
    console.log("Something Went Wrong :>> ", e);
  }
}
