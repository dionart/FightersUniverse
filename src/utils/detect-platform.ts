import { Platform } from "react-native";

export function DetectPlatform(option1: any, option2: any) {
  return Platform.OS === "ios" ? option1 : option2;
}
