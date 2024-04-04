import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PrivateStackParamList, ProfileTabParamList } from "navigation/types";

const MENU_ITEMS: {
  to: keyof ReactNavigation.RootParamList;
  name: string;
  numItems: number;
  new: boolean;
}[] = [
  {
    to: "Photos",
    name: "Photos",
    numItems: 12,
    new: true,
  },
  {
    to: "Scribbles",
    name: "Scribbles",
    numItems: 99,
    new: false,
  },
  {
    to: "Guestbook",
    name: "Guestbook",
    numItems: 24,
    new: false,
  },
  { to: "Friends", name: "Friends", numItems: 300, new: false },
];

export default function ProfilePage() {
  const { params } = useRoute<RouteProp<PrivateStackParamList, "Profile">>();
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
      <ProfileHeader userId={params?.userId || "self"} />
      <View style={styles.menuContainer}>
        {MENU_ITEMS.map((item) => (
          <MenuButton
            key={item.name}
            name={item.name}
            to={item.to}
            numItems={item.numItems}
            new={item.new}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
  },
});

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface IProfileHeaderParams {
  userId: string;
}

function ProfileHeader(props: IProfileHeaderParams) {
  const isSelf = true;

  const onEditPressed = () => {};

  return (
    <View style={profileStyles.imageContainer}>
      <ImageBackground
        style={profileStyles.image}
        source="https://static.vecteezy.com/system/resources/previews/023/018/274/non_2x/super-mario-world-game-elements-pixel-arcade-game-editorial-icons-free-vector.jpg"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={profileStyles.blurGradient}
        >
          <View style={profileStyles.profileHeaderContainer}>
            <View style={profileStyles.nameStatusContainer}>
              <Text style={profileStyles.nameText}>Yanks Yoon</Text>
              <Text style={profileStyles.statusText}>Status...</Text>
            </View>
            <View style={profileStyles.bioContainer}>
              <Text style={profileStyles.bio}>Hello world!</Text>
              <Text style={profileStyles.bio}>{props.userId}</Text>
            </View>
          </View>
          {isSelf ? (
            <TouchableOpacity
              style={profileStyles.editButtonStyle}
              onPress={onEditPressed}
            >
              <Text>🖊️</Text>
            </TouchableOpacity>
          ) : null}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 450,
    backgroundColor: "#f7f1e7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blurGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  editButtonStyle: {
    alignSelf: "flex-end",
    padding: 6,
    position: "absolute",
    bottom: 12,
    right: 12,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  profileHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 12,
    paddingBottom: 0,
  },
  nameStatusContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
  },
  nameText: {
    fontWeight: "300",
    fontSize: 36,
    marginRight: 24,
    color: "rgba(237, 237, 237,1)",
  },
  statusText: {
    color: "rgba(237, 237, 237,1)",
  },
  bioContainer: {
    marginTop: 12,
    marginBottom: 24,
  },
  bio: {
    color: "rgba(237, 237, 237,1)",
  },
});

interface IMenuButtonProps {
  to: keyof ReactNavigation.RootParamList;
  name: string;
  numItems?: number;
  new?: boolean;
}

function MenuButton(props: IMenuButtonProps) {
  const { push } = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      key={props.name}
      style={buttonStyles.button}
      onPress={() => push(props.to, { userId: props.name })} // TODO: proper user Id
    >
      <View style={buttonStyles.container}>
        <View>
          <Text style={buttonStyles.name}>{props.name}</Text>
        </View>
        <View>
          <Text style={buttonStyles.itemMeta}>
            {props.numItems > 100 ? "99+" : props.numItems}
          </Text>
        </View>
        <View>
          <Text style={buttonStyles.newText}>{props.new ? "New!" : null}</Text>
        </View>
      </View>
      <View>
        <Text style={buttonStyles.chevron}>{"›"}</Text>
      </View>
    </TouchableOpacity>
  );
}
const buttonStyles = StyleSheet.create({
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginTop: 6,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 36,
    fontWeight: "300",
  },
  newText: {
    marginLeft: 6,
    marginTop: 14,
    fontWeight: "300",
  },
  itemMeta: {
    fontSize: 12,
    fontWeight: "200",
    marginLeft: 6,
    marginTop: 14,
  },
  chevron: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 2,
    fontSize: 42,
  },
});
