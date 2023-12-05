using Unleash;
using Unleash.ClientFactory;

// See https://aka.ms/new-console-template for more information
var settings = new UnleashSettings()
{
    AppName = "dotnet-test",
    UnleashApi = new Uri("<your-api-url>"),
    CustomHttpHeaders = new Dictionary<string, string>()
    {
       {"Authorization","<your-api-token>" }
    }
};
var unleashFactory = new UnleashClientFactory();

IUnleash unleash = await unleashFactory.CreateClientAsync(settings, synchronousInitialization: true);

// this `unleash` has successfully fetched feature toggles and written them to its cache.
// if network errors or disk permissions prevented this from happening, the above await would have thrown an exception
if(unleash.IsEnabled("test-flag"))
{
    //do some magic
    Console.WriteLine("test-flag is enabled");
}
else
{
    //do old boring stuff
    Console.WriteLine("test-flag is disabled");
}
var awesome = unleash.IsEnabled("test-flag");
Console.WriteLine("Hello, World!");
