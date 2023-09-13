import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ticker } from '../../interfaces/tickerInterfaces';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
    ticker: Ticker;
    onSelect: ()=>void;
  }

const TickersListItem = (props: Props) => {
    const { ticker,onSelect } = props;
    return (
      <Pressable onPress={onSelect}>
        <View style={[globalStyles.directionRow]}>
          <Text>{ticker.name}</Text>
          <Text>{ticker.price_usd}</Text>
        </View>
      </Pressable>
    );
}

export default TickersListItem