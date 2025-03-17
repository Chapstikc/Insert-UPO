const textToInsert = "UPO"; // Replace with the desired text

// Function to insert text into the "Business Unit" input box and simulate the selection
function insertText() {
  const inputBox = document.querySelector('input[placeholder="Business Unit"]');
  
  if (inputBox && !inputBox.value) { // Check if the input box exists and is empty
    inputBox.value = textToInsert;
    console.log("Text inserted successfully!");

    // Trigger the 'input' event to simulate typing (this helps if there are any listeners)
    const inputEvent = new Event('input', { bubbles: true });
    inputBox.dispatchEvent(inputEvent);

    // Check for the dropdown container until it is found
    const interval = setInterval(() => {
      const typeaheadContainer = document.querySelector('typeahead-container.dropdown.open');
      
      if (typeaheadContainer) {
        clearInterval(interval); // Stop checking once the container is found
        console.log("Dropdown container found");

        // Now find the correct option button inside the dropdown container
        const optionButton = Array.from(typeaheadContainer.querySelectorAll('button.dropdown-item'))
          .find(button => button.textContent.includes('UPO_SHIPPED_FROM - University Post Office (WSC)')); // Adjust this text match to suit your needs

        if (optionButton) {
          // Try clicking the option button directly to select it
          setTimeout(() => {
            // Trigger the click event on the option
            optionButton.click();
            console.log("Dropdown option clicked!");

            // Wait for the dropdown to close and the reference field to update
            setTimeout(() => {
              // Ensure Reference 1 gets populated after dropdown closes
              updateReference1Field();
            }, 200); // Add some time for the dropdown to close and system to update the field
          }, 500); // Allow some time for the dropdown to appear
        } else {
          console.log("Option not found inside the typeahead container.");
        }
      }
    }, 100); // Check every 100ms until the dropdown container is found
  }
}

// Function to simulate the update of the Reference 1 field (populate it with the correct value)
function updateReference1Field() {
  const reference1Box = document.querySelector('input[placeholder="Reference 1"]');
  
  if (reference1Box) {
    // Trigger the 'change' event to simulate that the Reference 1 field has been updated
    const changeEvent = new Event('change', { bubbles: true, cancelable: true });
    reference1Box.dispatchEvent(changeEvent);

    console.log("Change event dispatched for Reference 1.");
  } else {
    console.log("Reference 1 input field not found.");
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
