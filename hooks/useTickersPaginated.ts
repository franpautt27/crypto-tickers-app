import  {  useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTickersThunk } from "../redux/thunks/tickerThunks";

const useTickersPaginated = () => {
  const { start, total, tickers } = useAppSelector((state) => state.ticker);

  const dispatch = useAppDispatch();
  const loadTickers = async () => {
    if (start > total) return;
    await dispatch(fetchTickersThunk({ start }));
  };

  useEffect(() => {
    loadTickers();
  }, []);

  return {
    loadTickers,
    isAllLoaded: start > total,
    tickers
  };
};

export default useTickersPaginated;
