const { calcMean, calcMedian, calcMode } = require("./fn");

test("testCalcMean", () => {
  expect(calcMean([1, 3, 5, 7, 9])).toBe(5);
  expect(calcMean([1, 2, 3, 4, 5, 20])).toBeCloseTo(5.83);
});

test("testCalcMedian", () => {
  expect(calcMedian([1, 3, 5, 7, 9])).toBe(5);

  expect(calcMedian([1, 3, 5, 7])).toBe(4);
});

test("testCalcMode", () => {
  expect(calcMode([1, 1, 2, 2, 2, 3, 3, 3, 3])).toBe(3);
});
