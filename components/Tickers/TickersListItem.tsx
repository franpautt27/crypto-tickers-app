import { View, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Ticker } from "../../interfaces/tickerInterfaces";
import { globalStyles } from "../../constants/globalStyles";
import useAppNavigation from "../../hooks/useAppNavigation";
import { useAppDispatch } from "../../redux/hooks";
import { setSelectedTicker } from "../../redux/slices/tickerSlice";
import CustomText from "../UI/CustomText";

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
    <TouchableOpacity activeOpacity={0.7} onPress={onSelectItem}>
      <View style={[globalStyles.directionRow]}>
        <CustomText>{ticker.name}</CustomText>
        <CustomText>{ticker.price_usd}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default TickersListItem;
