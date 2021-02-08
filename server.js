const express = require('express');
const routes = require('./routes/router')

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use('/', routes);


app.listen(3009, () => {
    console.log('listen on port 3009');
});