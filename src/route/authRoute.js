import { Router } from "express";

/** IMPORT: MIDDLEWARE */
import verifyToken from "../middleware/verifyToken.js";

/** IMPORT: CONTROLLER */
import { login, dashboard } from "../controller/authController.js";

const router = Router();

router.route("/login").post(login);
router.route("/dashboard").get(verifyToken, dashboard);

export default router;
