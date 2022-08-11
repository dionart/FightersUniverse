import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppNavigator } from "../AppNavigator";
import { OnboardingNavigator } from "../OnboardingNavigator";
import { RootState } from "@/store";
import { initialize } from "@/store/app";

export const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { hasSeenOnboarding } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize() as any);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {hasSeenOnboarding ? (
        <Stack.Screen name={"AppNavigator"} component={AppNavigator} />
      ) : (
        <Stack.Screen
          name={"OnboardingNavigator"}
          component={OnboardingNavigator}
        />
      )}
    </Stack.Navigator>
  );
};
