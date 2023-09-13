import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const globalStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  globalMargin: {
    margin: 20,
  },
  globalMarginHorizontal: {
    marginHorizontal: 40,
  },
  globalMarginVertical: { marginVertical: 40 },
  directionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
});
