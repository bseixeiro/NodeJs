import Express from "express";

const app = Express();

app.get("/", (req, res) => {
    res.render('index', req.query);
});

app.post("/message", (req, res) => {
    if(!req.body){
        return res.status(400).send("Request body is missing");
    }
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Serveur is running on port 3000 : http://localhost:3000")
})