var express = require('express');
var router = express.Router();

//call User database model
var userModel = require('../schema/user_table');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/insertData', function(req, res, next) {
  res.render('insertData', { title: 'Operation' });
});

router.get('/operation', function(req, res, next) {
  
  userModel.find(function(err,db_users_array){
    if(err){
      console.log("Error in fetching datas : " + err);
    }
    else{
      //displaying data on console
      console.log(db_users_array);
      res.render('operation', { title: 'Operation', users_data: db_users_array });
    }
  })

});

router.post('/insertData', function(req, res, next) {
  console.log(req.body);

  //creating an array
  const myData = {
    username : req.body.name,
    mobileno : req.body.mobileno
  }

  var data = userModel(myData);

  data.save(function(err){
    if(err) {
      console.log("Error in insert record");
      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    } 
    else {
      console.log("record inserted successfully");

      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    }
  })


});
//single record fetching
router.get('/updateData', function(req, res, next) {
  
  console.log(req.query.rid);
  userModel.findById(req.query.rid,function(err,db_users_array){
    if(err){
      console.log("Error in Single record fetch : " + err);
      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    }
    else{
      //displaying data on console
      console.log(db_users_array);
      res.render('updateData', { title: 'Operation', users_data: db_users_array });
    }
  })

});

//Update code
router.post('/updateData', function(req, res, next) {
  console.log(req.body);

  //creating an array
  const myData = {
    username : req.body.name,
    mobileno : req.body.mobileno
  }

  userModel.findByIdAndUpdate(req.body.id,myData,function(err){
    if(err){
      console.log("Error in Updating record : " +err)
      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
          userModel.find(function(err,db_users_array){
            if(err){
              console.log("Error in fetching datas : " + err);
            }
            else{
              //displaying data on console
              console.log(db_users_array);
              res.render('operation', { title: 'Operation', users_data: db_users_array });
            }
          })
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    }
    else{
      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
          userModel.find(function(err,db_users_array){
            if(err){
              console.log("Error in fetching datas : " + err);
            }
            else{
              //displaying data on console
              console.log(db_users_array);
              res.render('operation', { title: 'Operation', users_data: db_users_array });
            }
          })
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    }
  });
  


});

router.get('/delete/rid', function(req, res, next) {
  console.log(req.query.rid);
  userModel.findOneAndDelete(req.query.rid,function(err,abc){
    if(err){
      console.log("Error in Delete record : " + err);
      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    }
    else{
      //displaying data on console
      console.log("record deleted");
      userModel.find(function(err,db_users_array){
        if(err){
          console.log("Error in fetching datas : " + err);
        }
        else{
          //displaying data on console
          console.log(db_users_array);
          res.render('operation', { title: 'Operation', users_data: db_users_array });
        }
      })
    }
  })
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});




module.exports = router;
