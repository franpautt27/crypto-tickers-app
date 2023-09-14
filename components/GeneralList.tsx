import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { GlobalItem } from "../interfaces/globalItemInterface";
import BigList from "react-native-big-list";


interface Props {
  items: GlobalItem[];
  resourceName: "ticker";
  ItemComponent: React.FC<any>;
  headerComponent: React.FC;
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
    headerComponent
  } = props;

  if (items.length === 0) return <ItemLoadingComponent />;

 
  const renderFooter = () => {
    if (isAllLoaded) return;
    return <ActivityIndicator />;
  };

  return (
    <BigList
      renderHeader={headerComponent}
      headerHeight={80}
      data={items}
      itemHeight={80}
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
