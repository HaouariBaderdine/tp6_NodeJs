const express = require("express");
const app = express();

//partie2
app.get("/etudiant/:firstName", function(request, response) {
    return response.send(`Le nom de l’étudiant est is ${request.params.firstName}`
    );
});

app.listen(3000, function() {
    console.log(
    "The server is running on port 3000!"
    );
});
   