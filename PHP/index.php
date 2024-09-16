<?php

require_once __DIR__ . '/vendor/autoload.php';

use Unleash\Client\UnleashBuilder;

Dotenv\Dotenv::createUnsafeImmutable(__DIR__)->load();

$unleash = UnleashBuilder::create()
    ->withAppUrl($_ENV['UNLEASH_API_URL'])
    ->withAppName('codesandbox-php')
    ->withHeader('Authorization', $_ENV['UNLEASH_API_TOKEN'])
    ->withMetricsInterval(3000)
    ->build();

header("Content-Type: text/plain; charset=utf8");
while(true) {
    if ($unleash->isEnabled("DemoToggle")) {
        echo "Toggle enabled";
    } else {
        echo "Toggle disabled";
    }
    echo PHP_EOL;
    ob_flush();
    flush();
    sleep(1);
}

