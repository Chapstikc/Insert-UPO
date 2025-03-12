// content.js
const textToInsert = "UPO_SHIPPED_FROM - University Post Office (WSC)"; // Text to be inserted into targeted box

// Find the input box by its ID, name, or any other selector
const inputBox = document.querySelector('input[placeholder="Business Unit"]'); // Targets the box with the placeholder text "Business Unit"


if (inputBox) {
  inputBox.value = textToInsert;
  console.log("Text inserted successfully!");
} else {
  console.error("Input box not found!");
}
