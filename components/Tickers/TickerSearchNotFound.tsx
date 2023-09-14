import { View, Text } from 'react-native'
import React from 'react'
import Title from '../UI/Title'
import { globalStyles } from '../../constants/globalStyles'

const TickerSearchNotFound = () => {
  return (
    <View style={globalStyles.globalMargin}>
      <Title>Ticker Not Found :(</Title>
    </View>
  )
}

export default TickerSearchNotFound