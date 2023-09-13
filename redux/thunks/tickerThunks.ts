import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTickers } from "../../services/tickers";
import { TickerParamsType } from "../../interfaces/paramsInterface";

export const fetchTickersThunk = createAsyncThunk("tickers/fetch", async (tickerParams: TickerParamsType) => {
    const fetchedTickers = await fetchTickers(tickerParams);
    return fetchedTickers
  });