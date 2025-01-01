const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputElement = document.getElementById('output');

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(number) {
  let roman = '';

  for (const key in romanNumerals) {
    const value = romanNumerals[key];
    while (number >= value) {
      roman += key;
      number -= value;
    }
  }

  return roman;
}

convertBtn.addEventListener('click', () => {
  const number = parseInt(numberInput.value);

  if (isNaN(number)) {
    outputElement.textContent = 'Please enter a valid number.';
  } else if (number < 1) {
    outputElement.textContent = 'Please enter a number greater than or equal to 1.';
  } else if (number > 3999) {
    outputElement.textContent = 'Please enter a number less than or equal to 3999.';
  } else {
    const romanNumeral = convertToRoman(number);
    outputElement.textContent = romanNumeral;
  }
});