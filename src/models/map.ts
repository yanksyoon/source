import { LatLng } from "react-native-maps";
import { User, generateRandUser } from "./user";
import { makeId } from "utils/random";

export type UserEvent = {
  id: string;
  user: User;
  location: LatLng;
  created_at: string;
  date: string;
  title: string;
  description: string;
  type: string;
};

export function generateRandomEvent(loc: LatLng): UserEvent {
  return {
    id: makeId(14),
    user: generateRandUser(),
    location: loc,
    created_at: new Date().toDateString(),
    date: new Date().toDateString(),
    title: ["A party", "Networking!!!", "Tech nerds", "Dance club"][
      Math.round(Math.random()) * 3
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: ["party", "networking", "chill"][Math.round(Math.random()) * 2],
  };
}
