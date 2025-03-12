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

// Set up a MutationObserver to monitor the DOM for changes
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Check if the "Business Unit" input box has been added to the DOM
      insertText();
    }
  }
});

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true, // Observe changes to child elements
  subtree: true, // Observe all descendants of the body
});

// Run the insertText function once when the script is first injected
insertText();
