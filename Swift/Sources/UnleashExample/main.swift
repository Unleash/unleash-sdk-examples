import Foundation
import UnleashProxyClientSwift

var unleashClient =  UnleashProxyClientSwift.UnleashClientBase(
    unleashUrl: "https://app.unleash-hosted.com/demo/api/frontend",
    clientKey: "codesandbox:dev.b32907f5ced021c0443ad770b371c81191683c96e6ae8e003876d509",
    refreshInterval: 15,
    appName: "codesandbox-swift",
    context: [:]
)

unleashClient.start()

Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
    print("Is enabled", unleashClient.isEnabled(name: "example-flag"))
}

RunLoop.main.run()