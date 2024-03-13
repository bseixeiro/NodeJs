import Express from "express";
import shopRouteur from "./routes/shop.js"
import authRouteur from "./routes/auth.js"

const app = Express();

//Configuration du system de templating
app.set("view engine", "ejs");
app.set("views", "views")

//Configuration de récupération de contenu static
app.use(Express.static("public"));

//routing
app.get("/", (req, res) => {
    res.render("home")
})

app.use("/shop", shopRouteur);
app.use("/auth", authRouteur);

//Lancement du server sur http://localhost:3000
app.listen(3000, () => {
    console.log("Server is running on port 3000 : http://localhost:3000");
  });