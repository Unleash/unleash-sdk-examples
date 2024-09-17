// swift-tools-version:5.6

import PackageDescription

let package = Package(
    name: "UnleashExample",
    platforms: [
            .macOS(.v10_15),
            .iOS(.v12),
    ],
    dependencies: [
        .package(url: "https://github.com/Unleash/unleash-proxy-client-swift.git", branch: "main")
    ],
    targets: [
        .executableTarget(
            name: "UnleashExample",
            dependencies: [
                .product(name: "UnleashProxyClientSwift", package: "unleash-proxy-client-swift")
            ],
            swiftSettings: [
                .define("USE_FOUNDATION")
            ]
        )
    ]
)
