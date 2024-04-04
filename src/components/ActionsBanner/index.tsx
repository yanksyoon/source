import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IActionsBannerProps {
  liked?: boolean;
  onLikeClick?: () => void;
  onCommentClick?: () => void;
  onShareClick?: () => void;
}

export default function ActionsBanner(props: IActionsBannerProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onLikeClick}>
        <Text style={styles.text}>{props.liked ? "❤️" : "🤍"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onCommentClick}>
        <Text style={styles.text}>💬</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onShareClick}>
        <Text style={styles.text}>🍕</Text>
      </TouchableOpacity>
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
