
import { Router } from "express";
import { createCoupan, deleleCoupan, getCoupans, updateCoupan } from "../controllers/coupan.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware.js";
import AuthRoles from "../utils/authRoles.js";



const router = Router()

router.post("/", isLoggedIn, authorize(AuthRoles.ADMIN), createCoupan)

router.delete("/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR),deleleCoupan)

router.put("/action/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), updateCoupan)

router.get("/", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), getCoupans)

export default router;
