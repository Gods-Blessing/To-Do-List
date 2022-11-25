const express = require('express');

const router = express.Router();

const controller = require('../controller/listcontroller');

//for rendering the home page 
router.get('/', controller.todolist);


// for adding data in databse
router.post('/create-data', controller.addingdata);


// for deleting the data using individual buttons prodided for deletion
router.get('/delete', controller.delete);


// for deleting data from the main DELETE BUTTON
router.post('/delete-data', controller.deleteinfo);



module.exports = router;