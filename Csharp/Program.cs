using System;
using Unleash;
using Unleash.ClientFactory;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotenv.net;

public class Program
{
	public static async Task Main()
	{
        DotEnv.Load();
        var envVars = DotEnv.Read();

        var flag = "example-flag";
        var url = envVars["UNLEASH_API_URL"];
        var token = envVars["UNLEASH_API_TOKEN"];

		var settings = new UnleashSettings()
		{
			AppName = "codesandbox-csharp",
			UnleashApi = new Uri(url),
			CustomHttpHeaders = new Dictionary<string, string>()
			{
                {"Authorization",token}
			}
        };

        var unleashFactory = new UnleashClientFactory();

        var unleash =  await unleashFactory.CreateClientAsync(settings, synchronousInitialization: true);

        if (unleash.IsEnabled(flag))
        {
            Console.WriteLine($"Flag '{flag}' is enabled");
        }
		else {
            Console.WriteLine($"Flag '{flag}' is disabled");
		}
	}
}
