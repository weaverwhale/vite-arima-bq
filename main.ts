import { getForecast } from "./getForecast";

// Synthesize timeseries
const ts = Array(24)
  .fill(0)
  .map((_, i) => i + Math.random() / 5);

// Predict next 12 values using getForecast.ts
console.log(getForecast(ts, 12));

export default getForecast;

// no export, no "exports is not defined"
// export { arima, pred, errors };
