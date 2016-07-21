
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
  foodlist.appendChild(newFood);
  // newFood.querySelector('#d' + element.id).addEventListener('click', deleteFood);
  setInputBlank();
}
