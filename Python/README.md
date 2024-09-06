# Python Starter

Here you can easily get started with [Unleash SDK](https://github.com/Unleash/unleash-client-rust) for [Rust](https://www.rust-lang.org/) and experiment.

```sh
cp -n .env.example .env
cargo watch -x run
```

Check out [src/main.rs](./src/main.rs) for the code.
When you save, it will automatically recompile and show a new version thanks to [`cargo-watch`](https://crates.io/crates/cargo-watch).
You can set you instance URL and API client token in `.env`.
Set your flag name in line `:13`.

To add a new dependency, open a new terminal (```CMD/Ctrl + ` ```) and run `cargo add ...`.


- If you want to upgrade Python, you can change the image in the [Dockerfile](./.devcontainer/Dockerfile).
