import React, {memo} from "react";
import { Ticker } from "../../interfaces/tickerInterfaces";
import useAppNavigation from "../../hooks/useAppNavigation";
import { useAppDispatch } from "../../redux/hooks";
import { setSelectedTicker } from "../../redux/slices/tickerSlice";
import Card from "../UI/Card";

interface Props {
  ticker: Ticker;
}

const TickersListItem = (props: Props) => {
  const { ticker } = props;
  const dispatch = useAppDispatch();
  const { goToTickerDetails } = useAppNavigation();

  const onSelectItem = () => {
    dispatch(setSelectedTicker(ticker));
    goToTickerDetails(ticker.id);
  };
  
  return (
    <Card
      marketCap={ticker.market_cap_usd}
      percentChange={ticker.percent_change_7d}
      onPress={onSelectItem}
      rank={ticker.rank}
      symbol={ticker.symbol}
      title={ticker.name}
      usdExchange={ticker.price_usd}
    />
  );
};

export default memo(TickersListItem)
