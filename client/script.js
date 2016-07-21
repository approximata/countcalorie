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
  //
  // function xhrRequest(method, urlr, data, type, cb) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open(method, urlr, true);
  //   xhr.setRequestHeader(type, 'application/json');
  //   xhr.send(data);
  //   xhr.onload = function () {
  //     if (xhr.readyState === xhr.DONE) {
  //       cb(JSON.parse(xhr.response));
  //       console.log(JSON.parse(xhr.response));
  //     }
  //   };
  // }

  function addSendData() {
    return JSON.stringify(
      {
        "name": inputFieldName.value,
        "calories": inputFieldCalorie.value,
        "date": inputFieldDate.value
      });
  }

  function addFood() {
    var method = 'POST';
    var urlr = url;
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, urlr, addSendData(), type, function(response){
      console.log(response, 'front script.js');
    });
  }

  function drawTasks(inputdata) {
    inputdata.forEach(function (element) {
      if ((element.name).length > 0) {
        console.log(element);
        domBuild.addHtml(element);
      }
    });
  }

  function getToDoList() {
    var method = 'GET';
    var urlr = url;
    var type = 'Content-Type';
    xhrhandler.xhrRequest(method, urlr, '', type, function(response){
      drawTasks(response);
      console.log(response, 'front script.js');
    });
  }

  return {
    addFood: addFood,
    getToDoList: getToDoList
  }
})();

foodManeger.getToDoList();
button.addEventListener('click', foodManeger.addFood);
