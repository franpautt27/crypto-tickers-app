import { StyleSheet, Text, View, ViewStyle, StyleProp } from "react-native";
import React, { useState } from "react";
import Title from "./Title";
import Colors from "../../constants/Colors";

interface Props {
  rankValue: number;
  style: StyleProp<ViewStyle>
}

const RankText = (props: Props) => {
  const { rankValue, style } = props;
  let medal = "🥇";
  if (rankValue < 10) {
    medal = "🥇";
  } else if (rankValue < 100) {
    medal = "🥈";
  } else {
    medal = "🥉";
  }
  return (
    <View
      style={[styles.container, style]}
    >
      <Text
        style={styles.text}
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
