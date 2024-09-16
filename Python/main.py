import os
import asyncio

from dotenv import load_dotenv
from UnleashClient import UnleashClient

load_dotenv()

api_url = os.getenv('UNLEASH_API_URL')
api_token = os.getenv('UNLEASH_API_TOKEN')
flag = "flag-rust"

client = UnleashClient(
    url=api_url,
    app_name="unleash-python-example",
    custom_headers={'Authorization': api_token},
    metrics_interval=1)

client.initialize_client()

if client.is_enabled(flag):
    print(f'Feature flag "{flag}" is enabled')
else:
    print(f'Feature flag "{flag}" is disabled')

async def wait_to_send_metrics():
    print("Waiting to ensure metrics are sent")
    await asyncio.sleep(2)
    print("Done waiting!")

asyncio.run(wait_to_send_metrics())
