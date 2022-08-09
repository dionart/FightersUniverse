import theme from "@/config";
import { FighterDetails } from "@/screens/FighterDetails";
import { Home } from "@/screens/Home";
import { Onboarding } from "@/screens/Onboarding";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Platform, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigatorParamList } from "./app-navigator-param-list";
import FilterSVG from "@/assets/images/filter.svg";
import { Filters } from "@/screens/Filters";
import { Header } from "@/components/Header";

const Stack = createNativeStackNavigator();

type ScreenRouteProp = RouteProp<AppNavigatorParamList, "FighterDetails">;

export const AppNavigator = () => {
  return (
    <>
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
            options={({ navigation }) => {
              return {
                headerShown: true,
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Filters")}
                  >
                    <FilterSVG />
                  </TouchableOpacity>
                ),
              };
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
          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTitleAlign: "left",
            }}
            name="Filters"
            component={Filters}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
