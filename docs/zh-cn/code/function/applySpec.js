const R = require("ramda");

/// [demo]
const getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply, div: R.divide},
});
getMetrics(2, 4); // => { sum: 6, nested: { mul: 8, div: 0.5 } }
/// [demo]

const getMetricsTest = R.applySpec({
  sum: R.add,
  mul: R.multiply,
  sub: R.subtract,
  div: R.divide,
});

const res = getMetricsTest(2, 4);
console.log(res);
