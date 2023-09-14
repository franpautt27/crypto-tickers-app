import { View, Text } from 'react-native'
import React from 'react'
import Title from '../UI/Title'
import { globalStyles } from '../../constants/globalStyles'

const TickerSearchInitialRender = () => {
  return (
    <View style={globalStyles.globalMargin}>
      <Title>Start typing to search!</Title>
    </View>
  )
}

export default TickerSearchInitialRender