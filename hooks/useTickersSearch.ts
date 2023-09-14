import { useEffect } from "react";
import { Ticker } from "../interfaces/tickerInterfaces";
import { fetchTickers } from "../services/tickers";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllTickers } from "../redux/slices/tickerSlice";

const useTickersSearch = () => {
  const { allTickers, total } = useAppSelector((state) => state.ticker);
  const dispatch = useAppDispatch();
  let shouldStopFetching: boolean = false;

  const loadRecursiveTickers = async (
    tickers: Ticker[],
    start: number,
    end: number
  ) => {
    let newTickersList: Ticker[] = [];
    if (start <= end) {
      const resp = await fetchTickers({ start });
      const nextStart = start + 100;
      if (!shouldStopFetching) {
        newTickersList = await loadRecursiveTickers(
          resp.data,
          nextStart,
          resp.info.coins_num
        );
      }
    }
    return tickers.concat(newTickersList);
  };

  useEffect(() => {
    async function getData() {
      const data = await loadRecursiveTickers([], 0, 0);
      if (data.length === total) dispatch(setAllTickers(data));
    }
    if (allTickers.length === 0) {
      // just run the function when necessary
      getData();
    }

    return () => {
      shouldStopFetching = true;//cleaner function
    };
  }, []);

  return {
    allTickers,
  };
};

export default useTickersSearch;
