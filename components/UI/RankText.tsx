import { StyleSheet, Text, View, ViewStyle, StyleProp } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { returnMedalType } from "../../utils/returnMedalType";

interface Props {
  rankValue: number;
  style?: StyleProp<ViewStyle>
}

const RankText = (props: Props) => {
  const { rankValue, style } = props;
  const {medal, color} = returnMedalType(rankValue)
  return (
    <View
      style={[styles.container, style]}
    >
      <Text
        style={[styles.text, {color}]}
      >
        {" "}
        {medal + " " + rankValue}
      </Text>
    </View>
  );
};

export default RankText;

const styles = StyleSheet.create({
    container: {
        padding: 3,
        borderRadius: 6,
      },
      text: {
        fontWeight: "bold",
        color: Colors.dark.text,
        fontSize: 16
      }
});
