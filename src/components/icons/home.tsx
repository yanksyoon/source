import Svg, { Path, SvgProps } from "react-native-svg";

export default function Home(props: SvgProps) {
  return (
    <Svg width={50} height={50} viewBox="0 0 100 90" {...props}>
      <Path d="M72.5,48.91v-5h-5v-5v-5v-5h-5v5h-5v-5h-5v-5h-5v5h-5v5h-5v5h-5v5h-5v5h-5v5h5v2.5v2.5v2.5v2.5v2.5v2.5v2.5v2.5  h5H35h2.5H40h2.5H45h2.5H50h2.5H55h2.5H60h2.5H65h2.5h5v-2.5v-2.5v-2.5v-2.5v-2.5v-2.5v-2.5v-2.5h5v-5H72.5z M50,68.91h-2.5v-2.5  v-2.5v-2.5v-2.5H50h2.5v2.5v2.5v2.5v2.5H50z M67.5,56.41v2.5v2.5v2.5v2.5v2.5H65h-2.5H60h-2.5v-2.5v-2.5v-2.5v-2.5v-5H55h-2.5H50  h-2.5H45h-2.5v5v2.5v2.5v2.5v2.5H40h-2.5H35h-2.5v-2.5v-2.5v-2.5v-2.5v-2.5v-2.5v-5h5v-5h5v-5h5v-5h5v5h5v5h5v5h5v5V56.41z" />
    </Svg>
  );
}
