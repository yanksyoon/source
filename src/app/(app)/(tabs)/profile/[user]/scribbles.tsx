import { FlatList, StyleSheet, Text, View } from "react-native";
import ScribbleCard from "../../../../../components/ScribbleCard";

const SCRIBBLE_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function ScribblesPage() {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Scribbles</Text>
      </View>
      <FlatList
        data={Array(100).fill(null)}
        renderItem={(item) => (
          <ScribbleCard
            date="2024/04/01 10:47"
            user={{
              username: "yanks",
              profileImageUrl: "https://picsum.photos/seed/696/3000/2000",
            }}
            text={SCRIBBLE_TEXT}
            title={"Hello World!"}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 94,
    padding: 12,
  },
  titleText: {
    fontSize: 24,
  },
});
