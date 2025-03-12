// content.js
const textToInsert = "Hello World";

// Find the input box by its ID, name, or any other selector
const inputBox = document.querySelector('input[type="text"]'); // Adjust the selector as needed

if (inputBox) {
  inputBox.value = textToInsert;
  console.log("Text inserted successfully!");
} else {
  console.error("Input box not found!");
}
