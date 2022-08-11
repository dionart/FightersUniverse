import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StatusBar } from "react-native";
import { FilterIcon } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AppNavigatorParamList } from "./app-navigator-param-list";
import theme from "@/config/theme";
import { DetectPlatform } from "@/utils/detect-platform";
import { FighterDetails, Filters, Home, Onboarding } from "@/screens";

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  const { currentFilter, rateFilterValue } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.blue["400"]}
        barStyle={DetectPlatform("dark-content", "light-content")}
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.white,
        }}
      >
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerShown: true,
              headerBackVisible: false,
              headerBackTitleVisible: false,
              headerRight: () => (
                <FilterIcon
                  onPress={() => navigation.navigate("Filters")}
                  fillColor={
                    currentFilter || rateFilterValue
                      ? theme.colors.primary
                      : theme.colors.white
                  }
                />
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
              headerTitle: route.params.fighter.name,
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
    </>
  );
};
