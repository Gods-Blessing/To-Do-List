const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tododatabase');

const db = mongoose.connection;

db.on('error', ()=>{
    console.log("unable to connect to database");
})

db.once('open', ()=>{
    console.log("connected to server");
})