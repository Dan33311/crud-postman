//  --  JavaScript Mastery  --
//  Build a REST API with Node JS and Express | CRUD API Tutorial
//  Start in 0:00:00 / 1:01:15


const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


let users = [{
    firstName: 'Daigo',
    lastName: 'Umehara',
    character: 'Guile',
    age: 41
}]


router.get('/', (req, res) => {
    res.send(users)
})


// Basic post work, but check the video to understand uuid
router.post('/', (req, res) => {
    const user = req.body;
    // // 29:15 uuid
    // // ??  ECMAScript Module syntax  vs  CommonJS syntax  ??
    //const userId = uuidv4()
    //const userWithId = {...user, id: uuidv4() }
    users.push({...user, id: uuidv4() });
    res.send(`user --  ${user.firstName} -- added successfully !!`);
})


router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundUser = users.find(user => user.id === id)
    res.send(foundUser)
})


router.delete('/:id', (req, res) => {
    const { id } = req.params

    users = users.filter(user => user.id != id)
    res.send(`user -- ${id} -- deleted !!`)
})


router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { firstName, lastName, character, age } = req.body;

    //const userToByUpdated = users.find(user => user.id === id);
    const user = users.find(user => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (character) user.character = character;
    if (age) {
        user.age = age;
    }
    res.send(`User with the ID: -- ${id} -- has been updated !!`)
})


module.exports = router