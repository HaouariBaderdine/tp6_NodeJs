const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRoutes = require("./routes/index");

app.use(bodyParser.json());
app.use("/users",userRoutes);

app.get("/", (req, res) => {
    return res.json("Start with /users");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});