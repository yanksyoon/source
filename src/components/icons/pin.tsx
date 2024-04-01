import Svg, { Rect, Path, SvgProps } from "react-native-svg";

export default function Pin(props: SvgProps) {
  return (
    <Svg width={30} height={30} viewBox="0 0 100 90" {...props}>
      <Rect x="35.0867425" y="5.0107549" width="30.0131856" height="10" />
      <Rect x="35.0590036" y="75.0103615" width="10.0131856" height="10" />
      <Rect x="45.0721893" y="85.0103615" width="10.0131856" height="10" />
      <Rect x="65.0721893" y="65.0103615" width="10.0131856" height="10" />
      <Rect x="65.0590036" y="15.0103615" width="10.0131856" height="10" />
      <Rect x="25.0590036" y="65.0103615" width="10.0131856" height="10" />
      <Rect x="25.0590036" y="15.0103615" width="10.0131856" height="10" />
      <Rect x="55.0590036" y="75.0103615" width="10.0131856" height="10" />
      <Path d="M35.0721893,25.0103615h-.0131836v30h30.0131836V25.0103615h-30Zm19.9868164,20h-9.9868164v-10h9.9868164v10Z" />
      <Rect x="75.0721893" y="25.0103615" width="10" height="40" />
      <Path d="M25.0749379,25.0103615H15.0749379v39.980957h10c-.0095215-13.2897949,.0095215-26.6912842,0-39.980957Z" />
    </Svg>
  );
}
