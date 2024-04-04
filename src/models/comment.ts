import { makeId } from "utils/random";
import { User, generateRandUser } from "./user";

export type GuestComment = {
  id: string;
  user: User;
  text: string;
  created_at: string;
  numLikes: number;
  users: User[];
  liked: boolean;
};

const RANDOM_COMMENTS = [
  "For anyone reading this after me that is pursuing a generic usage of useNavigation that includes push and pop",
  "it's literally impossible to automatically type this.",
  "Hey! This issue is closed and isn't watched by the core team. You are welcome to discuss the issue with others in this thread, but if you think this issue is still valid and needs to be tracked, please open a new issue with a repro.",
  "I may be reading this wrong, but it looks like push() method isn't apart of the types file.",
  "The problem with the code above is that each time the div is clicked, /home is pushed to the URI history stack even if the current location is /home. So that if the user press the back button it would seem to have no effect.",
];

export function generateRandComment(): GuestComment {
  return {
    id: makeId(14),
    user: generateRandUser(),
    text: RANDOM_COMMENTS[
      Math.round(Math.random() * (RANDOM_COMMENTS.length - 1))
    ],
    created_at: new Date().toDateString(),
    numLikes: Math.round(Math.random() * 300),
    users: Array(Math.round(Math.random() * 5))
      .fill(null)
      .map(generateRandUser),
    liked: Math.random() > 0.5 ? true : false,
  };
}
