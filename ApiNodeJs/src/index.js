import "dotenv/config";
import express from "express";
import carsRoutes from "./routes/cars.js";
import mongoose from "mongoose";

const app = express();

console.log("env: ", process.env.MONGO_STRING);

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

// Middlewares
// Middleware qui permet de parser les donnees issues d'un formulaire
app.use(express.json());

app.use("/cars", carsRoutes);

mongoose.connect(MONGO_STRING).then(() => {
  console.log("Connected to the database!");

  // On lance le serveur
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
