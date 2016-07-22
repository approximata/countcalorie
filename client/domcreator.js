'use strict';

// var button = document.querySelector('.button-text');
var foodlist = document.querySelector('.food-list');
var inputFieldName = document.querySelector('.name');
var inputFieldCalorie = document.querySelector('.calorie');
var inputFieldDate = document.querySelector('.date');
var inputFilter = document.querySelector('.buttonfilter');
var inputFilterLabel = document.querySelector('.filter')


var domBuild = (function() {
  var addButton = document.querySelector('.button-text');
  var showAllButton = document.querySelector('.show-all');


  // var deleteButton = document.querySelector('.delete');

  // var button = document.querySelector('.button-text');
  // var foodlist = document.querySelector('.food-list');
  // var inputFieldName = document.querySelector('.name');
  // var inputFieldCalorie = document.querySelector('.calorie');
  // var inputFieldDate = document.querySelector('.date');

  function addInnerHtmlToAddHtml(element){
    return '<div class="food-item">' + element.name + ' ' +
    element.calorie + ' ' + element.date +
    '</div> <div class="buttons"> <button class="delete" type="button" id=' +
    'd' + element.id + '></button> </div>'
  }

  function setInputBlank() {
    inputFieldName.value = '';
    inputFieldCalorie.value = '';
    inputFieldDate.value = '';
  }

  function addHtml(element) {
    var newFood = document.createElement('div');
    console.log(newFood);
    newFood.classList.add('foodholder');
    console.log(addInnerHtmlToAddHtml(element));
    newFood.innerHTML = addInnerHtmlToAddHtml(element);
    newFood.setAttribute('id', 'food' + element.id);
    newFood.setAttribute('name', element.name);
    newFood.setAttribute('calorie', element.calorie);
    foodlist.appendChild(newFood);
    setInputBlank();
    console.log('addhtml done');
  }

  function deleteDom(elementId) {
    var id = '#food' + elementId;
    console.log(id);
    foodlist.removeChild(document.querySelector(id));
  }

  // function inputFilterValue(){
  //   return inputFilterLabel.value;
  // }

  function drawTasks(inputdata) {
    inputdata.forEach(function (element) {
      if ((element.name).length > 0) {
        console.log(element);
        addHtml(element);
      }
    });
  }

  return {
    addHtml: addHtml,
    addButton: addButton,
    drawTasks: drawTasks,
    // deleteButton: deleteButton,
    deleteDom: deleteDom,
    showAllButton: showAllButton,

  };
})();
