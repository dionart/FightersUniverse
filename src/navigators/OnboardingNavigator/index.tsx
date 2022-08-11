import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";
import theme from "@/config/theme";
import { DetectPlatform } from "@/utils/detect-platform";
import { Onboarding } from "@/screens";
import { OnboardingNavigatorParamList } from "./onboarding-navigator-param-list";

const Stack = createNativeStackNavigator<OnboardingNavigatorParamList>();

export const OnboardingNavigator = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.blue["400"]}
        barStyle={DetectPlatform("dark-content", "light-content")}
      />

      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={Onboarding}
        />
      </Stack.Navigator>
    </>
  );
};
