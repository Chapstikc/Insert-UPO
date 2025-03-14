const textToInsert = "UPO_SHIPPED_FROM - University Post Office (WSC)"; // Replace with the desired text

// Function to insert text into the "Business Unit" input box and simulate the selection
function insertText() {
  const inputBox = document.querySelector('input[placeholder="Business Unit"]');
  
  if (inputBox && !inputBox.value) { // Check if the input box exists and is empty
    inputBox.value = textToInsert;
    console.log("Text inserted successfully!");

    // Trigger the 'input' event to simulate typing (this helps if there are any listeners)
    const inputEvent = new Event('input', { bubbles: true });
    inputBox.dispatchEvent(inputEvent);

    // Wait for the dropdown to appear and select the correct option
    const optionButton = Array.from(document.querySelectorAll('button.dropdown-item')).find(button => button.textContent.trim() === textToInsert);

    if (optionButton) {
      // Simulate a click on the dropdown button to select it
      optionButton.click();
      console.log("Dropdown option selected successfully!");
    } else {
      console.log("Option not found in dropdown.");
    }
  }
}

// Create a MutationObserver to monitor the DOM for changes
const observer = new MutationObserver(() => {
  // Run insertText when the input field is added or updated
  insertText();
});

// Configuration for the MutationObserver
const config = { childList: true, subtree: true };

// Start observing the entire document for changes
observer.observe(document.body, config);
