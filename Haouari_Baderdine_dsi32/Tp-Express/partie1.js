const express = require("express");
const app = express();

//Pzrtie1
app.get("/", function(request, response) {
 return response.send("Hello World!");
});

app.listen(3000, function() {
    console.log(
    "The server is running on port 3000!"
    );
});
   