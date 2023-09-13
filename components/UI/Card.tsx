import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useRef } from "react";
import { globalStyles } from "../../constants/globalStyles";
import Title from "./Title";
import CustomText from "./CustomText";
import RankText from "./RankText";
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
  const indicatorColor = percentChange.includes("-") ? "red" : "green";
  const percentageValue = percentChange.includes("-") ? percentChange : "+" + percentChange
  return (
    <TouchableOpacity
      style={[globalStyles.directionRow, styles.container]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View>
        <Title style={styles.cardTitle}>{title}</Title>
        {/* <Text style={[styles.cardText,globalStyles.text, {color: indicatorColor}]}> <RankText></RankText> BTC -1.36% </Text> */}
        <View style={{ flexDirection: "row" }}>
          <RankText style={{ marginRight: 7 }} rankValue={rank} />
          
          <CustomText style={[styles.cardText, { color: indicatorColor, }]}>
            {symbol} {percentageValue}%
          </CustomText>
         
        </View>
      </View>
      <View>
        <Title style={styles.cardTitle}>${usdExchange} USD</Title>
        <CustomText style={styles.cardText}>MCap: {marketCap}</CustomText>
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
    alignSelf: "center" 
  },
});
