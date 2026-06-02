import os
import time

from dotenv import load_dotenv
from UnleashClient import UnleashClient

load_dotenv()

api_url = os.getenv('UNLEASH_API_URL')
api_token = os.getenv('UNLEASH_API_TOKEN')
flag = "example-flag"

client = UnleashClient(
    url=api_url,
    app_name="codesandbox-python",
    custom_headers={'Authorization': api_token},
    metrics_interval=1)

client.initialize_client()

while True:
    if client.is_enabled(flag):
        print(f"'{flag}' is enabled")
    else:
        print(f"'{flag}' is disabled")
    time.sleep(2)
