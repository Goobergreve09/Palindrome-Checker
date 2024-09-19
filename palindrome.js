document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  checkButton.addEventListener("click", function () {
    const inputValue = textInput.value.trim();

    // Clear previous result
    result.textContent = "";

    // Check if input is empty
    if (!inputValue) {
      alert("Please input a value"); // Display message instead of alert
      return; // Exit the function if there's no input
    }

    // Normalize the input for palindrome check
    const normalizedValue = inputValue
      .replace(/[^0-9a-zA-Z]/g, "")
      .toLowerCase();
    const reversedValue = normalizedValue.split("").reverse().join("");

    // Check if the normalized input is a palindrome
    if (normalizedValue === reversedValue) {
      result.textContent = `${inputValue} is a palindrome`;
    } else {
      result.textContent = `${inputValue} is not a palindrome`;
    }
  });

  // Add event listener for the Enter key
  textInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkButton.click(); // Trigger the button click
    }
  });
});
