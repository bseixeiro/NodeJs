import Product from "../models/product.js"
import products from "../data/product.js"

class ShopController {
    static getIndex = async (req, res, next) => {
        res.render(
            "shop/index",
            {
                products : await Product.getAllProducts() 
            }
        );
    };

    static postNewProduct = async (req, res, next) => {
        const {name, price, desc, image} = {...req.body}
        const newProduct = new Product(name, price, desc, image)
        newProduct.insertProduct();

        res.redirect("/shop/addProduct")
    };

    static getAddProduct = async (req, res, next) => {
        res.render(
            "shop/addProduct",
            {
            }
        );
    };

    static getCart = async (req, res, next) => {
        res.render(
            "shop/cart",
            {
                products : await Product.getProductsInCart()
            }
        );
    };

    static putProductInCart = (req, res, next) => {
        console.log(req.body)
        const {id, inCart} = {...req.body}
        Product.updateProductInCart(id , inCart)
        res.redirect("/shop")
    }

}

export default ShopController