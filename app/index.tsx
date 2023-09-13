import { View, Button } from "react-native";
import React, { useEffect } from "react";
import useTickersPaginated from "../hooks/useTickersPaginated";
import { useAppSelector } from "../redux/hooks";
import GeneralList from "../components/GeneralList";
import TickersListItem from "../components/Tickers/TickersListItem";
import TickersListLoading from "../components/Tickers/TickersListLoading";

const HomeScreen = () => {
  const { tickers } = useAppSelector((state) => state.ticker);
  const { loadTickers } = useTickersPaginated();

  useEffect(() => {
    console.log(tickers.length);
  });

  return (
    <GeneralList
      ItemComponent={TickersListItem}
      ItemLoadingComponent={TickersListLoading}
      items={tickers}
      resourceName="ticker"
      onEndReached={loadTickers}
    />
  );
};

export default HomeScreen;
