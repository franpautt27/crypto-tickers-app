import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../constants/globalStyles";
import SearchInput from "../components/UI/SearchInput";
import useTickersSearch from "../hooks/useTickersSearch";
import TickersListLoading from "../components/Tickers/TickersListLoading";
import Title from "../components/UI/Title";
import { Ticker } from "../interfaces/tickerInterfaces";
import GeneralList from "../components/GeneralList";
import TickersListItem from "../components/Tickers/TickersListItem";
import TickerSearchInitialRender from "../components/Tickers/TickerSearchInitialRender";
import TickerSearchNotFound from "../components/Tickers/TickerSearchNotFound";
import { filterTickersByNameOrId } from "../utils/filterTickers";

const SearchScreen = () => {
  const { allTickers } = useTickersSearch();

  const [searchTerm, setSearchTerm] = useState("");

  const [tickersFiltered, setTickersFiltered] = useState<Ticker[]>([]);

  useEffect(() => {
    const filteredArray = filterTickersByNameOrId(searchTerm, allTickers);
    setTickersFiltered(filteredArray);
  }, [searchTerm]);

  if (allTickers.length === 0) return <TickersListLoading />;
  return (
    <View
      style={[globalStyles.fullScreen, globalStyles.globalPaddingHorizontal]}
    >
      <SearchInput onDebounce={(value) => setSearchTerm(value)} />

      <GeneralList
        ItemComponent={TickersListItem}
        ItemLoadingComponent={
          searchTerm.length >= 3
            ? TickerSearchNotFound
            : TickerSearchInitialRender
        }
        headerComponent={() => (
          <View style={globalStyles.globalMargin}>
            <Title>{searchTerm}</Title>
          </View>
        )}
        items={tickersFiltered}
        resourceName="ticker"
      />
    </View>
  );
};

export default SearchScreen;
