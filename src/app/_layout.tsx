import { Slot } from "expo-router";
import { SessionProvider } from "../../providers/auth";
import { Text, View } from "react-native";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
