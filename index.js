const exp = require('constants');
const express = require('express');
const port = 1414;
const app = express();

const path = require('path');
const mongoose = require('./config/mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// for acessing the static files, for ejs file
app.use(express.static('assets'));
app.use(express.json());
// for decoding the the data recieved from the form
app.use(express.urlencoded());



app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log(`error in connecting to server: ${port}`);
        return;
    }

    console.log(`connected to server: ${port}`);
})