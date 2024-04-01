import { StyleSheet, Text, View } from "react-native";
import ActionsBanner from "../ActionsBanner";
import { useState } from "react";

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
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
      <View>
        <Text
          style={styles.contentText}
          onPress={() => setExpanded((prev) => !prev)}
        >
          {props.text.length > 300 && !expanded
            ? props.text.substring(0, 299).concat("... more")
            : props.text}
        </Text>
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
