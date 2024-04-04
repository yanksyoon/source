import { makeId } from "utils/random";

export type User = {
  id: string;
  name: string;
  profileImage: string;
  status: string;
  bio: string;
  created_at: string;
};

export function generateRandUser(): User {
  return {
    id: makeId(14),
    name: ["Yanks Yoon", "Rando user", "A mug cup is my name"][
      Math.round(Math.random() * 2)
    ],
    profileImage: [
      "https://i.pinimg.com/originals/a6/8d/7a/a68d7ae51476d361e344b457bfc5453d.jpg",
      "https://art.pixilart.com/674eb96fab243f8.gif",
      "https://static.vecteezy.com/system/resources/previews/023/018/274/non_2x/super-mario-world-game-elements-pixel-arcade-game-editorial-icons-free-vector.jpg",
      "https://picsum.photos/seed/696/3000/2000",
    ][Math.round(Math.random() * 3)],
    status: "hello world",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_at: Date().toString(),
  };
}
