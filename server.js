const express = require('express');
const exampleOne = require('./routes/example-1');
const exampleTwo = require('./routes/example-2');

const app = express();

//app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', exampleOne);
app.use('/users', exampleTwo);


app.listen(3009, () => {
    console.log('listen on port 3009');
});