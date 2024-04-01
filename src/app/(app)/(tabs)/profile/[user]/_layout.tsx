import { Stack } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";

export default function ProfileLayout() {
  const { params, segments } = useRouteInfo();
  const segment = segments[segments.length - 1];
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Back",
        headerBackVisible: true,
        headerTransparent: true,
        headerTitle: formatHeaderTitle(params["user"] as string, segment),
      }}
    />
  );
}

function formatHeaderTitle(user: string, page: string) {
  switch (page) {
    case "friends":
      return `${user}'s friends`;
    case "guestbook":
      return `${user}'s guestbook`;
    case "photos":
      return `${user}'s photos`;
    case "scribbles":
      return `${user}'s scribbles`;
    case "profile":
    case "[user]":
      return "";
    default:
      return "Non-recheable";
  }
}
