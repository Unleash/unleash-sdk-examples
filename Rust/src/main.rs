use enum_map::Enum;
use serde::{Deserialize, Serialize};
use std::env;
use dotenvy::dotenv;
use std::error::Error;
use std::time::Duration;
use tokio::time::sleep;
use unleash_api_client::client::ClientBuilder;
use unleash_api_client::Client;

#[derive(Debug, Deserialize, Serialize, Enum, Clone)]
enum Flags {
    #[serde(rename = "demoApp.step1")] // TODO: Flag name
    RustCodesandbox,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error + Send + Sync>> {
    dotenv().expect(".env file not found");

    // Read environment variables
    let api_url = env::var("UNLEASH_API_URL").expect("UNLEASH_API_URL not found");
    let token = env::var("UNLEASH_API_TOKEN").expect("UNLEASH_API_TOKEN not found");

    let client: Client<Flags, reqwest::Client> = ClientBuilder::default()
        .interval(500)
        .into_client(
            &api_url,
            "codesandbox", // App name
            "rust",        // InstanceId
            Some(token),
        )?;
    client.register().await?;

    let (_, _) = tokio::join!(client.poll_for_updates(), async {
        // Ensure we have features for this demo.
        sleep(Duration::from_millis(500)).await;

        let is_webp = client.is_enabled(Flags::RustCodesandbox, None, false);
        println!("Is flag enabled {}", is_webp);

        sleep(Duration::from_millis(1000)).await;

        client.stop_poll().await;
        Ok::<(), Box<dyn Error + Send + Sync>>(())
    });

    Ok(())
}
