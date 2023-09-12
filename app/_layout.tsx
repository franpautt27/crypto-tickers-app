import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Stack></Stack>
    </Provider>
  );
};

export default AppLayout;
