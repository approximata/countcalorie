'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var meal = require('./meal');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('client'))

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'start',
  database: 'dbcalorie',
});

var myMeal = meal(con);

app.post('/meals', function(req, res){
  var meal = {
    name: req.body.name,
    calories: req.body.calories,
    date: req.body.date
  }
  var callback = function (result){
    console.log(result);
    res.json({"status": "ok"});
  }
  myMeal.addMeal(meal, callback);
});


// var dbQueries =(function() {
//   var insertToDb = function(text, callback){
//     con.query('INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
//     ' VALUES (?,?,?);', text, function(err, result){
//       if (err) {
//         console.log(err.toString());
//         return;
//       }
//       callback(result.toString());
//     });
//   };
//   return {
//     insertToDbPublic: function(){
//       insertToDb();
//     },
//   };
// })();
//
// var meals =(function() {
//   var addMeal = function() {
//     app.post('/meals', function(req, res){
//       con.query('INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
//       ' VALUES ('+ "'" + req.body.name + "'" + ', ' + "'" + req.body.calories + "'" + ', ' + "'" + req.body.date + "'" + ');', function(err, result){
//         if(err){
//           console.log(err.toString());
//           return;
//         }
//         console.log({ result, name: req.body.name, calorie: req.body.calories, date: req.body.date});
//         res.json({"status": "ok"});
//       });
//     });
//   };
//   return {
//     addMealPublic: function(){
//       addMeal();
//     },
//   };
// })();
//

app.listen(3000);
