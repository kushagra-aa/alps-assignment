import { Router } from "express";
import { getLeaveApplications } from "../controllers/leave.controller.js";

const router = Router();

router.route("/").get(getLeaveApplications);

export default router;
