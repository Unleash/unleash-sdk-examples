<?php

require_once __DIR__ . '/vendor/autoload.php';

use Unleash\Client\UnleashBuilder;

Dotenv\Dotenv::createUnsafeImmutable(__DIR__)->load();

@ini_set('zlib.output_compression',0);
@ini_set('implicit_flush',1);
@ob_end_clean();
ob_implicit_flush(true);

$unleash = UnleashBuilder::create()
    ->withAppUrl($_ENV['UNLEASH_API_URL'])
    ->withAppName('codesandbox-php')
    ->withHeader('Authorization', $_ENV['UNLEASH_API_TOKEN'])
    ->withInstanceId(hash_file('sha256', __FILE__))
    ->withMetricsInterval(5000)
    ->build();

$unleash->register();
$startTime = time();

header("Content-Type: text/plain; charset=utf8");
echo str_pad(' ',4096, "\u{200B}")."\n"; // Fill browser buffer to force flush

$i = 0;
while ($i++ < 30) {
    if ($unleash->isEnabled("example-flag")) {
        echo "example-flag: enabled \n";
    } else {
        echo "example-flag: disabled \n";
    }

    sleep(3);
}
