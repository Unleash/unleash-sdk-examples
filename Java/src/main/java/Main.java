package main.java;

import io.getunleash.DefaultUnleash;
import io.getunleash.Unleash;
import io.getunleash.util.UnleashConfig;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        var flag = "example-flag";
        var url = "https://app.unleash-hosted.com/demo/api";
        var token = "demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d";

        UnleashConfig config = UnleashConfig.builder()
                .appName("codesandbox-java")
                .unleashAPI(url)
                .apiKey(token)
                .sendMetricsInterval(5)
                .build();

        Unleash unleash = new DefaultUnleash(config);

        while (true) {
            boolean featureEnabled = unleash.isEnabled(flag);
            System.out.println("Feature enabled: " + featureEnabled);
            Thread.sleep(1000);
        }
    }
}
