const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(3, 7));

let oneEuroIs = {
  JPY: 156.5, // japan yen
  USD: 1.07, // us dollar
  GBP: 0.87, // british pound
};

let oneDollarIs = {
  JPY: 148.32, // japan yen
  EUR: 0.92, // euro
  GBP: 0.77, // british pound
};

let oneYenIs = {
  USD: 0.0067, // us dollar
  EUR: 0.0062, // euro
  GBP: 0.0052, // british pound
};
const fromDollarToYen = (euros) => {
  let dollars = euros * oneEuroIs.USD;
  return dollars * oneDollarIs.JPY;
};

const fromEuroToDollar = (euros) => {
  return euros * oneEuroIs.USD;
};

const fromYenToPound = (euros) => {
  let dollars = euros * oneEuroIs.USD;
  let yens = dollars * oneDollarIs.JPY;
  return yens * oneYenIs.GBP;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
