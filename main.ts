import getEmaForecast from "./getEmaForecast";
import getArimaForecast from "./getArimaForecast";

// Synthesize timeseries
const ts = Array(24)
  .fill(0)
  .map((_, i) => i + Math.random() / 5);

// EMA - predict next 12 values using getEmaForecast.ts
console.log(getEmaForecast(ts, 12));

// EMA - predict next 12 values using getArimaForecast.ts
console.log(getArimaForecast(ts, 12));

export { getEmaForecast, getArimaForecast };
