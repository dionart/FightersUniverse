import { FighterDetails } from "@/screens/FighterDetails";
import { Home } from "@/screens/Home";
import { Onboarding } from "@/screens/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Platform, StatusBar } from "react-native";
import { Filters } from "@/screens/Filters";
import { FilterIcon } from "@/components/FilterIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AppNavigatorParamList } from "./app-navigator-param-list";
import theme from "@/config/theme";

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  const activeFilter = useSelector(
    (state: RootState) => state.app.currentFilter
  );

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.blue["400"]}
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.secondary,
            },
            headerTintColor: theme.colors.white,
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
                  <FilterIcon
                    onPress={() => navigation.navigate("Filters")}
                    fillColor={
                      activeFilter ? theme.colors.primary : theme.colors.white
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
      </NavigationContainer>
    </>
  );
};
