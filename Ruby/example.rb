#!/usr/bin/env ruby

require 'unleash'
require 'unleash/context'
require 'dotenv/load'

@unleash = Unleash::Client.new(
  url: ENV["UNLEASH_API_URL"],
  custom_http_headers: { 'Authorization': ENV["UNLEASH_API_TOKEN"] },
  app_name: 'codesandbox-ruby',
  instance_id: 'codesandbox-ruby',
  refresh_interval: 3,
  metrics_interval: 3,
  retry_limit: 2
)

# or:

# Unleash.configure do |config|
#   config.url = ENV["UNLEASH_API_URL"]
#   config.custom_http_headers = { 'Authorization': ENV["UNLEASH_API_TOKEN"] }
#   config.app_name = 'simple-test'
#   config.refresh_interval = 2
#   config.metrics_interval = 2
#   config.retry_limit = 2
# end
# @unleash = Unleash::Client.new

feature_flag = "example-flag" # Set feature flag name here
unleash_context = Unleash::Context.new
unleash_context.user_id = 123

sleep 1
30.times do
  if @unleash.is_enabled?(feature_flag, unleash_context)
    puts "#{feature_flag} is enabled"
  else
    puts "#{feature_flag} is not enabled"
  end
  sleep 3
end

puts "shutting down"

@unleash.shutdown
