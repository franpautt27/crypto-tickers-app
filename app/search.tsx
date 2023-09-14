import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../constants/globalStyles'
import CustomText from '../components/UI/CustomText'
import SearchInput from '../components/UI/SearchInput'
import useTickersSearch from '../hooks/useTickersSearch'
import TickersListLoading from '../components/Tickers/TickersListLoading'

const SearchScreen = () => {
  const {tickersList} = useTickersSearch()

  if(tickersList.length === 0) return <TickersListLoading />
  return (
    <View style={[globalStyles.fullScreen, globalStyles.globalPaddingHorizontal]}>
      <SearchInput  />
    </View>
  )
}

export default SearchScreen