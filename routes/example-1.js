//  --  Daily Tuition  --
//  Complete Node & Express with 5 projects - Full Course [2021]
//  Start in 5:32:32 / 8:53:02


const express = require('express');
const router = express.Router();
var tournaments = require('../database');


// Get all
router.get('/', (req, res) => {
    res.json(tournaments)
});


// Get one by ID
router.get('/:id', (req, res) => {
    const tournamentId = Number(req.params.id)
    const tournament = tournaments.find((tournament) => tournament.id === tournamentId)
    if (!tournament) {
        res.status(500).send('tournament notoooo found !!')
    } else {
        res.json(tournament)
    }
});


// Create one
router.post('/', (req, res) => {
    const data = req.body
    tournaments.push(data)
    res.json(data)
});


// Update one by ID
router.put('/:id', (req, res) => {
    const tournamentId = Number(req.params.id)
    const body = req.body
    const tournament = tournaments.find((tournament) => tournament.id === tournamentId)
    const index = tournaments.indexOf(tournament)

    if (!tournament) {
        res.status(500).send('tournament not found !!')
    } else {
        const updatedTournament = {...tournament, ...body }
            //console.log({...tournament, ...body });
        tournaments[index] = updatedTournament
        res.send(updatedTournament)
    }
})


//  --  No maneja el error  -- ??
// Delete One by ID
router.delete('/:id', (req, res) => {
    const tournamentId = Number(req.params.id)
    const newTournaments = tournaments.filter((tournament) => tournament.id != tournamentId)

    if (!newTournaments) {
        res.status(500).send('Tournament not found !!')
    } else {
        tournaments = newTournaments // change tournaments "const" by "var" 
        res.send(tournaments)
    }
})


module.exports = router