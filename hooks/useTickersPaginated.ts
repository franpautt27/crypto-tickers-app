import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTickersThunk } from "../redux/thunks/tickerThunks";

const useTickersPaginated = () => {
  const { start, total } = useAppSelector((state) => state.ticker);

  const dispatch = useAppDispatch();
  const loadTickers = async () => {
    if (start > total) return;
    dispatch(fetchTickersThunk({ start }));
  };

  useEffect(() => {
    loadTickers();
  }, []);

  return {
    loadTickers,
  };
};

export default useTickersPaginated;
