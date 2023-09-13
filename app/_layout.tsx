import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Colors from "../constants/Colors";
import { View } from "react-native";
import { globalStyles } from "../constants/globalStyles";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <View style={globalStyles.fullScreen}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.dark.background },
          headerTintColor: Colors.dark.tint,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      </View>
    </Provider>
  );
};

export default AppLayout;
