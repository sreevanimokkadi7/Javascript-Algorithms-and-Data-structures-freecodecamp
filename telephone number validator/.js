const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const validNumberRegex = /^1?\s?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

function validateNumber(number) {
  const trimmedNumber = number.trim();
  if (!trimmedNumber) {
    return 'Please provide a phone number.';
  }

  if (!validNumberRegex.test(trimmedNumber)) {
    return 'Invalid US number: ' + trimmedNumber;
  }

  return 'Valid US number: ' + trimmedNumber;
}

checkBtn.addEventListener('click', () => {
  const result = validateNumber(userInput.value);
  resultsDiv.textContent = result;
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});