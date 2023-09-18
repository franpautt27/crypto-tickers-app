import { View } from "react-native";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Stack } from "expo-router";
import { globalStyles } from "../../constants/globalStyles";
import { LogBox } from "react-native";
import Title from "../../components/UI/Title";
import BigCard from "../../components/UI/BigCard";
import { formatValue } from "../../utils/fomatValue";
import CustomText from "../../components/UI/CustomText";
import TickerInfoRow from "../../components/Tickers/TickerInfoRow";
import Colors from "../../constants/Colors";
import { returnMedalType } from "../../utils/returnMedalType";

const TickerDetails = () => {
  LogBox.ignoreLogs(["The `redirect` prop on <Screen /> is deprecated"]);
  const { selectedTicker } = useAppSelector((state) => state.ticker);
  const {
    csupply,
    id,
    market_cap_usd,
    msupply,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    rank,
    tsupply,
    volume24,
  } = selectedTicker!;
  let rankColor: string;
  const { color: medalColor, medal } = returnMedalType(rank);
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
        value={"$ " + formatValue(selectedTicker!.price_usd) + " USD"}
      />
      <View style={{ width: "100%", marginTop: 20 }}>
        <Title>Information:</Title>
        <TickerInfoRow
          infoColor={medalColor}
          info={medal + " " + rank}
          label="Rank"
        />
        <TickerInfoRow
          infoColor={
            Number(percent_change_1h) > 0 ? Colors.success : Colors.danger
          }
          info={percent_change_1h + "%"}
          label="% Change last hour"
        />
        <TickerInfoRow
          infoColor={
            Number(percent_change_24h) > 0 ? Colors.success : Colors.danger
          }
          info={percent_change_24h + "%"}
          label="% Change last day"
        />
        <TickerInfoRow
          infoColor={
            Number(percent_change_7d) > 0 ? Colors.success : Colors.danger
          }
          info={percent_change_7d + "%"}
          label="% Change last week"
        />
        <TickerInfoRow
          info={"$ " + formatValue(market_cap_usd)}
          label="Market capitalization (USD)"
        />
        <TickerInfoRow
          info={formatValue(volume24.toString())}
          label="24 hours Volume"
        />
        <TickerInfoRow info={formatValue(csupply)} label="Circulating supply" />
        <TickerInfoRow
          info={formatValue(msupply ?? "N/A")}
          label="Maximum supply"
        />
        <TickerInfoRow
          info={formatValue(tsupply ?? "N/A")}
          label="Total supply"
        />
      </View>
    </View>
  );
};

export default TickerDetails;
