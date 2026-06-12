# Unleash Next.js SDK

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Unleash/unleash-sdk-examples/tree/main/Next.js)

Here you can get started with the [Unleash Next.js SDK](https://github.com/Unleash/unleash-nextjs-sdk) and experiment with feature flags on the client side.

For full documentation, see the [Next.js SDK docs](https://docs.getunleash.io/sdks/next-js) — that's the main place to learn more.

## Getting started

```sh
cp .env.example .env
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Edit `.env` to point to your own Unleash instance. The flag provider and hook are in [components/ClientComponent.tsx](./components/ClientComponent.tsx).

More advanced examples (SSR, middleware, bootstrap) are available in [Unleash/unleash-nextjs-sdk/example](https://github.com/Unleash/unleash-nextjs-sdk/tree/main/example).
