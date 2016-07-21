'use strict';
var controll = (function(){

  function addFoodEvent(){
    foodManeger.addFood(domBuild.addHtml);
  }
  return{
    addFoodEvent: addFoodEvent
  }
})();
