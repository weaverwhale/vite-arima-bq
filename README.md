# Vite + Arima BQ Build

Bundling Arima for BigQuery with Vite

## One-liner

```bash
# Run #1, #3, and #4
yarn && yarn build && node dist/tw-arima.js
```

## 1. Project setup

```bash
yarn
```

## 2. Compiles and hot-reloads for development

```bash
yarn dev
```

## 3. Compiles and minifies for production

```bash
yarn build
```

## 4. Test build

```bash
yarn preview
```

```javascript
# expected result
# eg:
[
  24.165747936098157,
  25.177377131227367,
  26.178164064076316,
  27.18177243367712,
  28.18464646927931,
  29.187711506372224,
  30.19072674040802,
  31.193754837123542,
  32.196779488709794,
  33.19980493902711,
  34.20283008367512,
  35.205855210057294
] [
  0.005862887454860757,
  0.010283609335370968,
  0.015534072085615329,
  0.02102851436931422,
  0.02692808346950461,
  0.03318972680721822,
  0.039825480947559305,
  0.046832497881024525,
  0.05421194302090957,
  0.0619639007422628,
  0.07008874625714161,
  0.07858677661503399
]
```

## Publishing

This project is Published on [npm](https://npmjs.com/) as [@weaverwhale/tw-arima-bq](https://www.npmjs.com/package/@weaverwhale/tw-arima-bq).

### Patch Version

To publish a new patch version, run the following command:

```bash
# Bump the patch version in package.json, and publish to npm
npm publish:patch
```

### Minor

To publish a new minor version, run the following command:

```bash
# Bump the minor version in package.json, and publish to npm
npm publish:minor
```

Note this should be semi-rare, and well tested, as we should be able to add new components without breaking changes.

### Major Version

Since this is a public package, we should not publish major versions without a discussion, and therefore there is no command for this.
