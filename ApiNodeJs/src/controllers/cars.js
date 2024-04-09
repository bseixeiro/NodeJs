import cars from "../models/cars.js"

export const getAllCars = (req, res) => {
    res.json(cars);
};

export const getCar =  (req, res) => {
    const id = parseInt(req.params.id, 10   )
    if (isNaN(id)) res.status(400).json({message: "Invalid Id"}) 

    const car = cars.find(car => id === car.id)
    if (car)
        res.json(car)
    else
        res.status(404).json({message: "Car not found"})
};

export const postCar = (req, res) => {
    const bodyContent = req.body;
    const lastId = cars.findLast(car => car.id > -1).id
    const id = lastId + 1;
    const newCar = { id, ...bodyContent};

    cars.push(newCar);
    res.status(201).json(newCar)
}

export const updateCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) res.status(400).json({message: "Invalid Id"});

    const bodyContent = req.body;
    
    const car = cars.find((car) => car.id === id);
    if (car) {
      const updatedCar = { ...car, ...bodyContent };
      cars[cars.indexOf(car)] = updatedCar;
      res.json(updatedCar);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
  }

export const deleteCar = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) res.status(400).json({message: "Invalid Id"});

    const car = cars.find((car) => car.id === id);
    if (car) {
        cars = cars.filter((car) => car.id !== id);
        response.status(204).end();
    } else {
        res.status(404).json({ message: "Car not found" });
    }
}