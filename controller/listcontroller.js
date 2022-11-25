const myschema = require('../model/todoschema');

module.exports.todolist = function(req,res){

    // for finding all the data elements in the database and rendering them on viewport
    myschema.find({}, function(err, user){
        if(err){
            console.log("error in printing the data");
            return;
        }

        // for rendering the page
        return res.render('home',{
            dataindb: user
        });
        
    })
    
}


module.exports.addingdata = function(req,res){

    // adding data in the database
    myschema.create(req.body, function(err, list){
        if(err){
            console.log("error in adding data to database");
            return;
        }

        // redirecting the page
        return res.redirect('back');
    })
}



module.exports.delete = function(req,res){
    // deleting the data from the database, suing the button provided for each data
    let id = req.query.id;
    console.log(id);

    myschema.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleting the data");
            return;
        }

    return res.redirect('back');
    })
}




module.exports.deleteinfo = function(req,res){
    // deleting the multiple data at the same time using the main delete button
    let id = req.body;
    console.log(req.body._id);
    for(let i= 0; i< req.body._id.length; i++){
        console.log(req.body._id[i]);
    }
    // for loop for iterating all the id and deleting the data from datbase
    for(let i= 0; i< req.body._id.length; i++){
    myschema.findByIdAndDelete({_id: req.body._id[i]}, function(err){
        if(err){
            console.log("error in deleting the data");
            return;
        }
    });
};
return res.redirect('back');
}
