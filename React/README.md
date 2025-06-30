# Unleash React SDK

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Unleash/unleash-sdk-examples/tree/main/React)

Here you can easily get started with [Unleash SDK](https://github.com/Unleash/proxy-client-react) for [React](https://react.dev/) and experiment.

Check out [src/App.tsx](./src/App.tsx) example and [src/index.tsx](./src/index.tsx) with SDK configuration.

## Configuration

### Unleash Connection
Configure your Unleash connection in [`src/index.tsx`](./src/index.tsx):
- `url`: Set your Unleash server or Unleash Edge URL.
- `clientKey`: Set your [Frontend token](https://docs.getunleash.io/reference/api-tokens-and-client-keys#frontend-tokens).

### Feature Flags
Update feature flag usage in [`src/App.tsx`](./src/App.tsx):
- Flag name: Change `"example-flag"` to your desired flag name.

## Installation & Launch

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```
