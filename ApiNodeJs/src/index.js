import express from "express";
import carsRouter from "./routes/carsRoute.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use("/cars", carsRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})