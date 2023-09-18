import { StyleSheet, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useDebouncedValue from "../../hooks/useDebouncedValue";

interface Props {
  onDebounce: (value: string) => void;
}

const SearchInput = (props: Props) => {
  const { onDebounce } = props;
  const [textValue, setTextValue] = useState("");
  const debouncedValue = useDebouncedValue(textValue);
  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={styles.textBackground}>
      <TextInput
        placeholder="Search ticker"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        value={textValue}
        onChangeText={setTextValue}
      />

      <Ionicons name="search-outline" size={25} color={Colors.disabledColor} />
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
