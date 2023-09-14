import { CancelToken } from "axios";
import { TickerParamsType } from "../interfaces/paramsInterface";
import { FetchedTickers } from "../interfaces/tickerInterfaces";
import api from "./api";

export async function fetchTickers({
  limit = 100,
  start = 0,
}: TickerParamsType ) {
  const fetchedTickers = await api.get<FetchedTickers>("/tickers/", {
    params: { start, limit },
  });
  return fetchedTickers.data;
}
