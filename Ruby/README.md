# Unleash Ruby SDK

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Unleash/unleash-sdk-examples/tree/main/Ruby)

Quickly get started with [Unleash SDK](https://github.com/Unleash/unleash-ruby-sdk) using this starter! Check out [example.rb](./example.rb) for the code. Set your flag name in line `:29`. Put you instance URL and API client token in `.env`.

```sh
bundle install
cp -n .env.example .env

bundle exec ruby example.rb
```

Or with Docker (no local Ruby required):

```sh
docker compose run --rm app
```