const express = require('express');

const db = require('../dbConfig.js');

const router = express.Router();

router.get("/", (req, res) => {
    db.select('*')
        .from('accounts')
        .then(names => {
            res.status(200).json({ data: names})
        })
        .catch(err => {
            console.log(err);

            res.status(500).json({ error: err.message });
        });
});