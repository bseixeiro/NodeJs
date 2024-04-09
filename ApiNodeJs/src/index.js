import "dotenv/config"
import express from "express";
import carsRouter from "./routes/cars.js";

const app = express();

console.log(process.env.MONGO_STRING)

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/cars", carsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})