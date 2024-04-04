import { FlatList, StyleSheet } from "react-native";
import PhotoCard from "../../components/PhotoCard";

const LOREM_IPSUM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function PhotosPage() {
  return (
    <FlatList
      style={styles.container}
      data={Array(100).fill(null)}
      renderItem={() => (
        <PhotoCard
          photoUrl="https://picsum.photos/seed/696/3000/2000"
          user={{
            username: "Yanks",
            profileImageUrl: "https://picsum.photos/seed/696/3000/2000",
          }}
          captions={LOREM_IPSUM}
          date={"2023/04/01 19:17"}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
