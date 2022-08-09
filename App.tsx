import { AppNavigator } from "@/navigators/AppNavigator";
import { store } from "@/store";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
