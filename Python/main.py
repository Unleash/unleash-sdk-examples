import os
import asyncio

from dotenv import load_dotenv
from UnleashClient import UnleashClient


async def wait():
    await asyncio.sleep(2)


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

if client.is_enabled(flag):
    print(f'Feature flag "{flag}" is enabled')
else:
    print(f'Feature flag "{flag}" is disabled')

print("Waiting to ensure metrics are sent")
asyncio.run(wait())
print("Done waiting!")
