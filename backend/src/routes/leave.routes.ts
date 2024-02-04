import { Router } from "express";
import { getLeaveApplications } from "../controllers/leave.controller.js";
import clientAuthMiddleware from "../middleware/clientAuth.middleware.js";

const router = Router();

router.route("/").get(clientAuthMiddleware, getLeaveApplications);

export default router;
