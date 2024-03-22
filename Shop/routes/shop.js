import express from "express";
import ShopController from "../controllers/shop.js";
import { jsonParser, urlParser } from "../utils/bodyParser.js";

const router = express.Router();

router.get("/", ShopController.getIndex);
router.get("/addProduct", ShopController.getAddProduct);
router.get("/cart", ShopController.getCart);

router.post("/addProduct", urlParser, ShopController.postNewProduct);
router.post("/cart", urlParser, ShopController.putProductInCart)

export default router;
