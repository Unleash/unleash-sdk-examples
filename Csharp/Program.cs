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
            SendMetricsInterval = TimeSpan.FromSeconds(1),
            CustomHttpHeaders = new Dictionary<string, string>()
            {
                {"Authorization",token}
            }
        };

        var unleash =  new DefaultUnleash(settings);

        while (true) {
            Console.WriteLine($"'{flag}' is enabled: {unleash.IsEnabled(flag)}");
            await Task.Delay(1000);
        }
    }
}
