import { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfilePage from "pages/Profile";
import FriendsPage from "pages/Friends";
import ScribblesPage from "pages/Scribbles";
import PhotosPage from "pages/Photos";
import GuestBookPage from "pages/Guestbook";
import { PrivateStackParamList } from "navigation/types";

export type ExtraScreenType = {
  name: keyof PrivateStackParamList;
  component: any;
  headerShown?: boolean;
};

interface ICreatePrivateSharedStackRoutesProps {
  extraScreens: ExtraScreenType[];
  initialRouteName: keyof PrivateStackParamList;
}

// Do not pass values that create screens from the component directly. Define screens as constant
// outside of the component, within the app and pass it in.
// i.e.
// function Component(){return <CreatePrivateSharedStackRoutes screens={[...]} />} // NOT GOOD
// const EXTRA_SCREENS = []
// function Component(){return <CreatePrivateSharedStackRoutes screens={EXTRA_SCREENS} />} // GOOD
export default function CreatePrivateSharedStackRoutes(
  props: ICreatePrivateSharedStackRoutesProps
) {
  const PrivateSharedStack = useMemo(createNativeStackNavigator, [
    props.extraScreens,
  ]);
  return (
    <PrivateSharedStack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: navigation.canGoBack(),
      })}
      initialRouteName={props.initialRouteName}
    >
      <PrivateSharedStack.Screen name="Friends" component={FriendsPage} />
      <PrivateSharedStack.Screen name="Guestbook" component={GuestBookPage} />
      <PrivateSharedStack.Screen name="Photos" component={PhotosPage} />
      <PrivateSharedStack.Screen
        name="Profile"
        component={ProfilePage}
        initialParams={{ userId: null }}
      />
      <PrivateSharedStack.Screen name="Scribbles" component={ScribblesPage} />
      {props.extraScreens.map((screen) => (
        <PrivateSharedStack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: screen.headerShown }}
        />
      ))}
    </PrivateSharedStack.Navigator>
  );
}
