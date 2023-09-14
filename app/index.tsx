import { View } from "react-native";
import React from "react";
import useTickersPaginated from "../hooks/useTickersPaginated";
import GeneralList from "../components/GeneralList";
import TickersListItem from "../components/Tickers/TickersListItem";
import TickersListLoading from "../components/Tickers/TickersListLoading";
import { globalStyles } from "../constants/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { loadTickers, isAllLoaded, tickers } = useTickersPaginated();
  const {top} = useSafeAreaInsets()

  return (
    <View style={[globalStyles.fullScreen]}>
      <GeneralList
        ItemComponent={TickersListItem}
        ItemLoadingComponent={TickersListLoading}
        items={tickers}
        resourceName="ticker"
        onEndReached={loadTickers}
        isAllLoaded={isAllLoaded}
        headerComponent={()=>null}
      />
    </View>
  );
};

export default HomeScreen;
