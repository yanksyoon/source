import { useState } from "react";
import { Text, TextProps } from "react-native";

type ReadMoreProps = {
  content: string;
  length?: number;
};

export default function ReadMoreText(props: TextProps & ReadMoreProps) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <Text {...props} onPress={() => setIsHidden((prev) => !prev)}>
      {props.content.length > (props.length || 100) && isHidden
        ? props.content
            .substring(0, props.length || 100)
            .concat("... Read more")
        : props.content}
    </Text>
  );
}
