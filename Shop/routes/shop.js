import express from "express";
import ShopController from "../controllers/shop.js";

const router = express.Router();

router.get("/", ShopController.getIndex);
router.get("/addProduct", ShopController.getAddProduct);
router.get("/cart", ShopController.getCart);

export default router;
