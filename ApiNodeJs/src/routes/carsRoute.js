import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.json(mockCars)
})

router.get("/:carsId", (req, res) => {
    const carsId = parseInt(req.params.carsId, 10   )
    console.log(carsId);
    if (isNaN(carsId)) res.status(400).json({message: "Invalid Id"}) 

    const car = mockCars.find(car => carsId === car.id)
    if (car)
        res.json(car)
    else
        res.status(404).json({message: "Car not found"})
})


const mockCars = [
    { id: 1, brand: "Audi", model: "A3" },
    { id: 2, brand: "Renault", model: "Clio" },
    { id: 3, brand: "Peugeot", model: "208" },
    { id: 4, brand: "BMW", model: "Serie 1" },
    { id: 5, brand: "Mercedes", model: "Classe A" },
    { id: 6, brand: "Citroen", model: "C3" },
    { id: 7, brand: "Ford", model: "Fiesta" },
    { id: 8, brand: "Opel", model: "Corsa" },
    { id: 9, brand: "Toyota", model: "Yaris" },
    { id: 10, brand: "Volkswagen", model: "Polo" },
  ];

  export default router;