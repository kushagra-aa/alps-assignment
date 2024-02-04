import API from "../../../lib/api.js";

type DeleteResponseType = {
  data: {
    ID: string;
  };
};

export default async function deleteLeaveRequests(token: string, id: string) {
  try {
    let headersList = {
      accept: "application/json",
      Authorization: `Zoho-oauthtoken ${token}`,
    };

    let reqOptions = {
      url: `${process.env.ZOHO_CREATOR_BASE_URL}${process.env.ZOHO_ACCOUNT_OWNER_NAME}/${process.env.ZOHO_APP_LINK_NAME}/report/${process.env.ZOHO_RECORD_LINK_NAME}/${id}`,
      headers: headersList,
    };

    const data = await API.del(reqOptions.url, reqOptions.headers);

    return (data.data as DeleteResponseType).data || data.data;
  } catch (e) {
    console.log("Something Went Wrong :>> ", e);
  }
}
