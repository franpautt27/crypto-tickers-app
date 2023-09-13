import { View, Text, FlatList, FlatListProps } from "react-native";
import React from "react";
import { GlobalItem } from "../interfaces/globalItemInterface";

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

  return (
    <FlatList
      ListHeaderComponent={headerComponent}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemComponent {...{ [resourceName]: item }} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
    />
  );
};

export default GeneralList;
