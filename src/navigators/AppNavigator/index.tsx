import { FighterDetails } from "@/screens/FighterDetails";
import { Home } from "@/screens/Home";
import { Onboarding } from "@/screens/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding"
            component={Onboarding}
          />
          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTitleAlign: "left",
            }}
            name="Fighters"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTitleAlign: "left",
            }}
            name="FighterDetails"
            component={FighterDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
