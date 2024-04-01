import { View, Text } from "react-native";
import { useSession } from "../../../../../providers/auth";

export default function Notifications() {
  const { signOut } = useSession();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text onPress={signOut}>Notifications</Text>
    </View>
  );
}
