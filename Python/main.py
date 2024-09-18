import os
import asyncio

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
    print(f"'{flag}' is enabled: {client.is_enabled(flag)}")
    asyncio.run(asyncio.sleep(2))
