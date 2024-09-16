# Unleash Rust SDK

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Tymek/unleash-sdk-examples/tree/master/Rust)

Here you can easily get started with [Unleash SDK](https://github.com/Unleash/unleash-client-rust) for [Rust](https://www.rust-lang.org/) and experiment.

```sh
cp -n .env.example .env
cargo watch -x run
```

Check out [src/main.rs](./src/main.rs) for the code. Set your flag name in line `:13`. Put you instance URL and API client token in `.env`. When you save, `cargo` will automatically recompile and show a new version thanks to [`cargo-watch`](https://crates.io/crates/cargo-watch).
