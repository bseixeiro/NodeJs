import products from "../data/product.js";
import db from "../utils/connexion.js";

class Product {

    constructor(name, price, description, image, inCart = false){
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.inCart = inCart
    }

    static async getAllProducts(){
        try{
            const [results] = await db.query("Select * from product");
            return results;
        }
        catch(err){
            throw err;
        }
    }
    
    static async getProductsInCart(){
        try{
            const [results] = await db.query("Select * from product where inCart = 1");
            return results;
        }
        catch(err){
            throw err;
        }
    }

    insertProduct (){
        db.query("insert into Product (name, price, description, image, inCart) values (?, ?, ?, ?, ?)", 
        [this.name, this.price, this.description, this.image, this.inCart]);
    }

    static updateProductInCart(id, inCart){
        let bin;
        if (inCart === "true"){
            bin = 1
        }
        else
            bin = 0
        console.log(bin)
        db.query("update Product set inCart = ? where id = ?", [bin, id]).catch(err => console.log(err))
    }
}

export default Product;