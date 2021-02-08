const express = require('express');
const router = express.Router();
const tournaments = require('../database');


// Get all
router.get('/', (req, res) => {
    res.json(tournaments)
});

// Create one
router.post('/', (req, res) => {
    const data = req.body
    tournaments.push(data)
    res.json(data)
});

// Get one by ID
router.get('/:id', (req, res) => {
    const tournamentId = Number(req.params.id)
    const getId = tournaments.find((tournament) => tournament.id === tournamentId)
    if (!getId) {
        res.status(500).send('tournament not found !!')
    } else {
        res.json(getId)
    }
});

module.exports = router