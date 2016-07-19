'use strict';

var meal = function(con){

  var listMeals = null;
  var deleteMeal = null;

  function dbQueries(inputType, values, callback) {
    con.query(inputType, [values], function(err, result){
      if (err) {
        console.log(err.toString());
        return;
      }
      callback(result);
    });
  }

  function addMealPrivate(meal, cb) {
    var sqlInsert = 'INSERT INTO `tablecalorie` SET ?';
    var values = { name: meal.name, calorie: meal.calories, date: meal.date };
    dbQueries(sqlInsert, values, function(result){
      cb(result);
    });
  }

  return {
    listMeals: listMeals,
    addMeal: addMealPrivate,
    deleteMeal: deleteMeal
  };
};

module.exports = meal;
