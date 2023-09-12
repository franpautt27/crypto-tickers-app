import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { fetchTickers } from '../services/tickers'

const HomeScreen = () => {
    useEffect(() => {
      fetchTickers({}).then((res) => {console.log(res.info)})
    }, [])
    
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen