import { StyleSheet, Text, View } from "react-native";
import ActionsBanner from "../ActionsBanner";
import ReadMoreText from "components/ReadMoreText";

interface IScribbleCardProps {
  date: string;
  user: {
    username: string;
    profileImageUrl: string;
  };
  title: string;
  text: string;
}
export default function ScribbleCard(props: IScribbleCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
      <View>
        <ReadMoreText
          style={styles.contentText}
          content={props.text}
          length={300}
        />
      </View>
      <ActionsBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  titleContainer: {
    marginBottom: 2,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  dateContainer: {
    marginBottom: 2,
  },
  dateText: {
    color: "grey",
    fontSize: 12,
  },
  contentText: {
    fontSize: 16,
  },
});
