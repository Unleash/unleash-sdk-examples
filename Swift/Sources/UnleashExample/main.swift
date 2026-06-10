import Foundation
import SwiftDotenv
import UnleashProxyClientSwift

try? Dotenv.configure()

let unleashUrl = Dotenv["UNLEASH_API_URL"]?.stringValue ?? ""
let clientKey = Dotenv["UNLEASH_CLIENT_KEY"]?.stringValue ?? ""

var unleashClient = UnleashProxyClientSwift.UnleashClient(
    unleashUrl: unleashUrl,
    clientKey: clientKey,
    refreshInterval: 15,
    appName: "codesandbox-swift",
    context: [:]
)

unleashClient.start()

Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
    MainActor.assumeIsolated {
        if unleashClient.isEnabled(name: "example-flag") {
            print("example-flag is enabled")
        } else {
            print("example-flag is disabled")
        }
        fflush(stdout)
    }
}

RunLoop.main.run()
