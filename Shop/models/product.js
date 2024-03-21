import products from "../data/product.js";
import db from "../utils/connexion.js";

class Product {

    constructor(name, price, description, image){
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    static async getAllProducts(){
        try{
            const [results] = await db.query("Select * from product");
            console.log("Résultats de la base", results);
            return results;
        }
        catch(err){
            throw err;
        }
    } 
}

export default Product;