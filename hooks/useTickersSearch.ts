import React, { useState, useEffect } from "react";
import { Ticker } from "../interfaces/tickerInterfaces";
import { fetchTickers } from "../services/tickers";

const useTickersSearch = () => {
  const [tickersList, setTickersList] = useState<Ticker[]>([]);
  let shouldStopFetching: boolean = false;

  const loadRecursiveTickers = async (
    tickers: Ticker[],
    start: number,
    end: number,
  ) => {
    let newTickersList: Ticker[] = [];
    if (start <= end) {
      const resp = await fetchTickers({ start });
      
      const nextStart = start + 100;
      if(!shouldStopFetching){
        newTickersList = await loadRecursiveTickers(
          (resp.data),
          nextStart,
          resp.info.coins_num,
        );
      }
      
    }
    return tickers.concat(newTickersList);
  };

  useEffect(() => {
    async function getData() {
      const data = await loadRecursiveTickers([], 0, 0);
      setTickersList(data)
    }
    getData();

    return () => {
      shouldStopFetching = true;
    };
  }, []);

  return {
    tickersList,
  };
};

export default useTickersSearch;
