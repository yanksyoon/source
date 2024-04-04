import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSession } from "providers/auth";
import SignIn from "../sign-in";
import Profiletab from "../tabs/profile";
import AroundTab from "../tabs/around";
import NotificationsTab from "../tabs/notifications";
import SettingsTab from "../tabs/settings";
import { Envelope, Home, Pin, Settings } from "components/icons";

export default function AuthRoutes() {
  const { session, isLoading } = useSession();

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (!session) return <PublicRoutes />;
  return <PrivateTabRoutes />;
}

const PublicStack = createNativeStackNavigator();
function PublicRoutes() {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="Sign In" component={SignIn} />
    </PublicStack.Navigator>
  );
}

const PrivateTabStack = createBottomTabNavigator();
function PrivateTabRoutes() {
  return (
    <PrivateTabStack.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <PrivateTabStack.Screen
        name="ProfileTab"
        component={Profiletab}
        options={{
          tabBarIcon: ({ color }) => <Home fill={color} />,
        }}
      />
      <PrivateTabStack.Screen
        name="AroundTab"
        component={AroundTab}
        options={{
          tabBarIcon: ({ color }) => <Pin fill={color} />,
        }}
      />
      <PrivateTabStack.Screen
        name="NotificationsTab"
        component={NotificationsTab}
        options={{
          tabBarIcon: ({ color }) => <Envelope fill={color} />,
        }}
      />
      <PrivateTabStack.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          tabBarIcon: ({ color }) => <Settings fill={color} />,
        }}
      />
    </PrivateTabStack.Navigator>
  );
}
