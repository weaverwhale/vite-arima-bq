// Vite - Backend Integration
// https://vitejs.dev/guide/backend-integration.html
// add the beginning of your app entry
import "vite/modulepreload-polyfill";

import ARIMA from "arima";

// Synthesize timeseries
const ts = Array(24)
  .fill(0)
  .map((_, i) => i + Math.random() / 5);

// Init arima and start training
export const arima = new ARIMA({
  p: 2,
  d: 1,
  q: 2,
  verbose: false,
}).train(ts);

// Predict next 12 values
export const [pred, errors] = arima.predict(12);
console.log(pred, errors);
