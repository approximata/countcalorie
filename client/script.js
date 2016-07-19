'use strict';


// var foodmaneger = function()
var button = document.querySelector('.button-text');
var foodlist = document.querySelector('.food-list');
var inputFieldName = document.querySelector('.name');
var inputFieldCalorie = document.querySelector('.calorie');
var inputFieldDate = document.querySelector('.date');
var url = 'http://localhost:3000/meals/';


// function addHtml(element) {
//   var newTodo = document.createElement('div');
//   newTodo.classList.add('foodholder');
//   newTodo.innerHTML = '<div class="food-item">' + element.text + '</div> <div class="buttons"> <button class="delete" type="button" id=' + 'd' + element.id + '></button> <input class="check" type="checkbox" id=' + 'c' + element.id + '></input> </div>';
//   newTodo.setAttribute('id', 'task' + element.id);
//   todolist.appendChild(newTodo);
//   newTodo.querySelector('#d' + element.id).addEventListener('click', deleteTask);
//   newTodo.querySelector('#c' + element.id).addEventListener('click', chkTask);
//   var checked = newTodo.querySelector('.check');
//   var checkdb = false;
//   if (element.completed === 1) {
//     checkdb = true;
//   } else if (element.completed === 0) {
//     checkdb = false;
//   }
//   checked.checked = checkdb;
//   inputField.value = '';
// }

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

function xhrRequest(method, urlr, data, type, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, urlr, true);
  xhr.setRequestHeader(type, 'application/json');
  xhr.send(data);
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      cb(JSON.parse(xhr.response));
      console.log(JSON.parse(xhr.response));
    }
  };
}


function addFood() {
  var method = 'POST';
  var urlr = url;
  var type = 'Content-Type';
  var data = JSON.stringify({"name": inputFieldName.value,  "calories": inputFieldCalorie.value, "date": inputFieldDate.value });
  xhrRequest(method, urlr, data, type, function(response){
    console.log(response);
  });
}

// function chkTask(event) {
//   var id = event.target.getAttribute('id').slice(1);
//   var texttask = document.querySelector('#task' + id).textContent;
//   var checker = trueFalseSql(document.querySelector('#c' + id).checked);
//   var method = 'PUT';
//   var urlr = url + id;
//   var type = 'Content-Type';
//   var data = JSON.stringify({ text: texttask, completed: checker })
//   xhrRequest(method, urlr, data, type, function(response){
//     addHtml()
//     console.log(response);
//   });
// }
//
// function drawTasks(inputdata) {
//   inputdata.forEach(function (element) {
//     if ((element.text).length > 0 && element.destroyed === 0) {
//       console.log(element);
//       addHtml(element);
//     }
//   });
// }

// function getToDolList() {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function() {
//     var inputdata = JSON.parse(xhr.response);
//     drawTasks(inputdata);
//   };
//   xhr.open('GET', url);
//   xhr.send();
// }
//
// getToDolList();

button.addEventListener('click', addFood);
