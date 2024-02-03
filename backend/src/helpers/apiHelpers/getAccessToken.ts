import API from "../../lib/api.js";

type AccessTokenResponseType = {
  access_token: string;
};

export default async function getAccessToken() {
  try {
    let reqOptions = {
      url: `${process.env.ZOHO_ACCOUNTS_BASE_URL}token?refresh_token=${process.env.ZOHO_CLIENT_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
    };

    const data = await API.post(reqOptions.url, {}, {});
    if (data.status === 200) {
      return (data.data as AccessTokenResponseType).access_token;
    } else {
      throw new Error(`Access Token API Error: ${data.statusText}`);
    }
  } catch (e) {
    console.log("Something Went Wrong :>> ", e);
  }
}
