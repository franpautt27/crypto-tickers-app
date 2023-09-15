import { useEffect } from "react";
import { Ticker } from "../interfaces/tickerInterfaces";
import { fetchTickers } from "../services/tickers";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllTickers } from "../redux/slices/tickerSlice";

const useTickersSearch = () => {
  const { allTickers, total } = useAppSelector((state) => state.ticker);
  const dispatch = useAppDispatch();
  let shouldStopFetching: boolean = false;
  //! This function is very slow, it loads recursively all the data from the API, I only use it because I need to filter all the tickers regarding their name or id
  //! and I can't do that with the paginated API (I can't even change the limit value to simplify the work).
  //! I recognize this is a bad practice, the API should be the one that provides all that filtering functionality, however I can't modify it
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
      shouldStopFetching = true; //cleaner function
    };
  }, []);

  return {
    allTickers,
  };
};

export default useTickersSearch;
