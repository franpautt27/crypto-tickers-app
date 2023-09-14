import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Colors from "../constants/Colors";
import { View } from "react-native";
import { globalStyles } from "../constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import TouchableIcon from "../components/UI/TouchableIcon";

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
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "CryptoCurrency",
              headerRight: () => (
                <TouchableIcon
                icon="search"
                onPress={()=>null}

                />
              ),
            }}
          />
        </Stack>
      </View>
    </Provider>
  );
};

export default AppLayout;
