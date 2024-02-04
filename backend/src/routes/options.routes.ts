import { Router } from "express";
import { getOptions } from "../controllers/options.controllers.js";

const router = Router();

router.route("/").get(getOptions);

export default router;
