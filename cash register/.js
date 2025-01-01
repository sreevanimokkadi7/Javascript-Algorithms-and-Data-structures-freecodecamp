let price = 1.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const resultFormats = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
  return;
};

const update = () => {
  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
};

update();

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let coins = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid
      .map(total => total[1])
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(2)
  );

  if (totalCID < changeDue) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue > coins[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= coins[i]) {
        total -= coins[i];
        changeDue = parseFloat((changeDue -= coins[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * coins[i]]);
      }
    }
  }
  if (changeDue > 0) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  resultFormats(result.status, result.change);
  update(result.change);
};

const resultChecks = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

purchaseBtn.addEventListener('click', resultChecks);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    resultChecks();
  }
});
// ... (rest of your JavaScript code from the previous responses)

document.getElementById("purchase-btn").addEventListener("click", function() {
    const price = parseFloat(priceInput.value);
    const cash = parseFloat(cashInput.value);
    let cid = [ 
        // ... (your actual cid data) 
    ]; 

    updateCashInDrawerDisplay(cid); 

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item.");
    } else {
        const change = calculateChange(price, cash, cid);

        if (change === null) { 
            changeDueDisplay.textContent = "Status: INSUFFICIENT_FUNDS";
        } else if (Object.keys(change).length === 0) { 
            changeDueDisplay.textContent = "No change due - customer paid with exact cash";
        } else { 
            displayChange(change); 
        }
    }
});

// ... (rest of your JavaScript code)