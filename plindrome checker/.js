const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultElement = document.getElementById('result'); 

checkBtn.addEventListener('click', () => {
  const inputText = textInput.value;

  if (!inputText) {
    alert('Please input a value.');
    return;
  }

  const processedText = inputText
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');

  const reversedText = processedText.split('').reverse().join('');

  if (processedText === reversedText) {
    resultElement.textContent = `${inputText} is a palindrome.`;
  } else {
    resultElement.textContent = `${inputText} is not a palindrome.`;
  }
});