require 'unleash'

UNLEASH = Unleash::Client.new(
    url: 'http://localhost:4242/api/',
    app_name: 'unleash-sdk-ruby-example',
    custom_http_headers: {'Authorization': 'apiKey'}
    )
pp UNLEASH.is_enabled?('test-flag')
sleep 1
pp UNLEASH.is_enabled?('test-flag')