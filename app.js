const express = require("express");
const ExpressError = require("./expressError");
const { calcMean, calcMedian, calcMode } = require("./helpers");

const app = express();

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

app.get("/mean", (req, res) => {
  const nums = stringToArray(req.query.nums);
  return res.json(calcMean(nums));
});
app.get("/median", (req, res) => {
  const nums = stringToArray(req.query.nums);
  return res.json(calcMedian(nums));
});
app.get("/mode", (req, res) => {
  const nums = stringToArray(req.query.nums);
  return res.json(calcMode(nums));
});

app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(0);
});
