// swift-tools-version:5.6

import PackageDescription

let package = Package(
    name: "UnleashExample",
    platforms: [
            .macOS(.v10_15),
            .iOS(.v12),
    ],
    dependencies: [
        .package(url: "https://github.com/Unleash/unleash-ios-sdk.git", branch: "main")
    ],
    targets: [
        .executableTarget(
            name: "UnleashExample",
            dependencies: [
                .product(name: "UnleashProxyClientSwift", package: "unleash-ios-sdk")
            ]
        )
    ]
)
