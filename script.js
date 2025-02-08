// Function to append a value to the display
function appendToDisplay(value) {
  // Get the display element
  const display = document.getElementById("display");
  // Append the value to the current display value
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  // Get the display element
  const display = document.getElementById("display");
  // Clear the display value
  display.value = "";
}

// Function to delete the last character from the display
function deleteLast() {
  // Get the display element
  const display = document.getElementById("display");
  // Remove the last character from the display value
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  // Get the display element
  const display = document.getElementById("display");
  try {
    // Evaluate the expression in the display and set the result
    display.value = eval(display.value);
  } catch (error) {
    // If there's an error (e.g., invalid expression), show 'Error'
    display.value = "Error";
  }
}
