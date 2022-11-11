function stringToArray(params) {
  let nums = params.split(",");
  return nums.map((num) => {
    try {
      return parseInt(num);
    } catch (e) {
      console.log(e);
      throw new ExpressError(`${num} is not a number`, 400);
    }
  });
}

function calcMean(nums) {
  return nums.reduce((pv, cv) => pv + cv, 0) / nums.length;
}

function calcMedian(nums) {
  const numLen = nums.length;
  if (numLen % 2 == 1) {
    return nums[Math.floor(numLen / 2)];
  }
  medianIndex = numLen / 2 - 1;
  return calcMean([nums[medianIndex], nums[medianIndex + 1]]);
}

function calcMode(nums) {
  const counts = {};
  nums.forEach((num) => {
    if (!(num in counts)) {
      counts[num] = 0;
    }
    counts[num]++;
  });

  let max_count = 0;
  let max = null;

  for (const num in counts) {
    if (counts[num] > max_count) {
      max_count = counts[num];
      max = num;
    }
  }

  return +max;
}

console.log(calcMode([1, 1, 3, 5, 7]));

module.exports = {
  stringToArray,
  calcMean,
  calcMedian,
  calcMode,
};
