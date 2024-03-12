import Express from "express";
import shopRouter from "./routes/shop.js";

const app = Express();

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");

app.set("views", "views");

const middlware1 = (req, res, next) => {
  console.log(
    "Je suis un middleware qui s'execute a chaque requete envoyee au serveur"
  );
  req.toto = "toto";

  next();
};
const middlware2 = (req, res, next) => {
  console.log(
    "Je suis un autre middleware qui s'execute a chaque requete envoyee au serveur"
  );
  req.toto = "toto3";

  next();
};

app.use(middlware1, middlware2);

app.use("/", (req, res, next) => {
  console.log(req.toto);
  next();
});

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
