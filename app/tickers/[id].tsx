import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Stack } from "expo-router";
import { globalStyles } from "../../constants/globalStyles";
import { LogBox } from 'react-native';

const TickerDetails = () => {
  LogBox.ignoreLogs(['The `redirect` prop on <Screen /> is deprecated']);
  const { selectedTicker } = useAppSelector((state) => state.ticker);
  return (
    <View style={[globalStyles.fullScreen, globalStyles.centered]}>
      <Stack.Screen
        redirect={undefined}
        options={{
          title: selectedTicker!.name,
        }}
      />
      <Text>Price in USD</Text>
      <Text>{selectedTicker!.price_usd}</Text>
    </View>
  );
};

export default TickerDetails;
