import Product from "../models/product.js"

class ShopController {
    static getIndex = async (req, res, next) => {
        res.render(
            "shop/index",
            {
                products : await Product.getAllProducts()
            }
        );
    };

    static getAddProduct = async (req, res, next) => {
        console.log("ouiiiiiiiiiiiiiiiii")
        res.render(
            "shop/addProduct",
            {
                products : await Product.getAllProducts()
            }
        );
    };

    static getCart = async (req, res, next) => {
        res.render(
            "shop/cart",
            {
                products : await Product.getAllProducts()
            }
        );
    };
}

export default ShopController