import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const useAppNavigation = () => {
  const {push} = useRouter()

  const goToTickerDetails = (id: string) => {
    push({ pathname: '/tickers/[id]', params: { id } })
  }

  return {
    goToTickerDetails
  }
}

export default useAppNavigation