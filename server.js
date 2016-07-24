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
    console.log(result, 'from server.js meals');
    res.json(result);
  };
  if (req.query.date) {
    myMeal.getFiltered(req, callback);
    return;
  }
  myMeal.listMeals(callback);
});

app.post('/meals', function(req, res){
  var meal = {
    name: req.body.name,
    calorie: req.body.calorie,
    date: req.body.date
  };
  var callback = function (result){
    console.log(result);
    meal.id = result.insertId;
    res.json({ "status": "ok", "meal": meal });
  };
  myMeal.addMeal(meal, callback);
});

app.delete('/meals/:id', function(req, res){
  var id = Number(req.params.id);
  var callback = function (result){
    console.log(result, 'end point delete');
    if(result.affectedRows === 0){
      console.log(result);
      res.json({ "status": "not exists" });
    }
    res.json({ "status": "ok",
    "meal": {
    "id": Number(req.params.id),
    }
    });
  };
  myMeal.deleteMeal(id, callback);
});

//   con.query('UPDATE `todotask` SET `destroyed`=' + "'" + 1 + "'" + ' WHERE `id`='+ "'" + Number(req.params.id) + "'" +' ;', function(err, result){
//     if (err) {
//       console.log(err.toString());
//     }
//     console.log(Number(req.params.id + result));
//     res.json(result);
//     Number(req.params.id)
//   });
// });
//
// app.delete('/meals/:id', function(req, res){
//
//   var newtodo = todolist.filter(function (e){
//       return e.id !== +req.params.id
//   });
//
//   var filtered = todolist.filter(function (e){
//       if(e.id === +req.params.id){
//         e.destroyed = true;
//         todolist = newtodo;
//         return e;
//       }
//   })[0];
//   // res.json(filtered);
//   errorHandling(res, filtered);
// });
//
// function errorHandling(res, item) {
//  if (item === undefined) {
//    res.sendStatus(404);
//  } else {
//    res.json(item);
//  }
// }

app.listen(3000);
