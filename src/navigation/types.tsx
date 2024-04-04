import type { StackScreenProps } from "@react-navigation/stack";

export type PublicStackParamList = {
  SignIn: null;
};

export type PrivateStackParamList = {
  Friends: undefined;
  Guestbook: undefined;
  Photos: undefined;
  Profile: ProfileTabParamList;
  Scribbles: undefined;

  Around: undefined;
};

export type ProfileTabParamList = {
  userId?: string;
};

export type RootStackParamList = {};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends PublicStackParamList,
        PrivateStackParamList {}
  }
}
