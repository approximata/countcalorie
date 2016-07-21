'use strict';

/* global someFunction xhrhandler: true */

var url = 'http://localhost:3000/meals/';

var foodManeger = (function() {

// function deleteTask(event) {
//   var xhr = new XMLHttpRequest();
//   var targetId = event.target.id;
//   console.log(targetId);
//   var serverId = targetId.slice(1);
//   console.log(serverId);
//   xhr.open('DELETE', url + serverId, true);
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.onload = function() {
//     if (xhr.readyState === 4) {
//       todolist.removeChild(document.querySelector('#task' + serverId));
//     }
//   }
//   xhr.send(null);
// }

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

  // function addFood(callback) {
  //   var method = 'POST';
  //   var urlr = url;
  //   var type = 'Content-Type';
  //   xhrhandler.xhrRequest(method, urlr, addSendData(), type, function(response){
  //     callback(response.meal);
  //   }
  //   );
  // }

  // function drawTasks(inputdata) {
  //   inputdata.forEach(function (element) {
  //     if ((element.name).length > 0) {
  //       console.log(element);
  //       domBuild.addHtml(element);
  //     }
  //   });
  // }

  function getToDoList(cb) {
    var method = 'GET';
    var urlr = url;
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, urlr, '', type, function(response){
      // drawTasks(response);
      cb(response);
      console.log(response, 'front script.js');
    });
  }

  return {
    addFood: addFood,
    getToDoList: getToDoList
  }
})();

// foodManeger.getToDoList();
// button.addEventListener('click', foodManeger.addFood);
