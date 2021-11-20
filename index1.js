function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
}

console.log(calcTip(125));

const arrayBills = [125, 555, 44];

const tips = arrayBills.map((element) => {
  return calcTip(element);
});

console.log(tips);

let totals = [];
let i = 0;

for (; i < arrayBills.length; i++) {
  totals[i] = arrayBills[i] + tips[i];
}

console.log(totals);
