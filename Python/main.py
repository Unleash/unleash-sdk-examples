import os
from dotenv import load_dotenv
from UnleashClient import UnleashClient

load_dotenv()

api_url = os.getenv('UNLEASH_API_URL')
api_token = os.getenv('UNLEASH_API_TOKEN')
flag = "flag-rust"

client = UnleashClient(
    url=api_url,
    app_name="unleash-python-example",
    custom_headers={'Authorization': api_token})

client.initialize_client()

if client.is_enabled(flag):
    print(f'Feature flag "{flag}" is enabled')
else:
    print(f'Feature flag "{flag}" is disabled')
