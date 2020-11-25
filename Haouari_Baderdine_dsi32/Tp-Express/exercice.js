const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const exerciceRoute = require("./routes/routeExercice");

app.use(bodyParser.json());
app.use(exerciceRoute);

app.get("/",(req,res) =>{
    return res.json({message:"Start with /monnaies/yen/pays?countries=japan"});
});

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});