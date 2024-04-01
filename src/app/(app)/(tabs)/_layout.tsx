import React from "react";
import { Tabs } from "expo-router";

import { Home, Pin, Envelope, Settings } from "../../../components/icons";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName={"/profile"}
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <Home fill={color} />,
        }}
      />
      <Tabs.Screen
        name="around"
        options={{
          tabBarIcon: ({ color }) => <Pin fill={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => <Envelope fill={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => <Settings fill={color} />,
        }}
      />
    </Tabs>
  );
}
