import { NavigationContainer } from "@react-navigation/native";
import { SessionProvider } from "providers/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthRoutes from "routes";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SessionProvider>
          <AuthRoutes />
        </SessionProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
