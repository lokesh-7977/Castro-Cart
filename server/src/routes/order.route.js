import { Router } from "express";
import {  generateRazorPayOrderId , generateOrder , getOrders , getOrderAdmin , updateOrderStatus, updateOrderStatusAdmin , deleteOrder } from "../controllers/order.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware.js";
import AuthRoles from "../utils/authRoles.js";



const router = Router()

router.post("/", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.USER), generateOrder)
router.put("/:id", isLoggedIn, authorize(AuthRoles.ADMIN), updateOrderStatusAdmin)
router.put("/:id", isLoggedIn, authorize(AuthRoles.ADMIN,AuthRoles.USER), updateOrderStatus)
router.delete("/:id", isLoggedIn, authorize(AuthRoles.ADMIN,AuthRoles.USER), deleteOrder)
router.get("/", isLoggedIn, authorize(AuthRoles.ADMIN,AuthRoles.USER), getOrders)
router.get("/:id", isLoggedIn, authorize(AuthRoles.ADMIN), getOrderAdmin)
router.post("/razorpay", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.USER), generateRazorPayOrderId)




export default router;