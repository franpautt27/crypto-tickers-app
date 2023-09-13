import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Info, Ticker } from "../../interfaces/tickerInterfaces";
import { fetchTickersThunk } from "../thunks/tickerThunks";

export interface TickerState {
  info: Info | null;
  tickers: Ticker[];
  selectedTicker: Ticker | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  start: number;
  total: number;
}

const initialState: TickerState = {
  tickers: [],
  selectedTicker: null,
  status: "idle",
  info: null,
  start: 0,
  total: 0,
};

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    setSelectedTicker: (state, action: PayloadAction<Ticker>) => {
      state.selectedTicker = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickersThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTickersThunk.fulfilled, (state, action) => {
      state.start += 100;
      state.tickers = state.tickers.concat(action.payload.data);
      if (state.total === 0) {
        state.total = action.payload.info.coins_num;
      }
      state.status = "succeeded";
    });
    builder.addCase(fetchTickersThunk.rejected, (state) => {
      state.status = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedTicker } = tickerSlice.actions;

export default tickerSlice.reducer;
