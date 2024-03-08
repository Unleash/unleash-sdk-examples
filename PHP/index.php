<?php

require_once __DIR__ . '/vendor/autoload.php';

use Unleash\Client\UnleashBuilder;

$unleash = UnleashBuilder::create()
    ->withAppUrl('http://localhost:4242/api')
    ->withAppName('unleash-sdk-example-php')
    ->withInstanceId('my-unique-instance-id')
    ->withCacheTimeToLive(1)
    ->withHeader('Authorization', '18ebab53095ef7f058f22eba7ad8ee0ed1375142bd2e5bdccd99ec3482554253')
    ->build();

header("Content-Type: application/json");
echo json_encode([
    'feature' => 'dark-mode',
    'enabled' => $unleash->isEnabled('dark-mode'),
]);
