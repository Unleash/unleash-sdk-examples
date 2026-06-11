import { FlagProvider } from "@unleash/unleash-react-native-sdk";
import FlagStatus from "./components/FlagStatus";

const config = {
  url: process.env.EXPO_PUBLIC_UNLEASH_URL,
  clientKey: process.env.EXPO_PUBLIC_UNLEASH_CLIENT_KEY,
  appName: "react-native-example",
};

export default function App() {
  return (
    <FlagProvider config={config}>
      <FlagStatus />
    </FlagProvider>
  );
}
