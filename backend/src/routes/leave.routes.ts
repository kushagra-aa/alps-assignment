import { Router } from "express";
import {
  refreshLeaveApplications,
  getLeaveApplications,
  addNewLeaveApplication,
  editLeaveApplication,
  removeLeaveApplication,
} from "../controllers/leave.controller.js";
import zohoAuthMiddleware from "../middleware/zohoAuth.middleware.js";

const router = Router();

router.route("/refresh").get(zohoAuthMiddleware, refreshLeaveApplications);
router
  .route("/")
  .get(getLeaveApplications)
  .post(zohoAuthMiddleware, addNewLeaveApplication)
  .patch(zohoAuthMiddleware, editLeaveApplication)
  .delete(zohoAuthMiddleware, removeLeaveApplication);

export default router;
