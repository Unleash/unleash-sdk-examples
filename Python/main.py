from UnleashClient import UnleashClient
import os

api_url = os.environ.get('UNLEASH_API_URL')
api_token = os.environ.get('UNLEASH_API_TOKEN')
flag = "demoApp.step1"

client = UnleashClient(
    url=api_url,
    app_name="unleash-python-example",
    custom_headers={'Authorization': api_token})

client.initialize_client()

if client.is_enabled(flag):
    print("Feature flag '{}' is enabled".format(flag))
else:
    print("Feature flag '{}' is disabled".format(flag))
