import {
  FlagProvider,
  useFlag,
  useFlagsStatus,
} from "@unleash/unleash-react-native-sdk";
import { StyleSheet, Text, View } from "react-native";

const config = {
  url: process.env.EXPO_PUBLIC_UNLEASH_URL,
  clientKey: process.env.EXPO_PUBLIC_UNLEASH_CLIENT_KEY,
  appName: "react-native-example",
};

function FlagStatus() {
  const { flagsReady } = useFlagsStatus();
  const isEnabled = useFlag("example-flag");

  if (!flagsReady) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isEnabled ? (
        <Text style={styles.text}>Example flag is enabled</Text>
      ) : (
        <Text style={styles.text}>Example flag is disabled</Text>
      )}
    </View>
  );
}

export default function App() {
  return (
    <FlagProvider config={config}>
      <FlagStatus />
    </FlagProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
  },
});
