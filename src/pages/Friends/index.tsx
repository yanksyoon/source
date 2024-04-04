import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image } from "expo-image";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function FriendsPage() {
  return (
    <FlatList
      style={styles.container}
      data={Array(30).fill(null)}
      renderItem={() => (
        <FriendItem
          user={{
            profileImageUrl:
              "https://i.pinimg.com/originals/a6/8d/7a/a68d7ae51476d361e344b457bfc5453d.jpg",
            username: "Macbook M3",
            bio: "I am a laptop 🚀",
            status: "🕶️🕶️🕶️",
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

interface IFriendItemProps {
  user: {
    profileImageUrl: string;
    username: string;
    bio: string;
    status: string;
  };
}

function FriendItem(props: IFriendItemProps) {
  const { push } = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={friendStyles.container}>
      <TouchableOpacity
        style={friendStyles.profileContainer}
        onPress={() => push("Profile", { userId: props.user.username })}
      >
        <View style={friendStyles.imageContainer}>
          <Image
            style={friendStyles.profilePhoto}
            source={props.user.profileImageUrl}
            contentFit="cover"
          />
        </View>
        <Text style={friendStyles.username}>{props.user.username}</Text>
      </TouchableOpacity>
      <View>
        <Text style={friendStyles.status}>{props.user.status}</Text>
      </View>
      <View style={friendStyles.bioContainer}>
        <Text style={friendStyles.bio}>{props.user.bio}</Text>
      </View>
    </View>
  );
}

const friendStyles = StyleSheet.create({
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
  status: {
    color: "grey",
    fontSize: 12,
  },
  bioContainer: {
    marginTop: 6,
  },
  bio: {
    fontSize: 16,
  },
});
