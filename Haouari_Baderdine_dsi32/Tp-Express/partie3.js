const express = require("express");
const app = express();

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

app.listen(3000, function() {
    console.log(
    "The server is running on port 3000!"
    );
   });