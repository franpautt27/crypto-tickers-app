import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Stack } from "expo-router";

const TickerDetails = () => {
  const { selectedTicker } = useAppSelector((state) => state.ticker);
  return (
    <View>
      <Stack.Screen
        redirect={undefined}
        options={{ title: selectedTicker!.name }}
      />
      <Text>Price in USD</Text>
      <Text>{selectedTicker!.price_usd}</Text>
    </View>
  );
};

export default TickerDetails;
