// Vite - Backend Integration
// https://vitejs.dev/guide/backend-integration.html
// add the beginning of your app entry
import "vite/modulepreload-polyfill";

import ARIMA from "arima";

const arima = new ARIMA();
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arima.fit(data);
console.log(result);

export default arima;
