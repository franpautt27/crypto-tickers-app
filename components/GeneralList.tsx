import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { GlobalItem } from "../interfaces/globalItemInterface";
import BigList from "react-native-big-list";

interface Props {
  items: GlobalItem[];
  resourceName: "ticker";
  ItemComponent: React.FC<any>;
  ItemLoadingComponent: React.FC;
  onEndReached?: () => void;
}
const GeneralList = (props: Props) => {
  const {
    ItemComponent,
    items,
    resourceName,
    ItemLoadingComponent,
    onEndReached,
  } = props;

  if (items.length === 0) return <ItemLoadingComponent />;

  const headerComponent = () => (
    <View>
      <Text>List of {resourceName}s</Text>
    </View>
  );
  const renderFooter = () => <ActivityIndicator />;

  return (
    <BigList
    
      renderFooter={renderFooter}
      headerHeight={50}
      footerHeight={50}
      itemHeight={50}
      renderHeader={headerComponent}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemComponent {...{ [resourceName]: item }} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.6}
    />
  );
};

export default GeneralList;
