import { useCallback, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MapView, { Region, Marker, Callout } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  LocationObject,
  getCurrentPositionAsync,
} from "expo-location";
import { Image } from "expo-image";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { UserEvent, generateRandomEvent } from "models/map";
import ReadMoreText from "components/ReadMoreText";
import { useNavigation } from "@react-navigation/native";
import CreatePrivateSharedStackRoutes, { ExtraScreenType } from "routes/shared";

const ExtraScreens: ExtraScreenType[] = [
  { name: "Around", component: AroundPage, headerShown: false },
];

export default function AroundTab() {
  return (
    <CreatePrivateSharedStackRoutes
      extraScreens={ExtraScreens}
      initialRouteName="Around"
    />
  );
}

async function getCurrentLocation(): Promise<LocationObject | null> {
  try {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return null;
    }
    let location = await getCurrentPositionAsync({});
    return location;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const LAT_DELTA_IN_M = 111111;
const LON_DELTA_IN_M = 111139;

function AroundPage() {
  const [currentLocation, setCurrentLocation] = useState<null | Region>(null);
  const [events, setEvents] = useState<UserEvent[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [bottomSheetOpenIndex, setBottomSheetOpenIndex] = useState(-1);
  const [selectedEvent, setSelectedEvent] = useState<null | UserEvent>(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    // set initial region
    getCurrentLocation().then((res) => {
      if (!res) return;
      setCurrentLocation({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
        latitudeDelta: 5000 / LAT_DELTA_IN_M, // 5KM
        longitudeDelta: 5000 / LON_DELTA_IN_M, // 5KM
      });

      setEvents(
        Array(50)
          .fill(null)
          .map(() =>
            generateRandomEvent({
              latitude:
                res.coords.latitude +
                (Math.random() / 10) * (Math.random() > 0.5 ? 1 : -1),
              longitude:
                res.coords.longitude +
                (Math.random() / 50) * (Math.random() > 0.5 ? 1 : -1),
            })
          )
      );
    });
  }, []);

  const onMarkerPress = useCallback((event: UserEvent) => {
    setSelectedEvent(event);
  }, []);

  const onCalloutPress = useCallback(() => {
    setBottomSheetOpenIndex(0);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetOpenIndex(index);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={currentLocation}>
        {events.map((event) => (
          <Marker
            key={event.id}
            coordinate={event.location}
            onPress={() => onMarkerPress(event)}
          >
            <Callout tooltip onPress={onCalloutPress}>
              <View style={calloutStyles.container}>
                <View style={calloutStyles.headerContainer}>
                  <Image
                    style={calloutStyles.image}
                    source={event.user.profileImage}
                  />
                  <View>
                    <Text style={calloutStyles.title}>{event.title}</Text>
                    <Text>{event.user.name}</Text>
                  </View>
                </View>
                <View>
                  <Text style={calloutStyles.description} numberOfLines={2}>
                    {event.description}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        onChange={handleSheetChanges}
        index={bottomSheetOpenIndex}
        snapPoints={["25%", "50%", "95%"]}
      >
        {selectedEvent ? (
          <BottomSheetView style={bottomSheetStyles.container}>
            <TouchableOpacity
              style={bottomSheetStyles.headerContainer}
              onPress={() =>
                navigate("Profile", { userId: selectedEvent.user.id })
              }
            >
              <Image
                style={bottomSheetStyles.image}
                source={selectedEvent.user.profileImage}
              />
              <View>
                <Text style={bottomSheetStyles.title}>
                  {selectedEvent.title}
                </Text>
                <Text>{selectedEvent.user.name}</Text>
              </View>
            </TouchableOpacity>
            <View>
              <View style={bottomSheetStyles.metaContainer}>
                <Text style={bottomSheetStyles.type}>{selectedEvent.type}</Text>
                <Text style={bottomSheetStyles.date}>{selectedEvent.date}</Text>
              </View>
              <ReadMoreText
                style={bottomSheetStyles.description}
                length={150}
                content={selectedEvent.description}
              />
            </View>
          </BottomSheetView>
        ) : null}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

const bottomSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 6,
  },
  title: {
    fontWeight: "500",
  },
  metaContainer: {
    marginBottom: 4,
  },
  type: {
    color: "grey",
  },
  date: {
    color: "grey",
  },
  description: {
    flexWrap: "wrap",
  },
});

const calloutStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 80,
    width: 200,
    backgroundColor: "white",
    padding: 5,
    overflow: "hidden",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 2,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 6,
  },
  title: {
    fontWeight: "500",
  },
  description: {
    flexWrap: "wrap",
  },
});
