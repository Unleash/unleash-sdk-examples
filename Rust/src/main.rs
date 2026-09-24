use std::env;
use dotenvy::dotenv;
use std::error::Error;
use std::time::Duration;
use tokio::time::sleep;
use unleash_api_client::client::{ClientBuilder, FeatureKey};
use unleash_api_client::Client;

#[derive(Debug, Clone, Copy, FeatureKey)]
enum Flags {
    #[feature_name("example-flag")] // TODO: Flag name
    TestFlag,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error + Send + Sync>> {
    dotenv().expect(".env file not found");
    let api_url = env::var("UNLEASH_API_URL").expect("UNLEASH_API_URL not found");
    let token = env::var("UNLEASH_API_TOKEN").expect("UNLEASH_API_TOKEN not found");

    let client: Client<Flags> = ClientBuilder::default()
        .interval(5000) // Polling & metrics interval - default 15000 (ms)
        .into_client(
            &api_url,
            "codesandbox", // App name
            "rust",        // InstanceId
            Some(token),
        )?;
    client.register().await?;

    let (_, _) = tokio::join!(client.poll_for_updates(), async {
        sleep(Duration::from_millis(1000)).await;

        let is_enabled = client.is_enabled(Flags::TestFlag, None, true);
        println!("\nIs flag enabled: {}\n", is_enabled);

        sleep(Duration::from_millis(5000)).await;

        client.stop_poll().await;
        Ok::<(), Box<dyn Error + Send + Sync>>(())
    });

    Ok(())
}
