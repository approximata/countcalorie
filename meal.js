'use strict';

var meal = function(con){

  var listMeals = null;
  var deleteMeal = null;

  // function dbQueries(inputType, values, callback) {
  //   con.query(inputType, [values], function(err, result){
  //     if (err) {
  //       console.log(err.toString());
  //       return;
  //     }
  //     callback(result);
  //   });
  // }
  //
  // function addMealPrivate(meal, cb) {
  //   var sqlInsert = 'INSERT INTO `tablecalorie` SET ?';
  //   var values = { name: meal.name, calorie: meal.calories, date: meal.date };
  //   dbQueries(sqlInsert, values, function(result){
  //     cb(result);
  //   });
  // }

  function dbQueries(inputType, values, callback) {
    con.query(inputType, values, function(err, result){
      if (err) {
        console.log(err.toString());
        return;
      }
      callback(result);
    });
  }

  function addMealPrivate(food, cb) {
    var sqlInsert = 'INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
    ' VALUES (?, ?, ?);';
    var values = [food.name, food.calories, food.date];
    dbQueries(sqlInsert, values, function(result) {
      cb(result);
    });
  }

  // function addMealPrivate (meal, callback) {
  //    con.query('INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
  //    ' VALUES (?, ?, ?);', [meal.name, meal.calories, meal.date], function(err, result){
  //      if(err){
  //        console.log(err.toString());
  //        return;
  //      }
  //      callback(result);
  //    });
  //  };

  return {
    listMeals: listMeals,
    addMeal: addMealPrivate,
    deleteMeal: deleteMeal
  };
};

module.exports = meal;
