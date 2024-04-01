import { Image } from "expo-image";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ActionsBanner from "../../../../../components/ActionsBanner";

export default function GuestBookPage() {
  return (
    <FlatList
      style={styles.container}
      data={Array(30).fill(null)}
      renderItem={() => (
        <GuestComment
          user={{
            profileImageUrl: "https://art.pixilart.com/674eb96fab243f8.gif",
            username: "Yanks",
          }}
          date="2024/04/02 12:16"
          comment="Nice"
        />
      )}
    >
      <Text>Guest Book</Text>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 96,
    padding: 12,
  },
});

interface IGuestCommentProps {
  user: {
    profileImageUrl: string;
    username: string;
  };
  date: string;
  comment: string;
}

function GuestComment(props: IGuestCommentProps) {
  return (
    <View style={commentStyles.container}>
      <View style={commentStyles.profileContainer}>
        <View style={commentStyles.imageContainer}>
          <Image
            style={commentStyles.profilePhoto}
            source={props.user.profileImageUrl}
            contentFit="cover"
          />
        </View>
        <Text style={commentStyles.username}>{props.user.username}</Text>
      </View>
      <View>
        <Text style={commentStyles.date}>{props.date}</Text>
      </View>
      <View style={commentStyles.commentContainer}>
        <Text style={commentStyles.comment}>{props.comment}</Text>
      </View>
      <ActionsBanner />
    </View>
  );
}

const commentStyles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 24,
    width: 24,
    marginRight: 6,
  },
  profilePhoto: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
    borderRadius: 24,
  },
  username: {
    fontWeight: "500",
  },
  date: {
    color: "grey",
    fontSize: 12,
  },
  commentContainer: {
    marginTop: 6,
  },
  comment: {
    fontSize: 16,
  },
});
