'use strict';

/* global someFunction xhrhandler: true */

var url = 'http://localhost:3000/meals/';

var foodManeger = (function() {

  function addSendData() {
    return JSON.stringify(
      {
        "name": inputFieldName.value,
        "calorie": inputFieldCalorie.value,
        "date": inputFieldDate.value
      });
  }

  function addFood(cb) {
    var method = 'POST';
    var urlr = url;
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, urlr, addSendData(), type, function(response){
      console.log(response, 'front script.js');
      cb(response.meal)
    });
  }

  function deleteFood(event, id, cb) {
    var method = 'DELETE';
    var urlr = url + id;
    console.log('rm delete invited');
    var type = 'Accept';
    xhrhandler.xhrRequest(method, urlr, '', type, function(response){
      console.log(response, 'front requestmanager.js delete');
      cb(response.meal.id);
    });
  }

  function filterFood(cb) {
    var method = 'GET';
    var filter = inputFilterLabel.value.substring(0,10);
    var urlr = url + '?date=' + filter;
    console.log(filter, urlr);
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, urlr, null, type, function(response){
      console.log(response, 'front script.js');
      cb(response.meal)
    });
  }

  function getToDoList(cb) {
    var method = 'GET';
    var urlr = url;
    console.log(urlr);
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, urlr, '', type, function(response){
      cb(response);
      console.log(response, 'front script.js');
    });
  }

  return {
    addFood: addFood,
    getToDoList: getToDoList,
    deleteFood: deleteFood,
    filterFood: filterFood
  }
})();
