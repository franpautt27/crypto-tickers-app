import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../constants/globalStyles";
import CustomText from "../components/UI/CustomText";
import SearchInput from "../components/UI/SearchInput";
import useTickersSearch from "../hooks/useTickersSearch";
import TickersListLoading from "../components/Tickers/TickersListLoading";
import Title from "../components/UI/Title";
import { Ticker } from "../interfaces/tickerInterfaces";
import GeneralList from "../components/GeneralList";
import TickersListItem from "../components/Tickers/TickersListItem";
import TickerSearchInitialRender from "../components/Tickers/TickerSearchInitialRender";
import TickerSearchNotFound from "../components/Tickers/TickerSearchNotFound";

const SearchScreen = () => {
  const { allTickers } = useTickersSearch();

  const [searchTerm, setSearchTerm] = useState("");

  const [tickersFiltered, setTickersFiltered] = useState<Ticker[]>([]);

  useEffect(() => {
    

    if(isNaN(Number(searchTerm))){
      if (searchTerm.length < 3) {
        return setTickersFiltered([]);
      }
      setTickersFiltered(
        allTickers.filter((ticker) =>
          ticker.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }else{
      const searchTickerById = allTickers.find( (ticker) => ticker.id === searchTerm  )
      setTickersFiltered(
        searchTickerById ? [searchTickerById] : []
      );
    }

    
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
