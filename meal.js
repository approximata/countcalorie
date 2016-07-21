'use strict';

var meal = function(con){

  var listMeals = null;
  var deleteMeal = null;


  function dbQueries(inputType, values, callback) {
    con.query(inputType, values, function(err, result) {
      if (err) {
        console.log(err.toString());
        return;
      }
      console.log(result, 'from meal.js');
      callback(result);
    });
  }

  function listMealPrivate(cb) {
    var sqlInsert = 'SELECT * FROM tablecalorie';
    dbQueries(sqlInsert, '', function(result) {
      cb(result);
    });
  }

  function addMealPrivate(food, cb) {
    var sqlInsert = 'INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
    ' VALUES (?, ?, ?);';
    var values = [food.name, food.calorie, food.date];
    dbQueries(sqlInsert, values, function(result) {
      cb(result);
    });
  }

  function deleteMealPrivate(id, cb) {
    var sqlInsert = 'DELETE FROM `tablecalorie` WHERE `id`=?';
    var value = id.toString()
    console.log('deleteMeal has invited with', id);
    dbQueries(sqlInsert, value, function(result) {
      cb(result);
    });
  }

  return {
    listMeals: listMealPrivate,
    addMeal: addMealPrivate,
    deleteMeal: deleteMealPrivate
  };
};

module.exports = meal;
