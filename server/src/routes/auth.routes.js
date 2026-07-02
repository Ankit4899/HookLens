import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";


const authRouter = Router();



/**
 * POST /api/auth/register
 */
authRouter.post("/register", authController.register)


/**
 * POST /api/auth/login
 */
authRouter.post("/login", authController.login)



/**
 * GET /api/auth/get-me
 */
authRouter.get("/get-me", authMiddleware,authController.getMe)

/**
 * GET /api/auth/refresh-token
 */
authRouter.get("/refresh-token", authController.refreshToken)


/**
 * POST /api/auth/logout
 */
authRouter.post("/logout", authController.logout)


/**
 * post /api/auth/logout-all
 */
authRouter.post("/logout-all", authController.logoutAll)



export default authRouter;