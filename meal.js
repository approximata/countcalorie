
var meal = function(con){

  var listMeals = null;
  var deleteMeal = null;

  //
  // function addMealPrivate(meal, callback) {
  //   var input = [meal.name, meal.calories, meal.date]
  //   con.query('INSERT INTO `tablecalorie` (`name`, `calorie`, `date`)' +
  //   ' VALUES ('+ "'" + meal.name + "'" + ', ' + "'" + meal.calories + "'" + ', ' + "'" + meal.date + "'" + ');', function(err, result){
  //     if(err){
  //       console.log(err.toString());
  //       return;
  //     }
  //     callback(result);
  //   });
  // }


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


  //
  // function addMealPrivate(meal, callback) {
  //   var sqlInsert = 'INSERT INTO `tablecalorie` SET ?';
  //   var values = { name: meal.name, calorie: meal.calories, date: meal.date };
  //   con.query(sqlInsert, [values], function(err, result){
  //     if (err) {
  //       console.log(err.toString());
  //       return;
  //     }
  //     callback(result);
  //   });
  // }

  return {
    listMeals: listMeals,
    addMeal: addMealPrivate,
    deleteMeal: deleteMeal
  };
};

module.exports = meal;
