import express from "express";
import products from "../data/product.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {products});
});

export default router;
