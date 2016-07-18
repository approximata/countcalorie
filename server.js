'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'start',
  database: 'dbcalorie',
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('client'))



// app.get('/', function(req, res){
//   res.json();
// });

var meals =(function() {
  var addMeal = function() {
    app.post('/meals', function(req, res){
      con.query('INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
      ' VALUES ('+ "'" + req.body.name + "'" + ', ' + "'" + req.body.calories + "'" + ', ' + "'" + req.body.date + "'" + ');', function(err, result){
        if(err){
          console.log(err.toString());
          return;
        }
        console.log({ result, name: req.body.name, calorie: req.body.calories, date: req.body.date});
        res.json({"status": "ok"});
      });
    });
  };
  return {
    addMealPublic: function(){
      addMeal();
    }
  }
})();

meals.addMealPublic();

//
// app.post('/meals', function(req, res){
//   con.query('INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
//   ' VALUES ('+ "'" + req.body.name + "'" + ', ' + "'" + req.body.calories + "'" + ', ' + "'" + req.body.date + "'" + ');', function(err, result){
//     if(err){
//       console.log(err.toString());
//       return;
//     }
//     console.log({ result, name: req.body.name, calorie: req.body.calories, date: req.body.date});
//     res.json({"status": "ok"});
//   });
// });

app.listen(3000);
