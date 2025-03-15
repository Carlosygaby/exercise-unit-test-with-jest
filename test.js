const {
  sum,
  fromEuroToDollar,
  fromYenToPound,
  fromDollarToYen,
} = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
  let total = sum(14, 9);

  expect(total).toBe(23);
});

test("2 euros  equal  2.14 dollars", () => {
  let total = fromEuroToDollar(2);

  expect(total).toBe(2.14);
});

test("1 euro equal 158.7024 yens", () => {
  let total = fromDollarToYen(1);
  expect(total).toBe(158.7024);
});

test("1 euro equal 0.8252524800000001 pounds", () => {
  let total = fromYenToPound(1);
  expect(total).toBe(0.8252524800000001);
});
