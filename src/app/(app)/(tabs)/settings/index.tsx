import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSession } from "../../../../../providers/auth";

export default function Settings() {
  const { signOut } = useSession();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Settings</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text onPress={signOut}>Sign Out</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginTop: 48,
    padding: 12,
  },
  titleText: {
    fontSize: 24,
  },
  bodyContainer: {
    padding: 12,
  },
});
