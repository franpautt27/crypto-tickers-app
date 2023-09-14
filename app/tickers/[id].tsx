import { View } from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Stack } from "expo-router";
import { globalStyles } from "../../constants/globalStyles";
import { LogBox } from 'react-native';
import Title from "../../components/UI/Title";

const TickerDetails = () => {
  LogBox.ignoreLogs(['The `redirect` prop on <Screen /> is deprecated']);
  const { selectedTicker } = useAppSelector((state) => state.ticker);
  return (
    <View style={[globalStyles.fullScreen, globalStyles.centered]}>
      <Stack.Screen
        options={{
          title: selectedTicker!.name,
        }}
      />
      <Title>Price in USD</Title>
      <Title>{selectedTicker!.id}</Title>
    </View>
  );
};

export default TickerDetails;
