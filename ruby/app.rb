require 'unleash'

UNLEASH = Unleash::Client.new(
    url: 'http://localhost:4242/api/',
    app_name: 'unleash-sdk-ruby-example',
    custom_http_headers: {'Authorization': '*:development.cfaeef37b291b5190eb815b228d8a511dad8797fd446f5ab7bfe41e2'}
    )
pp UNLEASH.is_enabled?('test-flag')