'use strict';
var controll = (function(){

  function addFoodEvent(){
    foodManeger.addFood(domBuild.addHtml);
  }

  function getAllToScreen(){
    foodManeger.getToDoList(domBuild.drawTasks);
  }

  function deleteEvent(event){
    var targetId = event.target.id;
    console.log(targetId);
    var id = targetId.slice(1);
    console.log(id);
    foodManeger.deleteFood(event, id, function() {
      domBuild.deleteDom(id)
    });
  }

  function filterEvent(){
    foodManeger.filterFood(domBuild.drawTasks);
  }

  return{
    addFoodEvent: addFoodEvent,
    getAllToScreen: getAllToScreen,
    deleteEvent: deleteEvent,
    filterEvent: filterEvent
  }
})();

// controll.getAllToScreen();
