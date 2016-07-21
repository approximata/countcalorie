'use strict';
var controll = (function(){

  function addFoodEvent(){
    foodManeger.addFood(domBuild.addHtml);
  }

  function getAllToScreen(){
    foodManeger.getToDoList(domBuild.drawTasks);
  }
  
  return{
    addFoodEvent: addFoodEvent,
    getAllToScreen: getAllToScreen,
  }
})();

controll.getAllToScreen();
