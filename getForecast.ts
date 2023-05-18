// import ARIMA from "arima";
import { ema } from "moving-averages";

// const getForecast = (l, horizon) => {
//   // Train ARIMA model
//   let res = new ARIMA({
//     p: 2,
//     d: 1,
//     q: 2,
//     verbose: true,
//   }).train(l);
//   // predict horizon
//   const [pred, errors] = res.predict(horizon);
//   return pred;
// };

const getForecast = (l, horizon) => {
  return ema(l, horizon);
};

export default getForecast;
