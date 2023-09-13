import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { GlobalItem } from "../interfaces/globalItemInterface";
import BigList from "react-native-big-list";
import { globalStyles } from "../constants/globalStyles";
import Title from "./UI/Title";

interface Props {
  items: GlobalItem[];
  resourceName: "ticker";
  ItemComponent: React.FC<any>;
  ItemLoadingComponent: React.FC;
  onEndReached?: () => void;
  isAllLoaded?: boolean;
}
const GeneralList = (props: Props) => {
  const {
    ItemComponent,
    items,
    resourceName,
    ItemLoadingComponent,
    onEndReached,
    isAllLoaded = true,
  } = props;

  if (items.length === 0) return <ItemLoadingComponent />;

  const headerComponent = () => (
    <View style={globalStyles.globalMarginHorizontal}>
      <Title>List of {resourceName}s</Title>
    </View>
  );
  const renderFooter = () => {
    if (isAllLoaded) return;
    return <ActivityIndicator />;
  };

  return (
    <BigList
      renderHeader={headerComponent}
      headerHeight={50}
      data={items}
      itemHeight={50}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemComponent {...{ [resourceName]: item }} />}
      renderFooter={renderFooter}
      footerHeight={50}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.6}
    />
  );
};

export default GeneralList;

const styles = StyleSheet.create({});
