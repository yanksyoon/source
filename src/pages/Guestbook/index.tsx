import { useCallback, useRef, useState } from "react";
import { Image } from "expo-image";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { GuestComment, generateRandComment } from "models/comment";
import ReadMoreText from "components/ReadMoreText";
import ActionsBanner from "components/ActionsBanner";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export default function GuestBookPage() {
  const [guestComents, setGuestComments] = useState(
    Array(30).fill(null).map(generateRandComment)
  );
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const [bottomSheetState, setBottomSheetState] = useState<{
    isOpen: boolean;
    comment?: GuestComment;
  }>({ isOpen: false });

  const onCommentPress = (comment: GuestComment) => {
    setBottomSheetState((prev) => {
      if (prev.isOpen && prev.comment?.id === comment.id) {
        bottomSheetRef.current?.close();
        return { isOpen: false, comment: comment };
      }
      bottomSheetRef.current?.snapToIndex(1);
      return { isOpen: true, comment: comment };
    });
  };

  return (
    <View>
      <View style={{}}>
        <FlatList
          style={styles.container}
          data={guestComents}
          renderItem={({ item }) => (
            <GuestCommentItem onPress={onCommentPress} comment={item} />
          )}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        index={-1}
        snapPoints={["25%", "50%", "95%"]}
      >
        {bottomSheetState.comment ? (
          <BottomSheetView style={{ zIndex: 999 }}>
            <View>
              <Text>{bottomSheetState.comment.text}</Text>
            </View>
          </BottomSheetView>
        ) : null}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    zIndex: 1,
  },
});

interface IGuestCommentProps {
  comment: GuestComment;
  onPress: (comment: GuestComment) => void;
}

function GuestCommentItem(props: IGuestCommentProps) {
  const { push } = useNavigation<StackNavigationProp<ParamListBase>>();
  const [liked, setLiked] = useState(props.comment.liked);

  const onLikePress = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  return (
    <View style={commentStyles.container}>
      <TouchableOpacity
        style={commentStyles.profileContainer}
        onPress={() => push("Profile", { userId: props.comment.user.id })}
      >
        <View style={commentStyles.imageContainer}>
          <Image
            style={commentStyles.profilePhoto}
            source={props.comment.user.profileImage}
            contentFit="cover"
          />
        </View>
        <Text style={commentStyles.username}>{props.comment.user.name}</Text>
      </TouchableOpacity>
      <View>
        <Text style={commentStyles.date}>{props.comment.created_at}</Text>
      </View>
      <View style={commentStyles.commentContainer}>
        <ReadMoreText
          style={commentStyles.comment}
          content={props.comment.text}
        />
      </View>
      <ActionsBanner
        liked={liked}
        onLikeClick={onLikePress}
        onCommentClick={() => props.onPress(props.comment)}
      />
    </View>
  );
}

const commentStyles = StyleSheet.create({
  container: {
    marginTop: 18,
    zIndex: 2,
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
