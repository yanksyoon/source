import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionsBanner from "../ActionsBanner";

interface IPhotoCardProps {
  date: string;
  photoUrl: string;
  user: {
    username: string;
    profileImageUrl: string;
  };
  captions: string;
}

export default function PhotoCard(props: IPhotoCardProps) {
  const [captionsCollapsed, setCaptionsCollabpsed] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={props.photoUrl}
          contentFit="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.userContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profilePhoto}
                source={props.user.profileImageUrl}
                contentFit="cover"
              />
            </View>
            <Text style={styles.username}>{props.user.username}</Text>
          </View>
          <ActionsBanner />
        </View>
        <View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{props.date}</Text>
          </View>
          <Text onPress={() => setCaptionsCollabpsed((prev) => !prev)}>
            {props.captions.length > 100 && captionsCollapsed
              ? props.captions.substring(0, 100).concat("... more")
              : props.captions}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 500,
    marginBottom: 12,
    backgroundColor: "white",
  },
  photoContainer: {
    height: 400,
  },
  contentContainer: {
    padding: 12,
  },
  photo: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  profilePhoto: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
    borderRadius: 24,
  },
  userContainer: {
    height: 36,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  username: {
    fontWeight: "500",
  },
  imageContainer: {
    height: 24,
    width: 24,
    marginRight: 6,
  },
  dateContainer: {
    marginBottom: 4,
  },
  dateText: {
    color: "grey",
    fontSize: 12,
  },
});
