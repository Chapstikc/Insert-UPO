// content.js
const textToInsert = "UPO_SHIPPED_FROM - University Post Office (WSC)"; // Replace with the desired text

// Function to insert text into the "Business Unit" input box
function insertText() {
  const inputBox = document.querySelector('input[placeholder="Business Unit"]');
  if (inputBox && !inputBox.value) { // Check if the input box exists and is empty
    inputBox.value = textToInsert;
    console.log("Text inserted successfully!");
  }
}

// Check for the input box every 500 milliseconds
setInterval(insertText, 500);
