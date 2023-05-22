import ARIMA from "arima";

const getArimaForecast = (l, horizon) => {
  // Train ARIMA model
  let res = new ARIMA({
    p: 2,
    d: 1,
    q: 2,
    verbose: true,
  }).train(l);
  // predict horizon
  const [pred, errors] = res.predict(horizon);
  return pred;
};

export default getArimaForecast;
