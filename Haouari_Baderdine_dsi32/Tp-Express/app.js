const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRoutes = require('./routes.js');

app.use(bodyParser.json()); // pour application/json
app.use(bodyParser.urlencoded({ extended: true })); 

//Pzrtie1
app.get("/", function(request, response) {
 return response.send("Hello World!");
});

//partie2
app.get("/etudiant/:firstName", function(request, response) {
    return response.send(`Le nom de l’étudiant est is ${request.params.firstName}`
    );
});

//partie3
app.get("/", (req, res) => {
    res.json({ message: "cà marche! " });
});

//Partie 3 A faire:
app.get("/etudiants", (req, res) => {
    res.status = 200
    res.json({ message: "name: Asma " });
});
app.get("/enseignant", (req, res) => {
    res.status = 200
    res.json({ message: "name: Karim " });
});
app.get("/secrets", (req, res) => {
    res.status = 401
    res.json({ message: "accés non autorisé" });
});

//Partie4:
app.get("/", (req, res) => {
    return res.json("Start with /users");
});

   

app.listen(3000, function() {
 console.log(
 "The server is running on port 3000!"
 );
});
