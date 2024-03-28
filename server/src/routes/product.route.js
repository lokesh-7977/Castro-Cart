
import { Router } from "express";
import { getAllProducts,addProduct,getProductById,updateProduct,productByCollectionId,deleteProduct  } from "../controllers/product.controller.js";
import {  isLoggedIn, authorize } from "../middlewares/auth.middleware.js";
import AuthRoles from "../utils/authRoles.js";



const router = Router()

router.post("/", isLoggedIn, authorize(AuthRoles.ADMIN), addProduct)
router.delete("/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), deleteProduct)
router.put("/action/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), updateProduct)
router.get("/", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), getAllProducts)
router.get("/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), getProductById)
router.get("/collection/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERATOR), productByCollectionId)


export default router;
