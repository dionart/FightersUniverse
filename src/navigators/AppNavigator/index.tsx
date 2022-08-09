import theme from "@/config";
import { FighterDetails } from "@/screens/FighterDetails";
import { Home } from "@/screens/Home";
import { Onboarding } from "@/screens/Onboarding";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigatorParamList } from "./app-navigator-param-list";

const Stack = createNativeStackNavigator();

type ScreenRouteProp = RouteProp<AppNavigatorParamList, "FighterDetails">;

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={theme.colors.blue["100"]}
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor:
                Platform.OS === "android"
                  ? theme.colors.secondary
                  : theme.colors.white,
            },
            headerTintColor:
              Platform.OS === "android"
                ? theme.colors.white
                : theme.colors.grey["900"],
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding"
            component={Onboarding}
          />
          <Stack.Screen
            options={{
              headerBackVisible: false,
              headerBackTitleVisible: false,
              headerTitleAlign: "left",
            }}
            name="Fighters"
            component={Home}
          />
          <Stack.Screen
            options={({ route }) => {
              return {
                headerBackTitleVisible: false,
                headerTitleAlign: "left",
                headerTitle: route.params && route?.params?.fighter.name,
              };
            }}
            name="FighterDetails"
            component={FighterDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
