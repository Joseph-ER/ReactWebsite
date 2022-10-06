const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.json({msg: "Painting- Factions"});
});

router.get('/deathguard',(req,res)=> {
    res.json({msg: "Death Guard"});
});

router.get('/orcs', (req,res) => {
    res.json({msg: "Orcs"});
});

router.get('/adeptasororitas', (req,res) => {
    res.json({msg: "Adepta Sororitas"});
});

module.exports = router;