// swift-tools-version:6.0

import PackageDescription

let package = Package(
    name: "UnleashExample",
    platforms: [
        .macOS(.v13),
        .iOS(.v13),
    ],
    dependencies: [
        .package(url: "https://github.com/Unleash/unleash-ios-sdk.git", from: "2.4.0"),
        .package(url: "https://github.com/thebarndog/swift-dotenv.git", from: "2.1.0"),
    ],
    targets: [
        .executableTarget(
            name: "UnleashExample",
            dependencies: [
                .product(name: "UnleashProxyClientSwift", package: "unleash-ios-sdk"),
                .product(name: "SwiftDotenv", package: "swift-dotenv"),
            ]
        )
    ]
)
