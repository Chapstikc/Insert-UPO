// popup.js
document.getElementById('openUrlButton').addEventListener('click', () => {
  const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with the URL you want to open

  // Open the URL in a new tab
  chrome.tabs.create({ url: url });
});
