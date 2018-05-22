// Global variables
var result = 0;
var last_value = null;
var current_operator = null;

// Init result screen
updateScreen(result);

// Action for click on a number
function clickNumber(number) {

  // Add number to result (as string)
  result = result + number;
  updateScreen(result);
}

// Action for click on an operator
function clickOperator(operator) {

  // Caculated last operation
  updateResult();

  // Save the result in last_value and we clear the screen
  last_value = result;
  calculate = true;
  result = 0;

  // Save the operator
  current_operator = operator;
}

// Clear the result screen
function clearScreen() {

  // Reset all values
  resetValues();

  // Update screen
  updateScreen();
}

// Display result in screen results
function updateResult() {

  // Need to calculate ?
  if(last_value != null && current_operator != null) {

    // Check wich operator we need to use
    switch(current_operator) {
      case "+":
          result = result + last_value;
          break;
      case "-":
          result = last_value - result;
          break;
      case "*":
          result = last_value * result;
          break;
      case "/":
          if(!result) {
            document.getElementById('screen').innerHTML = 'Une division par 0 ? Non mais ça va pas ou quoi ?';
            resetValues();
            return;
          }

          result = last_value / result;
          break;
    }

    last_value = null;
    current_operator = null;
  }

  updateScreen(result);
}

// Display result in screen results
function updateScreen() {

  // Force result to be an float (to remove first 0)
  result = parseFloat(result);

  // Update dev#screen with result
  document.getElementById('screen').innerHTML = result;
}

// Action for key down
function keyPressed(e) {

  // Key is operator
  if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
    clickOperator(e.key);
  }

  // Key is number
  else if((e.keyCode >= 48 ) && (e.keyCode <= 57)) {
    clickNumber(e.key);
  }

  // Key is equal
  else if(e.keyCode == 13) {
    updateResult();
  }

  // Key is escape
  else if(e.keyCode == 27) {
    clearScreen();
  }

}

// Reset current values
function resetValues() {
  result = 0;
  last_value = null;
  current_operator = null;
}
