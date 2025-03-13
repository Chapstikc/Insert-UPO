const textToInsert = "UPO_SHIPPED_FROM - University Post Office (WSC)"; // Replace with the desired text

// Function to insert text into the "Business Unit" input box
function insertText() {
  const inputBox = document.querySelector('input[placeholder="Business Unit"]');
  if (inputBox && !inputBox.value) { // Check if the input box exists and is empty
    inputBox.value = textToInsert;
    console.log("Text inserted successfully!");
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

// Optional: Stop observing after the text has been inserted
// observer.disconnect(); // You can call this once you're sure the input field is set
