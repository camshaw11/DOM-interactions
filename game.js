// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    // when dots are clicked fire events
    dots[i].addEventListener('contextmenu', makeGreen)
    
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(e) {
  // toggle blue class to target
  e.target.classList.toggle('blue');
  // call function
  updateCounts();
}
// CREATE FUNCTION hide HERE

function hide(e) {
  // toggle invisible class to target
  e.target.classList.toggle('invisible');
  // call function
  updateCounts();
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  // declare variables from class names
  var blueClass = document.getElementsByClassName('blue');
  var greenClass = document.getElementsByClassName('green');
  var invisibleClass = document.getElementsByClassName('invisible');

  // update object value with the number of items in each array
  totals.blue = blueClass.length;
  totals.green = greenClass.length;
  totals.invisible = invisibleClass.length;
  
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
