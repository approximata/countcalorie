'use strict';

var meal = function(con){

  function dbQueries(inputType, values, callback) {
    con.query(inputType, values, function(err, result) {
      if (err) {
        console.log(err.toString());
        return;
      }
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

  function getFiltered(req, cb) {
    var sqlInsert = 'SELECT * FROM `tablecalorie` WHERE date LIKE ?';
    console.log(req.query);
    var value = req.query.date + '%';
    console.log(value);
    dbQueries(sqlInsert, value, function(result) {
      console.log(result, 'from meal filter be');
      cb(result);
    });
  }

  return {
    listMeals: listMealPrivate,
    addMeal: addMealPrivate,
    deleteMeal: deleteMealPrivate,
    getFiltered: getFiltered
  };
};

module.exports = meal;
