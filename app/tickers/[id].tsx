import { View } from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Stack } from "expo-router";
import { globalStyles } from "../../constants/globalStyles";
import { LogBox } from "react-native";
import Title from "../../components/UI/Title";
import BigCard from "../../components/UI/BigCard";
import { formatMoneyValue } from "../../utils/fomatMoneyValue";
import CustomText from "../../components/UI/CustomText";

const TickerDetails = () => {
  LogBox.ignoreLogs(["The `redirect` prop on <Screen /> is deprecated"]);
  const { selectedTicker } = useAppSelector((state) => state.ticker);
  return (
    <View
      style={[
        globalStyles.fullScreen,
        { alignItems: "center", paddingTop: 20, paddingHorizontal: 40 },
      ]}
    >
      <Stack.Screen
        options={{
          title: selectedTicker!.name,
        }}
      />
      <BigCard
        header="Exchange in USD:"
        value={"$ " + formatMoneyValue(selectedTicker!.price_usd) + " USD"}
      />
      <View style={{width: "100%", marginTop: 20}}>
        <Title>Information:</Title>
        <View style={globalStyles.directionRow}>
          <CustomText>% Change 1 hour:</CustomText>
          <CustomText>{selectedTicker!.percent_change_1h + "%"}</CustomText>
      </View>
      <View style={globalStyles.directionRow}>
          <CustomText>% Change 1 hour:</CustomText>
          <CustomText>{selectedTicker!.percent_change_1h + "%"}</CustomText>
      </View>
      </View>

        
    </View>
  );
};

export default TickerDetails;
