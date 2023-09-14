import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../../constants/globalStyles";
import Title from "./Title";
import CustomText from "./CustomText";
import RankText from "./RankText";
import Colors from "../../constants/Colors";
import { formatMoneyValue } from "../../utils/fomatMoneyValue";
interface Props {
  title: string;
  usdExchange: string;
  symbol: string;
  marketCap: string;
  rank: number;
  percentChange: string;
  onPress: () => void;
}
const Card = (props: Props) => {
  const {
    marketCap,
    onPress,
    percentChange,
    rank,
    symbol,
    title,
    usdExchange,
  } = props;
  const indicatorColor = percentChange.includes("-")
    ? Colors.dark.danger
    : Colors.dark.success;
  const percentageValue = percentChange.includes("-")
    ? percentChange
    : "+" + percentChange;

  const isTitleReallyLong = title.length >= 13;
  const displayTitle = isTitleReallyLong ? symbol : title;
  return (
    <TouchableOpacity
      style={[globalStyles.directionRow, styles.container]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View>
        <Title style={styles.cardTitle}>{displayTitle}</Title>
        {/* <Text style={[styles.cardText,globalStyles.text, {color: indicatorColor}]}> <RankText></RankText> BTC -1.36% </Text> */}
        <View style={{}}>
          <CustomText style={[styles.cardText, { color: indicatorColor }]}>
            {symbol} {percentageValue}%
          </CustomText>
          <RankText style={{ marginRight: 7 }} rankValue={rank} />
        </View>
      </View>
      <View>
        <Title style={styles.cardTitle}>
          ${formatMoneyValue(usdExchange)} USD
        </Title>
        <CustomText style={styles.cardText}>
          MCap: {formatMoneyValue(marketCap)}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  cardTitle: {
    fontSize: 18,
  },
  cardText: {
    fontSize: 16,
    alignSelf: "center",
  },
});
