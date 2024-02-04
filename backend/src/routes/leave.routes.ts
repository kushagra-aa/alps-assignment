import { Router } from "express";
import {
  refreshLeaveApplications,
  getLeaveApplications,
  addNewLeaveApplication,
  editLeaveApplication,
  removeLeaveApplication,
} from "../controllers/leave.controller.js";

const router = Router();

router.route("/refresh").get(refreshLeaveApplications);
router
  .route("/")
  .get(getLeaveApplications)
  .post(addNewLeaveApplication)
  .patch(editLeaveApplication)
  .delete(removeLeaveApplication);

export default router;
