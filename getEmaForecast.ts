import { ema } from "moving-averages";

const getEmaForecast = (l, horizon) => {
  return ema(l, horizon);
};

export default getEmaForecast;
