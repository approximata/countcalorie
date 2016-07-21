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

app.get('/meals', function(req, res){
  var callback = function (result) {
    console.log(result, 'from server.js');
    res.json(result);
  };
  myMeal.listMeals(callback);
});

//  con.query('SELECT * FROM tablecalorie', function(err, result){
//    if(err){
//      console.log(err.toString());
//    }
//    console.log(result);
//    res.json(result);
//  })
// });

app.post('/meals', function(req, res){
  var meal = {
    name: req.body.name,
    calories: req.body.calories,
    date: req.body.date
  };
  var callback = function (result){
    console.log(result);
    res.json({ "status": "ok" });
  };
  myMeal.addMeal(meal, callback);
});

app.listen(3000);
