import LogActivity from "../models/LogActivity.js";
import { v4 as uuidv4 } from "uuid";

export async function logActivity({ req, type = "INFO", userId = null, userType = null, response = null }) {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const apiName = req.url;
    const postData = req.method === "POST" ? JSON.stringify(req.body) : null;

    await LogActivity.create({
      log_uid: uuidv4(),
      log_ipaddress: ip,
      log_userid: userId,
      log_usertype: userType,
      log_type: type,
      log_apiname: apiName,
      log_postdata: postData,
      log_response: response ? JSON.stringify(response) : null
    });
  } catch (err) {
    console.error("Failed to log activity:", err);
  }
}
