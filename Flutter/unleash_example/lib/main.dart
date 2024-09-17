import 'package:flutter/material.dart';
import 'package:unleash_proxy_client_flutter/unleash_proxy_client_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Unleash Integration Demo',
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool _flagEnabled = false;

  @override
  void initState() {
    super.initState();
    var unleash = UnleashClient(
      url: Uri.parse('https://app.unleash-hosted.com/demo/api/frontend'),
      clientKey: 'codesandbox:dev.b32907f5ced021c0443ad770b371c81191683c96e6ae8e003876d509',
      refreshInterval: 5,
      appName: 'local-flutter',
    );

    void updateFlagStatus(_) {
      final flagStatus = unleash.isEnabled('example-flag');
      setState(() {
        _flagEnabled = flagStatus;
      });
    }

    unleash.on('ready', updateFlagStatus);
    unleash.on('update', updateFlagStatus);
    unleash.start();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
                'Flag is ${_flagEnabled ? "enabled" : "disabled"}'
            ),
          ],
        ),
      ),
    );
  }
}
