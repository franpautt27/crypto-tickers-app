import { Ticker } from "../interfaces/tickerInterfaces";

export const filterTickersByNameOrId = (
  searchTerm: string,
  tickersArrayForSearch: Ticker[]
) => {
  if (isNaN(Number(searchTerm))) {
    if (searchTerm.length < 3) {
      return [];
    }
    return tickersArrayForSearch.filter((ticker) =>
      ticker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const searchTickerById = tickersArrayForSearch.find(
    (ticker) => ticker.id === searchTerm
  );

  return searchTickerById ? [searchTickerById] : [];
};
