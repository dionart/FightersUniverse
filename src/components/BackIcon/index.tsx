import Svg, { Path } from "react-native-svg";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "@/config/theme";

interface BackIconProps {
  onPress?: () => void;
}

export const BackIcon: React.FC<BackIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width="14" height="22" viewBox="0 0 14 22" fill="none">
        <Path
          d="M10.7017 21.4141C10.9707 21.6738 11.2954 21.8223 11.6851 21.8223C12.4736 21.8223 13.0952 21.2007 13.0952 20.4214C13.0952 20.0317 12.9375 19.6792 12.6592 19.4009L4.25391 11.2925L12.6592 3.19336C12.9375 2.91504 13.0952 2.55322 13.0952 2.17285C13.0952 1.39355 12.4736 0.771973 11.6851 0.771973C11.2954 0.771973 10.98 0.911133 10.7017 1.18018L1.40576 10.1699C1.07178 10.4946 0.895508 10.8657 0.895508 11.3018C0.895508 11.7285 1.0625 12.0811 1.40576 12.4243L10.7017 21.4141Z"
          fill={theme.colors.secondary}
        />
      </Svg>
    </TouchableOpacity>
  );
};
