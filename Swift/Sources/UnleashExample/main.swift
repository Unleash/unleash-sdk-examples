import Foundation
import UnleashProxyClientSwift

var unleashClient =  UnleashProxyClientSwift.UnleashClientBase(
    unleashUrl: "https://app.unleash-hosted.com/demo/api/frontend",
    clientKey: "demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d",
    refreshInterval: 15,
    appName: "codesandbox-swift",
    context: [:]
)

unleashClient.start()

Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
    print("Is enabled", unleashClient.isEnabled(name: "example-flag"))
}

RunLoop.main.run()