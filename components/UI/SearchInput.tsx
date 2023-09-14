import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const SearchInput = () => {
  return (
    <View style={styles.textBackground}>
      <TextInput
        placeholder="Search ticker"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
      />

      <Ionicons name="search-outline" size={25} color="grey" />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textBackground: {
    backgroundColor: Colors.light.background,
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
