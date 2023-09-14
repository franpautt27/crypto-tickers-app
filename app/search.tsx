import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../constants/globalStyles'
import CustomText from '../components/UI/CustomText'

const SearchScreen = () => {
  return (
    <View style={globalStyles.fullScreen}>
      <CustomText>search</CustomText>
    </View>
  )
}

export default SearchScreen