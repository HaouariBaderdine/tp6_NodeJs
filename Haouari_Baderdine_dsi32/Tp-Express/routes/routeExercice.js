const express = require("express");
const router = express.Router();

router.put("/monnaies/:nom/pays",(req,res)=>{

    nom = req.params.nom;
    countries = req.query.countries;

    return res.json({

        params: {
            name: nom
        },
        query: {
            countries: countries    
        }

    });
});

module.exports = router;