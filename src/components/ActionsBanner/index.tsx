import { StyleSheet, Text, View } from "react-native";

export default function ActionsBanner() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>🤍</Text>
      </View>
      <View>
        <Text style={styles.text}>💬</Text>
      </View>
      <View>
        <Text style={styles.text}>🍕</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    padding: 8,
  },
  text: {
    fontSize: 16,
  },
});
