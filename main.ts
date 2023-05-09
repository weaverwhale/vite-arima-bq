import ARIMA from "arima";

// Synthesize timeseries
const ts = Array(24)
  .fill(0)
  .map((_, i) => i + Math.random() / 5);

// Init arima and start training
const arima = new ARIMA({
  p: 2,
  d: 1,
  q: 2,
  verbose: true,
}).train(ts);

// Predict next 12 values
const [pred, errors] = arima.predict(12);
console.log(pred, errors);

export { arima, pred, errors };
